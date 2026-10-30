/**
 * Centralized Application & APK Configuration
 *
 * This configuration controls app metadata, APK download URLs,
 * versioning, and environment-driven releases.
 */

export const appConfig = {
  // Brand & App Identity
  appName: "Wallet",
  appTagline: "Your Money. Your Control.",
  appDescription:
    "Keep track of your balance, income, expenses, and recent transactions in one convenient mobile application.",

  // Version & Release Information (matches mobile/app.json)
  appVersion: "1.0.0",
  releaseDate: "October 2026",
  minAndroidVersion: "Android 8.0 (API 26) or later",
  packageName: "com.shreeeeeyash.mobile",
  apkFileName: "wallet-v1.0.0.apk",
  
  // APK File Size
  apkSize: "~45 MB",

  // Download Target
  // Uses environment variable VITE_APK_URL if provided; otherwise falls back to official EAS build artifact
  apkUrl:
    import.meta.env.VITE_APK_URL ||
    "https://expo.dev/artifacts/eas/ZyRyoJiHqYhg_bJX13xDLgjMnQF2NnSLCPS7_tT4oh8.apk",

  // Optional Checksum (SHA-256) for release verification
  apkSha256: import.meta.env.VITE_APK_SHA256 || "",

  // Contact & Social Links
  contactEmail: "shreyashpatil.dev@gmail.com",
  githubRepoUrl: "https://github.com/Shreyashpatil2605/wallet-RN",

  // Verification helper
  isApkConfigured() {
    return Boolean(this.apkUrl && this.apkUrl.trim().length > 0);
  },

  // Resolve download URL (handles relative or external URLs)
  getDownloadUrl() {
    if (!this.isApkConfigured()) return null;
    return this.apkUrl.trim();
  }
};

export default appConfig;
