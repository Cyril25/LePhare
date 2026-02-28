# Le Phare de Malbuisson — Site Web

Site vitrine du bar lounge Le Phare de Malbuisson.
**URL live :** https://cyril25.github.io/LePhare/

## Modifier le contenu

### Ajouter un événement dans l'agenda
1. Ouvrir `index.html`
2. Chercher le commentaire `AGENDA` (Ctrl+F → "AGENDA — Copier")
3. Copier un bloc `<!-- EVENT-CARD -->` … `<!-- /EVENT-CARD -->` complet
4. Modifier les **4 champs** :
   - `datetime="2026-07-11"` → date ISO de l'événement
   - `>Sam 11 Juillet 2026<` → texte lisible de la date
   - `event-card__title` → nom de l'événement
   - `event-card__desc` → description (≤ 80 mots)
5. Mettre à jour le lien WhatsApp : remplacer le texte après `text=` dans le `href` du CTA
6. Sauvegarder → l'événement apparaît immédiatement dans Live Server

### Supprimer un événement passé
1. Sélectionner le bloc complet `<!-- EVENT-CARD -->` … `<!-- /EVENT-CARD -->`
2. Supprimer la sélection
3. Sauvegarder et déployer

### Modifier les horaires
1. Ouvrir `index.html`
2. Chercher le commentaire `HORAIRES`
3. Modifier le texte directement

### Ajouter une image dans la galerie
1. Optimiser l'image en WebP via [Squoosh](https://squoosh.app) (qualité 80%, max 1200px, < 150 ko)
2. Nommer le fichier : `galerie-description-01.webp`
3. Déposer dans `assets/images/`
4. Ajouter une ligne `<img>` dans la section galerie de `index.html`

## Prévisualiser en local
1. Ouvrir le dossier dans VS Code
2. Clic droit sur `index.html` → "Open with Live Server"
3. Le navigateur s'ouvre automatiquement avec hot reload
4. Toute sauvegarde de fichier rafraîchit le navigateur en < 2 secondes

> **Note :** En développement local, `<base href="/LePhare/">` peut affecter les chemins.
> Si les assets ne chargent pas, tester directement sur GitHub Pages après push.

## Vérifier le rendu mobile
1. Ouvrir Chrome (ou Edge) avec Live Server actif
2. Appuyer sur **F12** pour ouvrir les DevTools
3. Cliquer sur l'icône "Toggle device toolbar" (Ctrl+Shift+M)
4. Sélectionner **390px** (iPhone 14) ou **360px** (Android) dans la liste
5. Vérifier : texte lisible, boutons ≥ 44px, pas de débordement horizontal
6. Tester également à 768px (tablette) et 1024px (desktop)

## Déployer sur GitHub Pages

```bash
git add .
git commit -m "content: mise à jour agenda"
git push origin main
# → Site mis à jour en ~30 secondes sur https://cyril25.github.io/LePhare/
```

## Convention de commits

| Préfixe | Usage |
|---------|-------|
| `feat:` | Nouveau composant ou section |
| `fix:` | Correction bug |
| `content:` | Mise à jour contenu (agenda, horaires, photos) |
| `chore:` | Config, setup |
| `style:` | Ajustement CSS |
| `a11y:` | Fix accessibilité |

## Structure du projet

```
LePhare/
├── index.html              ← Point d'entrée unique
├── 404.html                ← Page d'erreur GitHub Pages
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── assets/
│   ├── css/
│   │   ├── tokens.css      ← Variables CSS (couleurs, typo) — SOURCE DE VÉRITÉ
│   │   ├── layout.css      ← Grilles globales
│   │   ├── components.css  ← Composants C1–C8
│   │   └── utilities.css   ← Helpers
│   ├── js/
│   │   ├── nav.js          ← Navigation sticky
│   │   └── form.js         ← Formulaire privatisation
│   ├── images/             ← Photos WebP optimisées
│   └── fonts/              ← Fontes self-hosted (.woff2)
└── README.md
```

## Configuration GitHub Pages (première fois)

1. Aller sur https://github.com/Cyril25/LePhare/settings/pages
2. Source → "Deploy from branch"
3. Branche : `main` · Dossier : `/ (root)`
4. Cliquer "Save"
5. Attendre ~1 minute → URL disponible : `https://cyril25.github.io/LePhare/`
