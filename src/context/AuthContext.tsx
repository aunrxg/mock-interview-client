import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import api from "../api/AxiosInstance"
import { AuthContextType } from "@/types";

const throwFn = () => {
  throw new Error("AuthContext not initialized");
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: throwFn,
  logout: throwFn,
  register: throwFn,
  saveJob: throwFn,
  loading: true,
  isLoggedIn: false,
})

export const AuthProvider = ({ children }: { children: ReactNode} ) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users/me");
        setUser(res.data.data);
      } catch (err) {
        console.error("/users/me error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
  
    if (!user) fetchUser();
  }, [])

  const login = async (emailOrUsername: string, password: string): Promise<void> => {
    try {
      const payload = emailOrUsername.includes('@')
        ? { email: emailOrUsername, password }
        : { username: emailOrUsername, password }

      const res = await api.post('/users/login', payload)
      setUser(res.data.data) // only if successful
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

  const register = async (fullName: string, email: string, username: string, password: string): Promise<void> => {
    try {
      const payload = { fullName, email, username, password }

      const res = await api.post('/users/register', payload)
      setUser(res.data.data)
    } catch (error) {
      console.error('Register error: ', error)
      throw error;
    } finally {
      setLoading(false)
    }
  }

  const saveJob = async (userId: string, jobId: string) => {
    try {
      const pyaload = { userId, jobId }

      const res = await api.post('/users/save-job', pyaload)
      setUser(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.error('could not save job: ', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, saveJob, loading, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)