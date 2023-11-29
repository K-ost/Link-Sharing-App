import { LinkOptionType } from "./types"

export const linksOptions: LinkOptionType[] = [
  { label: "GitHub", value: "github" },
  { label: "Frontend Mentor", value: "frontendmentor" },
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
  { label: "Stack Overflow", value: "stackoverflow" }
]

export const urlPattern = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/