import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import api from "../api/AxiosInstance"
import { AuthContextType } from "@/types";

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
  loading: true,
  isLoggedIn: false,
})

export const AuthProvider = ({ children }: { children: ReactNode} ) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      // console.log("[AuthContext] fetchUser running...");
      console.log("Current user:", user);
  
      if (user) {
        setLoading(false);
        // console.log("Skipping fetchUser because user already exists.");
        return;
      }
  
      try {
        const res = await api.get("/users/me");
        setUser(res.data.data);
        // console.log("/users/me success:", res.data);
      } catch (err) {
        console.error("/users/me error:", err);
        setUser(null);
      } finally {
        setLoading(false);
        // console.log("loading set to false");
      }
    };
  
    fetchUser();
  }, [user])

  const login = async (emailOrUsername: string, password: string) => {
    try {
      const payload = emailOrUsername.includes('@')
        ? { email: emailOrUsername, password }
        : { username: emailOrUsername, password }

      const res = await api.post('/users/login', payload)
      setUser(res.data) // only if successful
      setLoading(false)
    } catch (err) {
      console.error('Login error:', err)
      throw err // rethrow so the form can catch it
    }
  }

  const logout = async () => {
    await api.post('/users/logout')
    setUser(null)
  }

  const register = async (fullName: string, email: string, username: string, password: string) => {
    try {
      const payload = { fullName, email, username, password }

      const res = await api.post('/users/register', payload)
      setUser(res.data)
    } catch (error) {
      console.error('Register error: ', error)
      throw error;
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)