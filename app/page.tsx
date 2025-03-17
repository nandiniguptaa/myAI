"use client";

import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";
import RedirectButton from "@/components/chat/RedirectButton"; // Import the Redirect Button
//import "react-tippy/dist/tippy.css";

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();

  return (
    <>
      <ChatHeader clearMessages={clearMessages} />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col max-w-screen-lg w-full h-full p-5">
          <ChatMessages messages={messages} indicatorState={indicatorState} />
        
          {/* Added Redirect Button Below Chat Messages */}
          <div className="flex justify-center mt-4">
            <RedirectButton url="https://l.bttr.to/rAyYN" label="Schedule a Coaching Session" variant="default" />
          </div>
        </div>
      </div>
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </>
  );
}
