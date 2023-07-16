"use client";

import { useChat } from "ai/react";

import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using a Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="pr-4 h-[600px] w-full">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex gap-3 text-slate-600 text-sm mb-4"
            >
              {message.role === "user" ? (
                <Avatar className="border-slate-200 border-2">
                  <AvatarFallback>HM</AvatarFallback>
                  <AvatarImage src="https://github.com/hmartiins.png" />
                </Avatar>
              ) : (
                <Avatar className="border-slate-200 border-2">
                  <AvatarFallback>GPT</AvatarFallback>
                  <AvatarImage src="https://buzzlead.com.br/wp-content/uploads/2023/03/5CF753E4-48A8-49DE-A4CE-D830F699114D-1024x1024.png" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                {/* <span className="block font-bold text-slate-700">
              </span> */}
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
