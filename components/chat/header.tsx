import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

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
    <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5">
      <div className="flex w-full">
        <div className="flex-1 flex justify-right items-center gap-2">
          <AILogo />
          <h1 className="text-4xl text-white">{CHAT_HEADER}</h1>
        </div>
        <div className="flex-0 w-[100px] flex justify-end items-center">
          <Button
            onClick={clearMessages}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            <EraserIcon className="w-4 h-4" />
            <h3 className="text-lg">{CLEAR_BUTTON_TEXT}</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}
