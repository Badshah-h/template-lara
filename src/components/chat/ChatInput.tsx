import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PaperclipIcon, SendIcon } from "lucide-react";

interface ChatInputProps {
  onSendMessage?: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

const ChatInput = ({
  onSendMessage = () => {},
  isLoading = false,
  placeholder = "Type your message here...",
  disabled = false,
}: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full bg-background border-t p-3 gap-2">
      <div className="flex items-end gap-2">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="min-h-[40px] max-h-[120px] resize-none"
          disabled={disabled || isLoading}
        />
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            disabled={disabled || isLoading}
            type="button"
            aria-label="Attach file"
          >
            <PaperclipIcon className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="rounded-full"
            onClick={handleSendMessage}
            disabled={!message.trim() || disabled || isLoading}
            type="button"
            aria-label="Send message"
          >
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
