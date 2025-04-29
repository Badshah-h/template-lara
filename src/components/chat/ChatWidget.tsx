import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2, User, Bot } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai" | "human";
  timestamp: Date;
  status?: "sending" | "sent" | "error";
  media?: {
    type: "image";
    url: string;
  }[];
}

interface ChatWidgetProps {
  title?: string;
  subtitle?: string;
  initialOpen?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  agentName?: string;
  agentAvatar?: string;
  onSendMessage?: (message: string) => Promise<void>;
}

const ChatWidget = ({
  title = "Chat Support",
  subtitle = "Ask us anything!",
  initialOpen = false,
  primaryColor = "#4f46e5",
  secondaryColor = "#ffffff",
  position = "bottom-right",
  agentName = "AI Assistant",
  agentAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=assistant",
  onSendMessage = async () => {},
}: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: `Hi there! I'm ${agentName}. How can I help you today?`,
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isHumanAgent, setIsHumanAgent] = useState(false);

  // Position styling
  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Simulate AI response after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // If human agent is active, simulate human response
      if (isHumanAgent) {
        const humanResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: `Thanks for your message! This is a human agent response to: "${message}". How else can I help you?`,
          sender: "human",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, humanResponse]);
      } else {
        // Simulate AI response
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: `This is an AI response to: "${message}". I can provide more information if needed.`,
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
      }

      // Call the onSendMessage prop if provided
      await onSendMessage(message);
    } catch (error) {
      console.error("Error sending message:", error);
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          content:
            "Sorry, there was an error processing your request. Please try again.",
          sender: "ai",
          timestamp: new Date(),
          status: "error",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const requestHumanAgent = () => {
    setIsHumanAgent(true);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content:
          "You have been connected to a human agent. Please allow a moment for them to review your conversation.",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-80 sm:w-96 h-[500px] flex flex-col"
          >
            <Card className="w-full h-full flex flex-col shadow-lg border bg-background">
              <CardHeader
                className="p-4 flex flex-row justify-between items-center"
                style={{ backgroundColor: primaryColor, color: secondaryColor }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20">
                    <img
                      src={agentAvatar}
                      alt={agentName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{title}</h3>
                    <p className="text-xs opacity-90">
                      {isHumanAgent ? "Human Agent" : subtitle}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent className="flex-grow p-0 overflow-hidden">
                <ChatMessages
                  messages={messages}
                  isTyping={isTyping}
                  agentAvatar={agentAvatar}
                />
              </CardContent>

              <CardFooter className="p-2 border-t">
                <div className="w-full space-y-2">
                  <ChatInput
                    onSendMessage={handleSendMessage}
                    disabled={isTyping}
                  />

                  {!isHumanAgent && (
                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={requestHumanAgent}
                        className="text-xs"
                      >
                        <User className="mr-1 h-3 w-3" />
                        Talk to a human agent
                      </Button>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={toggleChat}
              className="rounded-full w-14 h-14 shadow-lg"
              style={{ backgroundColor: primaryColor, color: secondaryColor }}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
