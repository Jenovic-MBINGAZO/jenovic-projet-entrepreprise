"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin">
        <Loader2 className="h-12 w-12 text-primary" />
      </div>
    </div>
  );
}