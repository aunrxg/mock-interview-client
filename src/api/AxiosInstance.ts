import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1",
  withCredentials: true, 
});

export const fetchJobs = async () => {
  const res = await api.get("/jobs")
  // console.log("Jobs: ", res.data.data)
  return res.data
}

export const fetchJobById = async(id: string) => {
  const res = await api.get(`/jobs/${id}`)
  // console.log("Job: ", res.data)
  return res.data
}
export default api;
