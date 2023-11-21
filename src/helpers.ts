import { LinkOptionType } from "./types"

export const linksOptions: LinkOptionType[] = [
  { label: "GitHub", value: "github", icon: "github.svg" },
  { label: "Frontend Mentor", value: "frontendmentor", icon: "frontendmentor.svg" },
  { label: "Twitter", value: "twitter", icon: "twitter.svg" },
  { label: "LinkedIn", value: "linkedin", icon: "linkedin.svg" },
  { label: "YouTube", value: "youtube", icon: "youtube.svg" },
  { label: "Facebook", value: "facebook", icon: "facebook.svg" },
  { label: "Twitch", value: "twitch", icon: "twitch.svg" },
  { label: "Dev.to", value: "devto", icon: "devto.svg" },
  { label: "Codewars", value: "codewars", icon: "codewars.svg" },
  { label: "Codepen", value: "codepen", icon: "codepen.svg" },
  { label: "freeCodeCamp", value: "freecodecamp", icon: "freecodecamp.svg" },
  { label: "GitLab", value: "gitlab", icon: "gitlab.svg" },
  { label: "Hashnode", value: "hashnode", icon: "hashnode.svg" },
  { label: "Stack Overflow", value: "stackoverflow", icon: "stackoverflow.svg" }
]

export const urlPattern = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/