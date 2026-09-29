export const site = {
  name: "Spark Racing",
  tagline: "Endurance Karting Team",
  email: "shehansilva2013@gmail.com",
  // Proposal-form enquiries are delivered to the first address and CC'd to the rest (via formsubmit.co).
  enquiryRecipients: ["shehansilva2013@gmail.com", "thanu.dee92@gmail.com"],
  social: {
    handle: "@spark.racing.sl",
    instagram: "https://www.instagram.com/spark.racing.sl/",
    facebook: "https://www.facebook.com/profile.php?id=61569894654607",
    photos: "https://www.facebook.com/profile.php?id=61569894654607&sk=photos",
  },
  // Drop a looping clip at public/video/hero.mp4 and set this to "/video/hero.mp4"
  heroVideo: null as string | null,
  nav: [
    { href: "#about", label: "About" },
    { href: "#achievements", label: "Results" },
    { href: "#sws", label: "SWS" },
    { href: "#reach", label: "Reach" },
    { href: "#packages", label: "Packages" },
    { href: "#gallery", label: "Gallery" },
    { href: "#team", label: "Team" },
  ],
};
