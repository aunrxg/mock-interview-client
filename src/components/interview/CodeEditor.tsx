import { useEffect, useRef } from "react";
import { basicSetup, EditorView } from "codemirror"
import { python } from "@codemirror/lang-python"
import { EditorState } from "@codemirror/state";

type CodeEditorProp = {
  code: string;
  setCode: (code: string) => void;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProp> = ({ code, setCode, language }) => {
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

export default CodeEditor