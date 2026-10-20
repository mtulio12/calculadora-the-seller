"""Prepara as fotos da página de links.

Uso (dentro de links/):
    pip install "rembg[cpu]" pillow
    python tools/prepare-photos.py --topo caminho/foto.jpg [--avatar caminho/avatar.jpg]

Gera em src/assets/:
    foto-topo.png  + foto-topo.webp   (sem fundo, 1200px de altura)
    avatar.png     + avatar.webp      (quadrado 256px; sem --avatar, sai do rosto da foto recortada)
    og.jpg                           (1200x630 para compartilhamento)

Se a foto do topo já estiver sem fundo (PNG transparente), use --sem-rembg.
Confira o recorte em src/assets/foto-topo.png antes de publicar: cabelo e ombros
costumam ser os pontos com borda ruim.
"""
import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ASSETS = Path(__file__).resolve().parent.parent / "src" / "assets"
BG = (15, 22, 32)
DEEP = (0, 96, 171)
ACCENT = (0, 177, 226)


def remove_bg(img: Image.Image) -> Image.Image:
    from rembg import new_session, remove  # importado só quando necessário

    # birefnet-portrait recorta cabelo melhor e não leva o brilho do fundo junto (u2net levava)
    return remove(img, session=new_session("birefnet-portrait"), post_process_mask=True)


def avatar_from_cutout(cut: Image.Image) -> Image.Image:
    """Quadrado no rosto da foto recortada, sobre o degradê da marca."""
    alpha = cut.getchannel("A")
    band = alpha.crop((0, 0, cut.width, cut.height // 4))
    xs = [x for x in range(band.width) for y in range(0, band.height, 8) if band.getpixel((x, y)) > 128]
    cx = (min(xs) + max(xs)) // 2 if xs else cut.width // 2
    side = int(cut.width * 0.55)
    left = max(0, min(cut.width - side, cx - side // 2))
    top = int(cut.height * 0.015)
    face = cut.crop((left, top, left + side, top + side))
    ground = gradient(face.size, DEEP, BG).convert("RGBA")
    ground.alpha_composite(face)
    return ground.convert("RGB")


def trim(img: Image.Image) -> Image.Image:
    box = img.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
    return img.crop(box) if box else img


def gradient(size, top, bottom):
    w, h = size
    col = Image.new("RGB", (1, h))
    for y in range(h):
        t = y / max(h - 1, 1)
        col.putpixel((0, y), tuple(round(a + (b - a) * t) for a, b in zip(top, bottom)))
    return col.resize(size)


def font(size):
    for name in ("Poppins-SemiBold.ttf", "DejaVuSans-Bold.ttf"):
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    return ImageFont.load_default()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--topo", required=True)
    ap.add_argument("--avatar")
    ap.add_argument("--sem-rembg", action="store_true")
    ap.add_argument("--nome", default="Marco Túlio")
    ap.add_argument("--frase", default="Empreendedor · IA e Vendas")
    a = ap.parse_args()
    ASSETS.mkdir(parents=True, exist_ok=True)

    hero = Image.open(a.topo).convert("RGBA")
    if not a.sem_rembg:
        hero = remove_bg(hero)
    hero = trim(hero)
    hero.thumbnail((10_000, 1200), Image.LANCZOS)
    hero.save(ASSETS / "foto-topo.png", optimize=True)
    hero.save(ASSETS / "foto-topo.webp", quality=80, method=6)

    if a.avatar:
        av = Image.open(a.avatar).convert("RGB")
        s = min(av.size)
        av = av.crop(((av.width - s) // 2, (av.height - s) // 2, (av.width + s) // 2, (av.height + s) // 2))
    else:
        av = avatar_from_cutout(hero)
    av = av.resize((256, 256), Image.LANCZOS)
    av.save(ASSETS / "avatar.png", optimize=True)
    av.save(ASSETS / "avatar.webp", quality=85, method=6)

    og = gradient((1200, 630), DEEP, BG).convert("RGBA")
    glow = Image.new("RGBA", og.size, (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse((700, 40, 1180, 520), fill=ACCENT + (120,))
    og.alpha_composite(glow.filter(ImageFilter.GaussianBlur(90)))
    person = hero.copy()
    person.thumbnail((560, 600), Image.LANCZOS)
    og.alpha_composite(person, (1200 - person.width - 60, 630 - person.height))
    d = ImageDraw.Draw(og)
    d.text((80, 230), a.nome, font=font(84), fill="white")
    d.text((82, 340), a.frase, font=font(36), fill=ACCENT)
    og.convert("RGB").save(ASSETS / "og.jpg", quality=86, optimize=True)

    print("Pronto:", ", ".join(p.name for p in sorted(ASSETS.glob("*.*"))))
    print("Agora rode: node build.mjs")


if __name__ == "__main__":
    main()
