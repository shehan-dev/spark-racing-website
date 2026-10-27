export const site = {
  name: "Spark Racing",
  teamName: "Access Motors Spark Racing",
  tagline: "Endurance Karting Team",
  // Platinum title partner — shown at the top of the page and on the Platinum package
  titlePartner: {
    name: "Access Motors",
    logo: "/sponsors/access-motors.png",
    group: [
      { name: "Access Motors", logo: "/sponsors/access-motors.png" },
      { name: "Bodyshop by Access", logo: "/sponsors/bodyshop-by-access.png" },
    ],
  },
  // Team inbox, used by the main "Email our team" buttons
  email: "sparkracingsl@gmail.com",
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
