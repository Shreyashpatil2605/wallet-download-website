# Wallet — Official Android Landing Website 🚀

Premium, production-ready landing website for the **Wallet** Android mobile application.

Designed with a high-end dark fintech aesthetic inspired by modern financial apps: dark charcoal background, subtle orange and sky-blue ambient glows, vibrant lime-green accents, glassmorphic cards, and an authentic presentation of the real Android application interface.

---

## 📱 Features & Highlights

- **Hero Showcase**: Realistic smartphone mockup displaying the genuine application interface (Image 2) without redrawn or fake UI, complete with floating verified financial cards (`+₹25,000.00` Income, `-₹3,100.00` Expenses, `₹21,900.00` Net Balance) and ambient glow lighting.
- **Brand Identity**: Custom SVG Wallet mark with orange-and-blue ribbon wave and typography matching fintech standards.
- **Navigation Bar**: Responsive glassmorphism header with active section indicator, smooth scrolling, and prominent APK download CTA. Web login is omitted as authentication is mobile-native.
- **Feature Highlights Row**: 3 key pillars (Track Income, Manage Expenses, View Transactions) with zero invented statistics.
- **Key Capabilities Grid**: 4 feature cards mapped to the actual mobile app functionality (Total balance overview, Income and expense summaries, Recent transactions, Transaction categories).
- **3-Step Android Installation**: Clear instructions on downloading, opening, and allowing APK source installation with reassuring Google Play Protect guidance.
- **Centralized APK Configuration**: Single source of truth (`src/config/appConfig.js`) for versioning, file size, download links, and graceful fallback when an APK URL has not yet been attached.
- **Vercel & Netlify Deployment Ready**: Includes `vercel.json` and `_redirects` for immediate production hosting.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS 3 (custom lime, orange, and charcoal color tokens, glow filters, glassmorphism)
- **Icons**: Lucide React + custom pixel-perfect Android & Sparkle SVG icons
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 📁 Project Structure

```
website/
├── public/
│   ├── assets/              # App screenshot, logos, icons, favicon
│   ├── downloads/           # Optional local static APK release directory
│   └── _redirects           # Single Page Application redirect rules
├── src/
│   ├── assets/              # High-resolution screenshot & assets
│   ├── components/
│   │   ├── Navbar.jsx           # Dark translucent header with active indicator
│   │   ├── Hero.jsx             # Smartphone mockup with real screenshot & floating cards
│   │   ├── Features.jsx         # 4 verified functionality cards
│   │   ├── HowToInstall.jsx     # 3-step installation walkthrough + security notice
│   │   ├── About.jsx            # About the Android application & architecture
│   │   ├── DownloadSection.jsx  # Prominent download card, version info, specs & validation
│   │   ├── WalletLogo.jsx       # SVG Wallet brand mark
│   │   ├── AndroidIcon.jsx      # Android robot SVG icon
│   │   ├── SparkleIcon.jsx      # 4-point decorative sparkle stars
│   │   ├── ConfigGuideModal.jsx # Guidance modal shown when APK URL is being configured
│   │   ├── PrivacyModal.jsx     # Privacy policy modal
│   │   └── Footer.jsx           # Branding, dynamic copyright, social & privacy links
│   ├── config/
│   │   └── appConfig.js         # Centralized configuration for metadata & APK URL
│   ├── data/
│   │   ├── featuresData.js      # Verified application feature data
│   │   └── installStepsData.js  # Steps and security notices
│   ├── App.jsx                  # Main application composition
│   ├── index.css                # Tailwind directives & custom glassmorphism styles
│   └── main.jsx                 # React root mount
├── .env.example                 # Environment variables template
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Fintech theme configuration
├── vercel.json                  # Vercel SPA routing configuration
└── vite.config.js               # Vite bundler configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
cd website
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Optimized static files will be generated in `website/dist/`.

---

## 📲 Attaching a Live APK Download URL

The download buttons point to `src/config/appConfig.js`.

### Option A: External URL (GitHub Releases, Cloudflare R2, S3, Firebase)
Create a `.env` file in the `website/` directory:
```env
VITE_APK_URL=https://github.com/your-username/wallet-RN/releases/download/v1.0.0/wallet-v1.0.0.apk
VITE_APK_SHA256=optional_checksum_here
```

### Option B: Local Static File
Place your compiled APK in:
`website/public/downloads/wallet-v1.0.0.apk`
And set in `website/.env`:
```env
VITE_APK_URL=/downloads/wallet-v1.0.0.apk
```

If `VITE_APK_URL` is omitted, the website automatically provides an interactive guide modal rather than a broken link.

---

## 🚀 Deployment on Vercel

1. Push your repository to GitHub.
2. In the Vercel dashboard, click **Add New Project** and import the repository.
3. Set the **Root Directory** to `website`.
4. Add the `VITE_APK_URL` environment variable under **Settings → Environment Variables** if available.
5. Click **Deploy**.
