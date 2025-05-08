export type User = {
  _id: string
  fullName: string
  username: string
  email: string
  jobs: string
}

export type AuthContextType = {
  user: User | null
  login: (emailOrUsername: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (fullName: string, email: string, username: string, password: string) => Promise<void>
  saveJob: (userId: string, jobId: string) => Promise<void>
  loading: boolean
  isLoggedIn: boolean
}

export type JobType = {
  _id: string;
  title: string;
  description: string;
  responsibilities: [string],
  requirements: [string];
  postedDate: string;
  salary: string;
  skills: [string];
  type: string;
  location: string;
  company: string;
}

type TestCases = {
  input: string;
  expectedOutput: string;
  explanation: string;
}

export type ProblemType = {
  difficulty: string;
  examples: [TestCases];
  constraints: [string];
  title: string;
  description: string;
  testCases: [TestCases];
}