import { LinkOptionType } from "./types"

export const linksOptions: LinkOptionType[] = [
  { label: "GitHub", value: "github" },
  { label: "Frontend Mentor", value: "frontendMentor" },
  { label: "Twitter", value: "twitter" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "YouTube", value: "youtube" },
  { label: "Facebook", value: "facebook" },
  { label: "Twitch", value: "twitch" },
  { label: "Dev.to", value: "devto" },
  { label: "Codewars", value: "codewars" },
  { label: "Codepen", value: "codepen" },
  { label: "freeCodeCamp", value: "freecodecamp" },
  { label: "GitLab", value: "gitlab" },
  { label: "Hashnode", value: "hashnode" },
  { label: "Stack Overflow", value: "stackOverflow" }
]

export const urlPattern = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/