export const installStepsData = [
  {
    stepNumber: '01',
    title: 'Download the Wallet APK',
    description:
      'Tap the "Download for Android" button on this website to save the official Wallet APK file directly onto your mobile device.',
    tip: 'Saved directly into your browser or device Downloads folder.'
  },
  {
    stepNumber: '02',
    title: 'Open the Downloaded APK',
    description:
      'Locate the downloaded file from your notification bar or Files app, then tap on it to trigger the Android system package installer.',
    tip: 'Tap the completion notification or navigate to Downloads.'
  },
  {
    stepNumber: '03',
    title: 'Allow Installation & Install',
    description:
      'If prompted, toggle "Allow installation from this source" in Android Settings for your browser or file manager, then return and tap Install.',
    tip: 'Android protects you by prompting per individual installer source.'
  }
];

export const securityNote = {
  title: 'Android Security & Direct APK Installations',
  content:
    'Android devices naturally display a standard verification prompt when installing an APK outside the Google Play Store. This is standard operating procedure for direct developer distribution.',
  bulletPoints: [
    {
      title: 'Per-Source Permission',
      desc: 'Only grant permission to the specific browser or file manager you used to download the file.'
    },
    {
      title: 'Google Play Protect Active',
      desc: 'Never disable Google Play Protect. Google Play Protect continues scanning all sideloaded applications automatically.'
    },
    {
      title: 'Authentic & Clean Package',
      desc: 'Our official APK contains no spyware, third-party analytics trackers, or undisclosed telemetry.'
    }
  ]
};

export default installStepsData;
