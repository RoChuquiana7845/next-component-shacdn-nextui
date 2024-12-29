import React, { useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

interface NotificarBarProps {
  type: "success" | "error" | "warning";
  title: string;
  message: string;
  onClose?: () => void; 
  autoHideDuration?: number; 
}

export default function NotificarBar({
  type,
  title,
  message,
  onClose,
  autoHideDuration,
}: NotificarBarProps) {
  const icons = {
    success: CheckCircle2,
    error: XCircle,
    warning: AlertCircle,
  };

  const Icon = icons[type];

  
  useEffect(() => {
    if (autoHideDuration && onClose) {
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer); 
    }
  }, [autoHideDuration, onClose]);

  return (
    <Alert
      variant={type === "warning" ? "default" : type}
      role="alert"
      aria-live={type === "error" ? "assertive" : "polite"}
      className="flex items-center gap-2"
    >
      <Icon className="h-4 w-4" />
      <div>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto text-gray-500 hover:text-gray-700"
          aria-label="Cerrar notificación"
        >
          ✕
        </button>
      )}
    </Alert>
  );
}
