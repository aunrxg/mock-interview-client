// import { useEffect, useRef } from "react";
// import { basicSetup, EditorView } from "codemirror"
// import { python } from "@codemirror/lang-python"
// import { EditorState } from "@codemirror/state";
import { Editor, OnChange } from "@monaco-editor/react"

// type CodeEditorProp = {
//   code: string;
//   setCode: (code: string) => void;
//   language: string;
// }

type MonacoEditorProps = {
  language: "javascript" | "python" | "java";
  value: string;
  onChange: OnChange;
}

/*
export const CodeEditor: React.FC<CodeEditorProp> = ({ code, setCode, language }) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)

  useEffect(() => {
    if(!editorRef.current) return;

    const startState = EditorState.create({
      doc: code,
      extensions: [
        basicSetup,
        python(),
        EditorView.updateListener.of((v) => {
          if(v.docChanged) {
            setCode(v.state.doc.toString())
          }
        }),
      ],
    });

    viewRef.current = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    return () => {
      if(viewRef.current) {
        viewRef.current = null
      }
    }
  }, [])

  return <div ref={editorRef} className="border-solid border-2 border-[#ccc] h-2/3" />
}
*/

const MonacoEditor = ({ language, value, onChange }: MonacoEditorProps) => {
  // const editorRef = useRef<Monaco (null)

  return (
    <div className="w-full h-[65%]">
      <Editor
        height="100%"
        defaultLanguage={language}
        value={value}
        onChange={onChange}
        theme="vs-light"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: "on",
          lineNumbers: "on",
          tabSize: 2,
          automaticLayout: true,
          suggestOnTriggerCharacters: false,
          quickSuggestions: false,
          parameterHints: { enabled: false },
          wordBasedSuggestions: "off",
        }}
      />
    </div>
  )
} 

// export default CodeEditor
export default MonacoEditor