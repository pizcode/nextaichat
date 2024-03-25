"use client";

import { CopyTextButton } from "@/components/copy-text-button";
import { AppIcon } from "@/components/icons/app-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { PaperAirplaneIcon } from "@/components/icons/paper-airplane";
import { RobotIcon } from "@/components/icons/robot-icon";
import { UserIcon } from "@/components/icons/user-icon";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import Markdown from "react-markdown";

export default function Completion() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    error,
  } = useChat();

  const messagesEndRef = useRef(null) as any;
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <AppIcon />
              <span className="font-bold">AI Chat</span>
            </a>
          </div>
          <div className="flex flex-1 items-center space-x-2 justify-end">
            <nav className="flex items-center space-x-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/pizcode/nextaichat"
              >
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                  <GithubIcon />
                  <span className="sr-only">GitHub</span>
                </div>
              </a>

              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-2xl px-2 py-24">
        {!messages.length && (
          <div>
            Please note that the results provided by AI may be inaccurate. Use
            the information at your own discretion.
          </div>
        )}

        {/* messages */}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2 mb-5 ${
              m.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="relative flex items-center justify-center font-semibold text-xl h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800">
              {m.role === "user" ? <UserIcon /> : <RobotIcon />}
            </div>
            {/* <div className="flex flex-col items-end space-y-1"> */}
            <Card className="relative group">
              <div className="absolute top-0 right-0 m-1 hidden group-hover:flex">
                <CopyTextButton textToCopy={m.content} />
              </div>
              <CardContent className="py-2 px-4">
                <Markdown className="markdown prose w-full break-words dark:prose-invert">
                  {m.content}
                </Markdown>
              </CardContent>
            </Card>
            {/* </div> */}
          </div>
        ))}

        {error?.message && (
          <Alert className="my-2 bg-background" variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error?.message}</AlertDescription>
          </Alert>
        )}

        <div className="mb-10" ref={messagesEndRef} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form
          className="max-w-2xl mx-auto pt-2 pb-5 px-2 md:px-0"
          onSubmit={handleSubmit}
        >
          {!messages.length && (
            <label htmlFor="input" className="w-full">
              Say something...
            </label>
          )}
          <div className="flex items-center space-x-2">
            <Input
              id="input"
              value={input}
              placeholder="Enter message..."
              onChange={handleInputChange}
            />
            {isLoading && (
              <Button type="button" onClick={stop}>
                Stop
              </Button>
            )}
            <Button disabled={isLoading} type="submit">
              <PaperAirplaneIcon />
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
