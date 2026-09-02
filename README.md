# D&D-Style Portfolio

A personal portfolio site with a fantasy/RPG theme, combining an explorable interactive map with a more traditional standard portfolio, accessible via one of the map's "locations."

---

## Concept

The site opens to a "Desktop" scene: a character (avatar) sitting at a desk, surrounded by clickable elements representing the different sections of the portfolio, each reinterpreted in a D&D style.

For "Mobile" is still WIP.

- **Hover and click over the master** → displays a D&D-style character sheet with personal information (identity, attributes, "Front-End Developer" class, etc.)
- **Click on a box/location** → zooms in on the area and opens the corresponding page.

### The 6 Locations

| # | Nome location | Sezione portfolio |
|---|----------------|--------------------|
| 1 | Castle of Projects | Projects |
| 2 | Alchemist Lab *(WIP)* | WIP |
| 3 | Library of Knowledge | Skill / tech |
| 4 | Quest Board | Experiences |
| 5 | Messenger's Guild | Contacts |
| 6 | The Boring Inn | Base Portfolio |

---

## Technical Stack

- **React** + **Vite**
- **react-router-dom** for routing (with `HashRouter`, for compatibility with GitHub Pages)
- Mix of `.jsx` / `.tsx` files
- Publishing to **GitHub Pages**
- Others incoming

## Project Structure

```
src/
├── files/
│ └── base-portfolio/
│ └── base-portfolio.pdf # character sheet / D&D-style CV
├── images/
│ └── desktop/
│ ├── home/
│ └── locations/
│ ├── alchemist-lab/
│ ├── library-of-knowledge/
│ ├── messengers-guild/
│ ├── quest-board/
│ └── the-boring-inn/
├── pages/
│ ├── HomePage.tsx # Desktop scene with interactive map
│ ├── AboutPage.tsx
│ ├── ExperiencePage.tsx # Quest Board
│ ├── ProjectsPage.tsx # Castle of Projects
│ ├── SkillPage.tsx # Library of Knowledge
│ ├── ContactsPage.tsx # Messenger's Guild
│ ├── WIPPage.tsx # Alchemist Lab
│ └── BasePortfolioPage.tsx # The Boring Inn (standard portfolio)
├── App.jsx
├── main.jsx
└── index.css
```

---

## Development Checklist

### Setup & Routing
- [x] Vite + React Configuration
- [x] Routing with `react-router-dom` (`HashRouter` for GitHub Pages)
- [x] Fallback Route (`*` → redirect to Home)
- [ ] Basic Layout Shared Between Pages (Header/Nav/Footer, if applicable)

### Desktop Scene (Home)
- [ ] Basic Illustration/Scene Desktop
- [ ] Positioning of the 6 clickable areas (hotspots) aligned with the image
- [ ] Hover on the character → show character sheet (tooltip/popup)
- [ ] Click on hotspot → zoom animation on the location
- [ ] Click on hotspot → navigation to the corresponding page
- [ ] Responsive version of the scene (mobile/tablet)

### Character Sheet
- [ ] D&D-style character sheet design (based on the PDF template)
- [ ] Identity Section (name, photo, role)
- [ ] Attributes Section (Creativity, Logic, Curiosity, Problem Solving, Precision, Adaptability)
- [ ] Character Section (Class: Front-End Developer)
- [ ] Staff Section
- [ ] Removal of combat parts (irrelevant)

### Castle of Projects (ProjectsPage)
- [ ] Grid/List Layout Projects
- [ ] Project card (image, title, stack, demo/repo link)
- [ ] Filter by project type or technology (optional)

### Alchemist Lab — WIP (WIPPage)
- [ ] Section dedicated to ongoing work/projects
- [ ] "In development" badge/label

### Library of Knowledge (SkillPage)
- [ ] List of skills/technologies with level or category
- [ ] Icons for each technology, if applicable
- [ ] Grouping by area (Front-End, Back-End, Tools, etc.)

### Quest Board (ExperiencePage)
- [ ] Work experience timeline
- [ ] Details for each experience (role, period, description)

### Messenger's Guild (ContactsPage)
- [ ] Contact form or direct links (email, LinkedIn, GitHub, etc.)
- [ ] Possible email integration (e.g., EmailJS or similar)

### The Boring Inn (BasePortfolioPage)
- [ ] "Standard portfolio" version without fantasy elements
- [ ] Ability to view/download the PDF (`base-portfolio.pdf`)

### Style & Content
- [ ] Color palette and fonts consistent with the fantasy theme
- [ ] Illustrations/assets for each location
- [ ] Final texts for each section

### Publishing
- [ ] `vite.config.js` configuration for GitHub Pages (correct base path)
- [ ] Test direct URL navigation with hash routing
- [ ] Deploy to GitHub Pages
- [ ] Final cross-browser and responsive testing

---

## Notes

- The PDF `base-portfolio.pdf` serves as both a downloadable CV and a visual reference for the character sheet.
- Location images are organized in `src/images/desktop/locations/`, one folder for each area.