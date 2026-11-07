# WDD 430 Portfolio

A simple portfolio site built for the WDD 430 W01 assignment with Next.js (App Router), TypeScript and Tailwind CSS.

**Live site (Vercel):** `https://wdd430-portfolio-two-psi.vercel.app/`
**Repository:** `https://github.com/habyarimanacassien/wdd430-portfolio`

## Pages

| Route        | File                    | What it shows                      |
| ------------ | ----------------------- | ---------------------------------- |
| `/`          | `app/page.tsx`          | Home: list of portfolio projects   |
| `/about`     | `app/about/page.tsx`    | About me and skill cards           |
| `/api/hello` | `app/api/hello/route.ts`| A simple JSON API route            |

## Components (all Server Components)

- `Header` – site name and navigation (`next/link`)
- `Footer` – copyright with the current year
- `ProjectList` / `ProjectCard` – render the projects from typed props
- `SkillCard` – custom component used on the About page

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Check before deploying

```bash
npm run lint
npm run build
```
