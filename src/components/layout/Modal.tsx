import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  showCloseButton?: boolean; 
  className?: string; 
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  showCloseButton = true, 
  className = "",
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`relative ${className}`}
        aria-labelledby="modal-title"
        aria-describedby={description ? "modal-description" : undefined}
      >
        <DialogHeader>
          <DialogTitle id="modal-title">{title}</DialogTitle>
          {description && (
            <DialogDescription id="modal-description">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        )}
        <div className="mt-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
