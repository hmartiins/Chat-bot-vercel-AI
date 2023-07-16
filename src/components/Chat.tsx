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

import { PaperPlaneRight } from "@phosphor-icons/react";

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
        <ScrollArea className="pr-4 h-[60vh] w-full">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3  text-sm mb-4">
              {message.role === "user" ? (
                <Avatar className="border-slate-200 border-2">
                  <AvatarFallback>HM</AvatarFallback>
                  <AvatarImage src="https://github.com/hmartiins.png" />
                </Avatar>
              ) : (
                <Avatar className="border-slate-200 border-2">
                  <AvatarFallback>GPT</AvatarFallback>
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxuRgZT75U1SAtM-fdsKco9ysLpz3wPuCWNoNsB1YDajwbdcVbXo5e9kfw16U0fpMk5I&usqp=CAU" />
                </Avatar>
              )}

              <p className="leading-relaxed">{message.content}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            aria-label="Escreva algo"
            title="Escreva algo"
            placeholder="Escreva uma mensagem?"
            value={input}
            onChange={handleInputChange}
          />
          <Button className="bg-blue-500 text-white" type="submit">
            <PaperPlaneRight weight="bold" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
