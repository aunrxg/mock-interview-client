// src/components/ui/toast.tsx
// import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
// import { cn } from "@/lib/utils"; // You can define your own `cn` helper

export function Toast({
  open,
  onOpenChange,
  title,
  description,
  duration = 3000, // 👈 default to 3s
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  duration?: number;
}) {
  return (
    <ToastPrimitives.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={duration} // 👈 add this
      className="bg-white border border-slate-200 rounded-lg shadow-lg p-4 animate-toast-slide-in data-[state=closed]:animate-toast-hide"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-slate-900">{title}</p>
          {description && (
            <p className="text-sm text-slate-600 mt-1">{description}</p>
          )}
        </div>
        <ToastPrimitives.Close
          className="text-slate-400 hover:text-slate-900"
          type="button"
        >
          <X className="w-4 h-4" />
        </ToastPrimitives.Close>
      </div>
    </ToastPrimitives.Root>
  );
}

export const ToastViewport = ToastPrimitives.Viewport;
