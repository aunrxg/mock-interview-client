import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import api from "../api/AxiosInstance"
import {   AuthContextType } from "@/types";

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: async () => {},
  loading: true,
  isLoggedIn: false,
})

export const AuthProvider = ({ children }: { children: ReactNode} ) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Fetching user...");
        const res = await api.get("/users/me");
        console.log("Response from /me:", res.data);
        setUser(res.data.user);
      } catch (err) {
        console.error("Error while getting current user:", err);
        setUser(null);
      } finally {
        setLoading(false);
        console.log("Loading set to false");
      }
    }

    fetchUser()
  }, [])

  const login = async (emailOrUsername: string, password: string) => {
    try {
      const payload = emailOrUsername.includes('@')
        ? { email: emailOrUsername, password }
        : { username: emailOrUsername, password }

      const res = await api.post('/users/login', payload)
      setUser(res.data.user) // only if successful
    } catch (err) {
      console.error('Login error:', err)
      throw err // rethrow so the form can catch it
    }
  }

  const logout = async () => {
    await api.post('/users/logout')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)