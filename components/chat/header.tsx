/*
import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";
import RedirectButton from "@/components/chat/RedirectButton"; 

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  return (
    <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5 bg-white shadow-[0_10px_15px_-3px_rgba(255,255,255,1)]">
      <div className="flex w-full">
        <div className="flex-0 w-[100px]"></div>
        <div className="flex-1 flex justify-center items-center gap-4">
          <AILogo />
          <p>{CHAT_HEADER}</p>
        </div>
        <div className="flex-0 w-[100px] flex justify-end items-center gap-4">
          
          <Button
            onClick={clearMessages}
            className="shadow-sm rounded-lg text-gray-900 hover:opacity-80 transition-colors"
            variant="outline"
            size="sm"
            style={{ backgroundColor: "hsl(190, 45%, 76%)" }}
          >
            <EraserIcon className="w-4 h-4" />
            <span>{CLEAR_BUTTON_TEXT}</span>
          </Button>

          
          <RedirectButton 
            url="https://l.bttr.to/rAyYN" 
            label="Schedule a Coaching Session" 
            variant="default"
            className="shadow-sm rounded-lg text-gray-900 hover:opacity-80 transition-colors"
            style={{ backgroundColor: "hsl(190, 45%, 76%)" }}
            />
        </div>
      </div>
    </div>
  );
}
  */


import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";
import RedirectButton from "@/components/chat/RedirectButton"; // ✅ Import Redirect Button
import { useRouter } from "next/router";

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  const router = useRouter();

  return (
    <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5 bg-white shadow-[0_10px_15px_-3px_rgba(255,255,255,1)]">
      <div className="flex w-full">
        <div className="flex-0 w-[100px]"></div>
        <div className="flex-1 flex justify-center items-center gap-2">
          <AILogo />
          <p>{CHAT_HEADER}</p>
        </div>
        <div className="flex-0 w-[100px] flex justify-end items-center gap-2">
          {/* ✅ Clear Chat History Button with HSL color */}
          <Button
            onClick={clearMessages}
            className="shadow-sm rounded-lg text-gray-900 hover:opacity-80 transition-colors"
            variant="default"
            size="sm"
            style={{ backgroundColor: "hsl(190, 45%, 76%)" }} // ✅ Apply custom color
          >
            <EraserIcon className="w-4 h-4" />
            <span>{CLEAR_BUTTON_TEXT}</span>
          </Button>

          {/* ✅ Redirect Button with Same HSL color */}
          <RedirectButton
            url="https://l.bttr.to/rAyYN"
            label="Schedule a Coaching Session"
            variant="default"
            className="shadow-sm rounded-lg text-gray-900 hover:opacity-80 transition-colors"
            style={{ backgroundColor: "hsl(190, 45%, 76%)" }} // ✅ Apply custom color
          />


          <Button
            onClick={() => router.push("/queries")} // ✅ Navigate to queries page
            className="shadow-sm rounded-lg text-gray-900 hover:opacity-80 transition-colors"
            variant="default"
            size="sm"
            style={{ backgroundColor: "hsl(190, 45%, 76%)", color: "white" }} // ✅ Custom color for visibility
          />
            Admin Access
        </div>
      </div>
    </div>
  );
}

