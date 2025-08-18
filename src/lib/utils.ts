import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { tborder_sides, TBorderSide, tgradient, tprofile_card } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const defaultProfileCard: tprofile_card = {
  profile: {
    img: "https://pbs.twimg.com/profile_images/1866401423920930816/oC45ADT0_400x400.jpg", // your uploaded image
    name: "Satya Dwivedi",
    job_title: "Product Designer",
  },
  colors: {
    primary: "#A0EF55",
    isGradient: false,
    gradient:null,
    color:'#121212'
  },
  links: [],
  primary_btn: {
    link: "#",
    showIcon: true,
  },
  secondary_btn: {
    link: "satya@example.com",
    showIcon: true,
  },
  status: "Available for work",
  bio: {
    txt: " Currently High on Creativity",
    reverse:false
  },
  shadow_disabled:false,
  innershadow_disables:false,
  body_color:'#ffffff'
};
export function generateTailwindGradient(g: tgradient): string {
   if (!g?.anges) return g.from || "#000"; // fallback solid color

  // build gradient stops
  const stops = [
    g.from !== "transparent" ? g.from : null,
    g.via !== "transparent" ? g.via : null,
    g.to !== "transparent" ? g.to : null,
  ].filter(Boolean);

  if (stops.length === 1) {
    return stops[0]!; // just a solid color
  }

  // construct the CSS gradient string
  return `linear-gradient(${g.anges.slug}, ${stops.join(", ")})`;
}

export const getBorderWidth = (dir: tborder_sides, sides:TBorderSide[],thickness:number) => {

  // check if this side exists in sides array
  const isActive = sides.some(e => e.name === dir)

  return isActive ? `${thickness}px` : '0px'
}