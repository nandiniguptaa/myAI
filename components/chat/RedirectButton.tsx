"use client";

import { Button } from "@/components/ui/button";

interface RedirectButtonProps {
  url: string;
  label: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  className?: string;
  style?: React.CSSProperties; // ✅ Fix: Explicitly define the style prop
}

export default function RedirectButton({ url, label, variant = "default", className, style }: RedirectButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button variant={variant} size="sm" className={className} style={style}>
        {label}
      </Button>
    </a>
  );
}



/*
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Import existing styled Button

interface RedirectButtonProps {
  url: string;
  label: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"; // Use existing variants
}

export default function RedirectButton({ url, label, variant = "default" }: RedirectButtonProps) {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(url)} variant={variant}>
      {label}
    </Button>
  );
}
*/

