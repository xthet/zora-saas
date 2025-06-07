# Zora – SAAS LANDING PAGE TEMPLATE

A sleek, responsive Next.js template to showcase SaaS case studies and product launches. Ideal for indie hackers, SaaS founders, or dev agencies.

Repo: [https://github.com/xthet/zora-saas.git](https://github.com/xthet/zora-saas.git)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/xthet/zora-saas.git
cd zora-saas
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file at the root of the project and copy the structure from `.env.example`:

```bash
cp .env.example .env.local
```

> ⚠️ Make sure to replace placeholder values with your actual credentials.

### 4. Run the Dev Server

```bash
npm run dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the project in your browser.

---

## 📁 Folder Structure

```
app/                  → App directory (Next.js 15+ App Router)
components/           → Reusable UI components
public/               → Static assets
styles/               → Global and module styles
env.example           → Example environment config
README.md             → This file
```

---

## 📌 Key Notes

- Uses **App Router** (`/app`) – no support for `pages/` directory.
- Customize meta tags in `app/layout.tsx` using the `metadata` object.
- Add your Open Graph image in `public/og-image.png`.
- Includes a responsive layout with minimal styling and easy-to-swap content blocks.
- Smooth scrolling powered by [Lenis](https://github.com/studio-freight/lenis).
- Animations handled with [GSAP](https://greensock.com/gsap/).

---

## 🛠 Built With

- [Next.js 15+](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://greensock.com/gsap/) for animations
- [Lenis](https://github.com/studio-freight/lenis) for smooth scrolling

---

## 🙏 Credits

Made with ❤️ by [Tame Hex Technologies](https://www.tht.agency). Feel free to share and remix!

---

## 📣 License

This template is open source and free to use for personal or commercial projects.
