// Images
import mountain from "./assets/img/body/mountain.png";
import mountain1 from "./assets/img/body/mountain1.png";
import coastal from "./assets/img/body/coastal.png";
import coastal1 from "./assets/img/body/coastal1.png";
import forest from "./assets/img/body/forest.png";
import hiddenGems from "./assets/img/body/hidden-gems.jpg";
import suitcase from "./assets/img/body/suitcase-solid-full.svg";
import websiteLogo from "./assets/img/footer/website-logo.png";
import facebook from "./assets/img/footer/facebook.png";
import linkedin from "./assets/img/footer/linkedin.png";
import youtube from "./assets/img/footer/youtube.png";
import menuIcon from "./assets/img/navbar/bars-solid-full.svg";

export const site = {
  name: "Prototype",
  skipToContent: "Skip to main content",
};

// Navbar
export const navbar = {
  heading: "Discover",
  linksId: "navbar-wrapper",
  button: {
    id: "find-a-trip",
    type: "button",
    label: "Plan a trip",
  },
  toggle: {
    id: "nav-toggle",
    ariaLabel: "Main menu",
  },
  menuIcon: menuIcon,
};

export const navLinks = [
  { text: "Home", url: "index.html" },
  { text: "Destination", url: "#destination" },
  { text: "About", url: "#about" },
  { text: "Contact", url: "#contact" },
];

// Main heading
export const hero = {
  heading: "Explore Amazing Places",
  text: "Find inspiration for your next adventure. Discover beautiful destinations and unique experience",
};

// Tiles
export const tiles = [
  {
    heading: "Mountain Escape",
    src: mountain,
    text: "Breathe fresh air and explore scenic trails in the heart of the mountains",
    links: [
      { text: "Learn more", url: "#mountain" },
      { text: "View details", url: "#mountain-details" },
    ],
  },
  {
    heading: "Coastal Bliss",
    src: coastal,
    text: "Relax by the sea and enjoy charming towns and local cuisine.",
    links: [{ text: "Learn more", url: "#coastal" }],
  },
  {
    heading: "Forest Retreat",
    src: forest,
    text: "Unwind in nature and reconnect with the outdoors.",
    links: [
      { text: "Learn more", url: "#forest" },
      { text: "View details", url: "#forest-details" },
    ],
  },
  {
    heading: "Mountain Escape",
    src: mountain1,
    text: "Breathe fresh air and explore scenic trails in the heart of the mountains",
    links: [
      { text: "Learn more", url: "#mountain" },
      { text: "View details", url: "#mountain-details" },
    ],
  },
  {
    heading: "Coastal Bliss",
    src: coastal1,
    text: "Relax by the sea and enjoy charming towns and local cuisine.",
    links: [{ text: "Learn more", url: "#coastal" }],
  },
  {
    heading: "Hidden Gems",
    src: hiddenGems,
    text: "Find quiet corners and surprising places off the beaten path.",
    links: [{ text: "Learn more", url: "#hidden-gems" }],
  },
];

// Call to action
export const cta = {
  icon: { src: suitcase, alt: "" },
  heading: "Ready to start your journey?",
  text: "Create your itinerary and make unforgettable memories.",
  button: { text: "Plan Your Trip", url: "#plan-a-trip" },
  link: { text: "Learn about our services", url: "#services" },
};

// Footer
export const footerBrand = {
  heading: "Discover",
  text: "Helping you discover the world and create lasting memories.",
  imgURL: websiteLogo,
  alt: "website Logo"
};

export const socialLinks = [
  {
    id: "facebook",
    src: facebook,
    alt: "Facebook logo",
    url: "https://facebook.com",
    ariaLabel: "Connect with us on facebook",
  },
  {
    id: "linkedin",
    src: linkedin,
    alt: "LinkedIn logo",
    url: "https://linkedin.com",
    ariaLabel: "Connect with us on Linkedin",
  },
  {
    id: "youtube",
    src: youtube,
    alt: "YouTube logo",
    url: "https://youtube.com",
    ariaLabel: "Connect with us on youtube",
  },
];

export const footerColumns = [
  {
    heading: "Navigation",
    links: [
      { text: "Home", url: "index.html" },
      { text: "Destinations", url: "destinations.html" },
      { text: "About", url: "about.html" },
      { text: "Contact", url: "contact.html" },
    ],
  },
  {
    heading: "Support",
    links: [
      { text: "FAQ", url: "faq.html" },
      { text: "Travel Tips", url: "travel-tips.html" },
      { text: "Privacy Policy", url: "privacy-policy.html" },
      { text: "Terms of Service", url: "terms-of-service.html" },
    ],
  },
];

export const subscribe = {
  heading: "Subscribe",
  text: "Get travel inspiration and exclusive offers straight to your inbox.",
  input: {
    id: "footer-email",
    name: "email",
    type: "email",
    label: "Email address",
    placeholder: "Email address",
  },
  button: {
    id: "footer-subscribe",
    type: "submit",
    label: "Subscribe",
  },
};

export const copyright = "Discover. All rights reserved.";

// Page nav
export const pageNav = [
  { text: "Home", url: "index.html" },
  { text: "Exercise", url: "exercise.html" },
];
