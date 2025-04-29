import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertCircle,
  BarChart3,
  Book,
  Code,
  FileText,
  MessageSquare,
  Settings,
  Upload,
  Users,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("ai-config");
  const [progress, setProgress] = useState(67);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="min-w-[20px] w-[100px] h-[100px]"></div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Configure and manage your AI chat widget
        </p>
      </header>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-1">
                <h3 className="font-medium">Widget Status</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active</span>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Online
                  </Badge>
                </div>
                <Progress value={progress} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  67% of monthly quota used
                </p>
              </div>
            </CardContent>
          </Card>

          <nav className="space-y-1">
            <Button
              variant={activeTab === "ai-config" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("ai-config")}
            >
              <Settings className="mr-2 h-4 w-4" />
              AI Configuration
            </Button>
            <Button
              variant={activeTab === "knowledge" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("knowledge")}
            >
              <Book className="mr-2 h-4 w-4" />
              Knowledge Base
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("analytics")}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button
              variant={activeTab === "agents" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("agents")}
            >
              <Users className="mr-2 h-4 w-4" />
              Human Agents
            </Button>
            <Button
              variant={activeTab === "embed" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("embed")}
            >
              <Code className="mr-2 h-4 w-4" />
              Embed Code
            </Button>
          </nav>
        </aside>

        <main className="flex-1">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsContent value="ai-config" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Model Configuration</CardTitle>
                  <CardDescription>
                    Select and configure the AI model for your chat widget
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="model">AI Model</Label>
                    <Select defaultValue="gemini-pro">
                      <SelectTrigger id="model">
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gemini-pro">
                          Google Gemini Pro
                        </SelectItem>
                        <SelectItem value="gemini-flash">
                          Google Gemini Flash
                        </SelectItem>
                        <SelectItem value="huggingface-mistral">
                          Hugging Face - Mistral
                        </SelectItem>
                        <SelectItem value="huggingface-llama">
                          Hugging Face - Llama 2
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="system-prompt">System Prompt</Label>
                    <Textarea
                      id="system-prompt"
                      placeholder="You are a helpful assistant for our company..."
                      className="min-h-32"
                      defaultValue="You are a helpful assistant for our company. You should be friendly, concise, and accurate. When you don't know the answer, admit it and offer to connect the user with a human agent."
                    />
                    <p className="text-sm text-muted-foreground">
                      This prompt guides the AI's behavior and personality.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="temperature"
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.7"
                        className="w-full"
                      />
                      <span className="text-sm w-12 text-center">0.7</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Controls randomness: lower values are more deterministic,
                      higher values more creative.
                    </p>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="rag-switch">Enable RAG</Label>
                        <p className="text-sm text-muted-foreground">
                          Use Retrieval-Augmented Generation with your knowledge
                          base
                        </p>
                      </div>
                      <Switch id="rag-switch" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="handoff-switch">Human Handoff</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow users to request a human agent
                        </p>
                      </div>
                      <Switch id="handoff-switch" defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Chat Widget Appearance</CardTitle>
                  <CardDescription>
                    Customize how your chat widget looks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primary-color"
                          type="color"
                          defaultValue="#4f46e5"
                          className="w-12 h-9 p-1"
                        />
                        <Input defaultValue="#4f46e5" className="flex-1" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="widget-title">Widget Title</Label>
                      <Input id="widget-title" defaultValue="Chat with us" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="welcome-message">Welcome Message</Label>
                      <Input
                        id="welcome-message"
                        defaultValue="Hello! How can I help you today?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Widget Position</Label>
                      <Select defaultValue="bottom-right">
                        <SelectTrigger id="position">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bottom-right">
                            Bottom Right
                          </SelectItem>
                          <SelectItem value="bottom-left">
                            Bottom Left
                          </SelectItem>
                          <SelectItem value="top-right">Top Right</SelectItem>
                          <SelectItem value="top-left">Top Left</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="knowledge" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Knowledge Base</CardTitle>
                  <CardDescription>
                    Upload and manage documents for your AI to reference
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm font-medium">
                      Drag and drop files here or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Supports PDF, DOCX, TXT, CSV, and Markdown files
                    </p>
                    <Button variant="outline" className="mt-4">
                      Upload Files
                    </Button>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <h3 className="font-medium">Uploaded Documents</h3>
                    <ScrollArea className="h-64 border rounded-md">
                      <div className="p-4 space-y-2">
                        {[
                          {
                            name: "Product Manual.pdf",
                            size: "2.4 MB",
                            date: "2023-06-15",
                          },
                          {
                            name: "FAQ.docx",
                            size: "342 KB",
                            date: "2023-06-10",
                          },
                          {
                            name: "Pricing.csv",
                            size: "156 KB",
                            date: "2023-06-05",
                          },
                          {
                            name: "Terms of Service.pdf",
                            size: "1.2 MB",
                            date: "2023-05-28",
                          },
                          {
                            name: "API Documentation.md",
                            size: "890 KB",
                            date: "2023-05-20",
                          },
                        ].map((doc, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2 hover:bg-muted rounded-md"
                          >
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm font-medium">
                                {doc.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-muted-foreground">
                                {doc.size}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {doc.date}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <span className="sr-only">Remove</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website-url">Add Website URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="website-url"
                        placeholder="https://example.com/docs"
                        className="flex-1"
                      />
                      <Button>Add URL</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      The AI will crawl and index the content from this URL
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conversation Analytics</CardTitle>
                  <CardDescription>
                    View statistics and insights about your chat interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <MessageSquare className="h-8 w-8 mx-auto text-primary mb-2" />
                          <h3 className="text-2xl font-bold">1,248</h3>
                          <p className="text-sm text-muted-foreground">
                            Total Conversations
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                          <h3 className="text-2xl font-bold">87%</h3>
                          <p className="text-sm text-muted-foreground">
                            AI Resolution Rate
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <AlertCircle className="h-8 w-8 mx-auto text-primary mb-2" />
                          <h3 className="text-2xl font-bold">13%</h3>
                          <p className="text-sm text-muted-foreground">
                            Human Handoff Rate
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="h-64 border rounded-md flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">
                      Conversation volume chart would appear here
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Top User Queries</h3>
                    <ScrollArea className="h-48 border rounded-md">
                      <div className="p-4 space-y-2">
                        {[
                          { query: "How do I reset my password?", count: 78 },
                          { query: "What are your business hours?", count: 64 },
                          {
                            query: "How much does the premium plan cost?",
                            count: 52,
                          },
                          { query: "Do you offer refunds?", count: 47 },
                          {
                            query: "How do I cancel my subscription?",
                            count: 41,
                          },
                          {
                            query: "Is there a free trial available?",
                            count: 38,
                          },
                          { query: "How do I contact support?", count: 36 },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2 hover:bg-muted rounded-md"
                          >
                            <span className="text-sm">{item.query}</span>
                            <Badge variant="outline">{item.count}</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="agents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Human Agents</CardTitle>
                  <CardDescription>
                    Manage human agents who can take over conversations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Active Agents</h3>
                      <p className="text-sm text-muted-foreground">
                        Agents available to handle conversations
                      </p>
                    </div>
                    <Button>Add Agent</Button>
                  </div>

                  <div className="border rounded-md">
                    <div className="grid grid-cols-5 gap-4 p-4 border-b font-medium text-sm">
                      <div className="col-span-2">Name</div>
                      <div>Status</div>
                      <div>Conversations</div>
                      <div>Actions</div>
                    </div>
                    <div className="divide-y">
                      {[
                        {
                          name: "Sarah Johnson",
                          email: "sarah@example.com",
                          status: "Online",
                          conversations: 12,
                        },
                        {
                          name: "Michael Chen",
                          email: "michael@example.com",
                          status: "Away",
                          conversations: 8,
                        },
                        {
                          name: "Jessica Williams",
                          email: "jessica@example.com",
                          status: "Offline",
                          conversations: 0,
                        },
                        {
                          name: "David Rodriguez",
                          email: "david@example.com",
                          status: "Online",
                          conversations: 5,
                        },
                      ].map((agent, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-5 gap-4 p-4 items-center"
                        >
                          <div className="col-span-2">
                            <div className="font-medium">{agent.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {agent.email}
                            </div>
                          </div>
                          <div>
                            <Badge
                              variant="outline"
                              className={`
                                ${agent.status === "Online" ? "bg-green-50 text-green-700 border-green-200" : ""}
                                ${agent.status === "Away" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : ""}
                                ${agent.status === "Offline" ? "bg-gray-50 text-gray-700 border-gray-200" : ""}
                              `}
                            >
                              {agent.status}
                            </Badge>
                          </div>
                          <div>{agent.conversations}</div>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <span className="sr-only">Edit</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                              </svg>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <span className="sr-only">Delete</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Routing Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-assign">
                            Auto-assign conversations
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically assign conversations to available
                            agents
                          </p>
                        </div>
                        <Switch id="auto-assign" defaultChecked />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="handoff-threshold">
                          AI confidence threshold for handoff
                        </Label>
                        <div className="flex items-center gap-4">
                          <Input
                            id="handoff-threshold"
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            defaultValue="60"
                            className="w-full"
                          />
                          <span className="text-sm w-12 text-center">60%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          When AI confidence falls below this threshold,
                          conversation will be handed to a human agent
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="embed" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Embed Code</CardTitle>
                  <CardDescription>
                    Add this code to your website to embed the chat widget
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>
                        {`<script>
  (function(w,d,s,o,f,js,fjs){
    w['AIChatWidget']=o;
    w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','aiChat','https://widget.example.com/chat.js'));
  aiChat('init', { widgetId: 'abc123' });
</script>`}
                      </code>
                    </pre>
                  </div>

                  <Button className="w-full sm:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy Embed Code
                  </Button>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <h3 className="font-medium">Allowed Domains</h3>
                    <p className="text-sm text-muted-foreground">
                      Restrict which websites can embed your chat widget
                    </p>

                    <div className="space-y-2">
                      {[
                        "example.com",
                        "blog.example.com",
                        "store.example.com",
                      ].map((domain, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2 border rounded-md"
                        >
                          <span className="text-sm">{domain}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <span className="sr-only">Remove</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter domain (e.g., example.com)"
                        className="flex-1"
                      />
                      <Button>Add Domain</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
