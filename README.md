# Legalo 🌉

**Legalo** is an AI-powered Civic and Legal Empowerment platform prototype,
built for a hackathon.

It helps citizens understand government and legal information in simple
language and guides them toward clear next steps.

> This is a **frontend-only prototype**. All AI responses, RTI drafts, and
> scheme results use mock/sample data — no real backend or AI API is
> connected yet.

## Tech Stack

- React (with Vite)
- Plain JavaScript (no TypeScript)
- Plain CSS (no framework)
- react-router-dom for page navigation
- lucide-react for icons

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx        - top navigation bar
│   ├── Footer.jsx         - site footer
│   ├── FeatureCard.jsx    - reusable card for the 4 features on Home
│   ├── ChatBox.jsx        - chat-style bubble used in Rights Navigator
│   └── SourceCard.jsx     - card for showing an official source
│
├── pages/
│   ├── Home.jsx              - landing page (hero, features, dashboard)
│   ├── RightsNavigator.jsx   - describe your problem, get guided steps
│   ├── RTIAssistant.jsx      - 3-step RTI draft generator
│   └── SchemeFinder.jsx      - form to find relevant government schemes
│
├── App.jsx     - sets up routing between pages
├── main.jsx    - React entry point
└── index.css   - all styling (colors, layout, components)
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually
`http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Demo Flow

1. Go to **Rights Navigator**.
2. Type: *"My landlord has not returned my security deposit."*
3. Click **Understand My Problem** — Legalo shows the category
   (Tenant / Rental Issue) and possible next steps.
4. Answer the guided question (*Do you have a written rental agreement?*).
5. See **Your Possible Next Steps** as a timeline, plus **Official Sources**.

You can also try **RTI Assistant** to generate a sample RTI draft, or
**Scheme Finder** to see sample government schemes.

## What's Next (Version 2 ideas)

- Connect a real AI/RAG backend for the Rights Navigator responses
- Pull real official government sources and links
- Add more languages and translated content
- Add a real form-filling assistant

## Disclaimer

This platform provides general information based on public sources. It
does not replace professional legal advice or official government
confirmation.
