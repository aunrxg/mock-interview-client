export type User = {
  _id: string
  username: string
  email: string
}

export type AuthContextType = {
  user: User | null
  login: (emailOrUsername: string, password: string) => Promise<void>
  logout: () => Promise<void>
  loading: boolean
  isLoggedIn: boolean
}
