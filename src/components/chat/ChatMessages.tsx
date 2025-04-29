import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai" | "human";
  timestamp: Date;
  type: "text" | "image";
  imageUrl?: string;
  isTyping?: boolean;
}

interface ChatMessagesProps {
  messages?: Message[];
  isLoading?: boolean;
}

const ChatMessages = ({
  messages = [
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
      type: "text",
    },
    {
      id: "2",
      content: "I have a question about your services.",
      sender: "user",
      timestamp: new Date(),
      type: "text",
    },
    {
      id: "3",
      content:
        "Sure, I can help with that. What would you like to know about our services?",
      sender: "ai",
      timestamp: new Date(),
      type: "text",
    },
    {
      id: "4",
      content: "Do you offer custom solutions?",
      sender: "user",
      timestamp: new Date(),
      type: "text",
    },
    {
      id: "5",
      content:
        "Yes, we offer tailored solutions for businesses of all sizes. Here's an example of our work:",
      sender: "human",
      timestamp: new Date(),
      type: "text",
    },
    {
      id: "6",
      content: "",
      sender: "human",
      timestamp: new Date(),
      type: "image",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    },
  ],
  isLoading = false,
}: ChatMessagesProps) => {
  return (
    <div className="flex flex-col h-full bg-background rounded-md border border-gray-200">
      <div className="p-3 border-b border-gray-200">
        <h3 className="text-sm font-medium">Conversation</h3>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {message.sender !== "user" && (
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      src={
                        message.sender === "ai"
                          ? "https://api.dicebear.com/7.x/bottts/svg?seed=ai-assistant"
                          : "https://api.dicebear.com/7.x/avataaars/svg?seed=support-agent"
                      }
                      alt={message.sender === "ai" ? "AI" : "Support Agent"}
                    />
                    <AvatarFallback>
                      {message.sender === "ai" ? "AI" : "SA"}
                    </AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-center mb-1">
                    {message.sender !== "user" && (
                      <span className="text-xs text-gray-500 mr-2">
                        {message.sender === "ai"
                          ? "AI Assistant"
                          : "Support Agent"}
                      </span>
                    )}
                    {message.sender === "human" && (
                      <Badge variant="secondary" className="text-xs">
                        Human
                      </Badge>
                    )}
                  </div>

                  {message.type === "text" ? (
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : message.sender === "ai"
                            ? "bg-gray-100 text-gray-900"
                            : "bg-blue-50 text-blue-900"
                      }`}
                    >
                      {message.isTyping ? (
                        <div className="flex space-x-1 items-center h-6">
                          <div className="w-2 h-2 rounded-full bg-current animate-bounce"></div>
                          <div
                            className="w-2 h-2 rounded-full bg-current animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-current animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap">
                          {message.content}
                        </p>
                      )}
                    </div>
                  ) : message.type === "image" && message.imageUrl ? (
                    <div className="rounded-lg overflow-hidden max-w-xs">
                      <img
                        src={message.imageUrl}
                        alt="Shared image"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ) : null}

                  <span className="text-xs text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex flex-row">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/bottts/svg?seed=ai-assistant"
                    alt="AI"
                  />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500 mb-1">
                    AI Assistant
                  </span>
                  <div className="p-3 rounded-lg bg-gray-100 text-gray-900">
                    <div className="flex space-x-1 items-center h-6">
                      <div className="w-2 h-2 rounded-full bg-current animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-current animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-current animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatMessages;
