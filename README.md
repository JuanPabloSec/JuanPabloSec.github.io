# Leszek Papierz — Personal Website

Strona portfolio dla działalności AI Creative Studio i Tattoo Studio.

## Struktura plików

```
├── index.html      # Główna strona — AI reklamy & grafiki
├── tattoo.html     # Podstrona tatuaży
└── README.md
```

## GitHub Pages — jak wrzucić

1. Stwórz nowe repozytorium na GitHub (np. `leszekpapierz.github.io` lub dowolna nazwa)
2. Wrzuć oba pliki (`index.html`, `tattoo.html`) do głównego folderu repo
3. Idź w **Settings → Pages**
4. Wybierz source: **Deploy from a branch → main → / (root)**
5. Kliknij Save — strona będzie dostępna pod adresem `https://[twoja-nazwa].github.io/[repo]/`

## Co zmienić przed publikacją

- `leszek@papierz.pl` → Twój email
- `@leszekpapierz` → Twój Instagram
- `@leszekpapierz.tattoo` → Instagram tattoo
- Numer WhatsApp w linku `wa.me/48XXXXXXXXX`
- Zdjęcia portfolio — podmień placeholder `gallery-item` na prawdziwe `<img>` tagi
- Zdjęcie profilowe w sekcji "O mnie"
- Ceny według własnego cennika

## Customowe zdjęcia portfolio

Żeby dodać własne zdjęcie tatuażu, zastąp zawartość `gallery-item`:

```html
<div class="gallery-item" data-style="blackwork">
  <img src="foto/tatuaz1.jpg" alt="Blackwork sleeve" style="width:100%;height:100%;object-fit:cover;">
  <div class="gallery-overlay">...</div>
</div>
```

## Fonty

Strona korzysta z Google Fonts (Syne + DM Sans) — wymagane połączenie internetowe.
Do pracy offline można pobrać fonty lokalnie.
