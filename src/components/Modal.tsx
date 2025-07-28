// src/components/Modal.jsx
import { Fragment } from "react";

export default function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <Fragment>
      {/* backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* panel */}
      <div className="fixed inset-0 z-50 grid place-items-center p-4">
        <div className="w-full max-w-xl rounded-lg bg-slate-900 p-6 shadow-lg ring-1 ring-cyan-700/50">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="ml-3 text-gray-400 transition-colors hover:text-cyan-400"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-300">
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
