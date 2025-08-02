// components/OverlayLoader.tsx
"use client";
import React from "react";
import { Spinner } from './spinner';

interface OverlayLoaderProps {
  isLoading: boolean;
  message?: string;
  children: React.ReactNode;
}

const OverlayLoader = ({
  isLoading,
  children,
}: OverlayLoaderProps) => {
  return (
    <div className="relative">
      {/* Contenu principal */}
      {children}

      {/* Overlay de chargement */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fond transparent */}
          <div className="absolute inset-0 bg-white/90 " />

          {/* Contenu du loader */}
          <div className="relative flex flex-col items-center gap-4 p-6 ">
            <Spinner variant="circle" className="text-blue-500 size-15  " />
          </div>
        </div>
      )}
    </div>
  );
};

export default OverlayLoader;



