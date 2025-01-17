import uiIcon1 from "../Assets/ui-71.svg";
import uiIcon2 from "../Assets/ui-01.svg";
import uiIcon3 from "../Assets/ui-45.svg";
import uiIcon4 from "../Assets/documents-11.svg";
import uiIcon5 from "../Assets/others-07.svg";
import uiIcon6 from "../Assets/tech-25.svg";
import uiIcon7 from "../Assets/ui-02.svg";
import uiIcon8 from "../Assets/ui-03.svg";
import uiIcon9 from "../Assets/ui-80.svg";
import uiIcon10 from "../Assets/tech-02.svg";
import uiIcon11 from "../Assets/chevron-down.svg";
import { ISidebarLinks } from "@/interfaces/ISidebar";

export const primaryLinks: Array<ISidebarLinks> = [
  {
    url: "/",
    urlText: "Home",
    iconSrc: uiIcon1,
  },
  {
    url: "/user",
    urlText: "Trending",
    iconSrc: uiIcon2,
  },
  {
    url: "/#",
    urlText: "Subscriptions",
    iconSrc: uiIcon3,
  },
];

export const secondaryLinks: Array<ISidebarLinks> = [
  {
    url: "#",
    urlText: "Library",
    iconSrc: uiIcon4,
  },
  {
    url: "#",
    urlText: "History",
    iconSrc: uiIcon5,
  },
  {
    url: "#",
    urlText: "Watch Later",
    iconSrc: uiIcon6,
  },
  {
    url: "#",
    urlText: "Favorites",
    iconSrc: uiIcon7,
  },
  {
    url: "/likedvideos",
    urlText: "Liked Videos",
    iconSrc: uiIcon8,
  },
  {
    url: "#",
    urlText: "Music",
    iconSrc: uiIcon9,
  },
  {
    url: "#",
    urlText: "Games",
    iconSrc: uiIcon10,
  },
  {
    url: "#",
    urlText: "Show...",
    iconSrc: uiIcon11,
  },
];
