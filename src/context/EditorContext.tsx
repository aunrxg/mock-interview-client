import { EditorContextType, Language } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";


const EditorContext = createContext<EditorContextType>({
  code: "//write your code here",
  setCode: () => {},
  language: "python",
  setLanguage: () => {},
})


export const EditorProvider = ({ children }: { children: ReactNode }) => {

  const [code, setCode] = useState<string>("//write your code here")
  const [language, setLanguage] = useState<Language>("python")

  return (
    <EditorContext.Provider value={{ code, setCode, language, setLanguage }}>
      {children}
    </EditorContext.Provider>
  )
}

export const useEditor = () => useContext(EditorContext)