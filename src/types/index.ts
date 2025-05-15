export type User = {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  jobs: [{ job: string, savedAt: Date }];
}

export type AuthContextType = {
  user: User | null;
  login: (emailOrUsername: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (fullName: string, email: string, username: string, password: string) => Promise<void>;
  saveJob: (userId: string, jobId: string) => Promise<void>;
  loading: boolean;
  isLoggedIn: boolean;
}

export type JobContextType = {
  allJobs: JobType[] | null;
  job: JobType | null;
  problem: ProblemType | null;
  allJobsLoading: boolean;
  jobLoading: boolean;
  fetchAllJobs: () => Promise<void>;
  fetchJobById: (id: string) => Promise<void>;
}

export type JobType = {
  _id: string;
  title: string;
  description: string;
  responsibilities: [string],
  requirements: [string];
  postedDate: string;
  question: [ProblemType];
  salary: string;
  skills: [string];
  type: string;
  location: string;
  company: string;
  savedAt: string;
}

export type TestCasesType = {
  input: string;
  expectedOutput: string;
  explanation: string;
}

export type ProblemType = {
  difficulty: string;
  examples: [TestCasesType];
  constraints: [string];
  title: string;
  description: string;
  testCases: [TestCasesType];
}