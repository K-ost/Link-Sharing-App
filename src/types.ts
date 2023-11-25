export type LinkOptionType = {
  value: string
  label: string
  icon: string
}

export type LinkType = {
  id: string
  platform: LinkOptionType
  link: string
}

export type UserType = {
  id?: string
  email?: string
  password?: string
  firstname: string
  lastname: string
  photo?: any
}

export type SignUpType = {
  email: string
  password: string
}
