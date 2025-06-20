import {
  ToastProvider as RadixToastProvider,
  Viewport as RadixToastViewport,
  Root as RadixToastRoot,
  Close as RadixToastClose
} from "@radix-ui/react-toast";
import { createContext, useContext, useState, useCallback } from "react";
import { X } from "lucide-react";

type ToastProps = {
  title: string;
  description?: string;
  duration?: number;
};

const ToastContext = createContext<{ toast: (props: ToastProps) => void } | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback((toastProps: ToastProps) => {
    setToasts((prev) => [...prev, toastProps]);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      <RadixToastProvider>
        {children}

        {/* Renders all active toasts */}
        {toasts.map((t, i) => (
          <RadixToastRoot
            key={i}
            duration={t.duration || 3000}
            className="bg-white border border-slate-200 rounded-lg shadow-lg p-4 animate-toast-slide-in data-[state=closed]:animate-toast-hide"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-slate-900">{t.title}</p>
                {t.description && (
                  <p className="text-sm text-slate-600 mt-1">{t.description}</p>
                )}
              </div>
              <RadixToastClose
                className="text-slate-400 hover:text-slate-900"
                type="button"
              >
                <X className="w-4 h-4" />
              </RadixToastClose>
            </div>
          </RadixToastRoot>
        ))}

        <RadixToastViewport className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 w-96 max-w-full outline-none" />
      </RadixToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}
