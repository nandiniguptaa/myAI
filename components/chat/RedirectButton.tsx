"use client";

import { Button } from "@/components/ui/button"; // Import the existing styled button

interface RedirectButtonProps {
  url: string;
  label: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"; // Use existing variants
  className?: string;
}

export default function RedirectButton({ url, label, variant = "default", className }: RedirectButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button variant={variant} size = "sm" className={className}>
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

