import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using a Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>HM</AvatarFallback>
              <AvatarImage src="https://github.com/hmartiins.png" />
            </Avatar>

            <p>Olaaaa</p>
          </div>

          <div className="flex items-center gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>HM</AvatarFallback>
              <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" />
            </Avatar>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur est labore aut voluptatum esse corporis, fugit sit
              temporibus molestiae facere odit dolores? Harum dolor dolorum
              numquam nobis repellendus debitis ut!
            </p>
          </div>
        </CardContent>

        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
