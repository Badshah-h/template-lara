import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import ChatWidget from './chat/ChatWidget';
import { ArrowRight, Code, MessageSquare, Settings, Zap } from 'lucide-react';
import { ThemeToggle } from './theme/ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">AI Chat Widget</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
            <a href="#demo" className="text-sm font-medium hover:text-primary">Demo</a>
            <a href="#integration" className="text-sm font-medium hover:text-primary">Integration</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Documentation</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-background transition-colors duration-300">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-4">New Release</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Intelligent Chat for <span className="text-primary">Every Website</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Embed AI-powered chat on your website in minutes. Connect with your visitors, answer questions, and provide support 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              View Demo <Code className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create an exceptional chat experience for your visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>AI-Powered Responses</CardTitle>
                <CardDescription>
                  Leverage advanced AI models to provide intelligent and helpful responses to your visitors.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Human Handoff</CardTitle>
                <CardDescription>
                  Seamlessly transition from AI to human agents when more complex support is needed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription>
                  Add the chat widget to your website with a single line of JavaScript code.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our AI chat widget firsthand. Ask questions, get information, or request assistance.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                alt="Dashboard Preview" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="flex-1 relative h-[500px] border rounded-lg shadow-lg bg-background">
              {/* This is where the chat widget will be displayed */}
              <div className="absolute bottom-4 right-4">
                {typeof window !== 'undefined' && (
                  <React.Suspense fallback={<div className="w-14 h-14 rounded-full bg-primary animate-pulse"></div>}>
                    <ChatWidget />
                  </React.Suspense>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple Integration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Add our chat widget to your website in just a few minutes with a simple code snippet.
            </p>
          </div>

          <Tabs defaultValue="javascript" className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="wordpress">WordPress</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Add to your HTML</CardTitle>
                  <CardDescription>
                    Copy and paste this code snippet just before the closing &lt;/body&gt; tag.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>
                      {`<script async src="https://cdn.aichat.com/widget.js" data-widget-id="YOUR_WIDGET_ID"></script>`}
                    </code>
                  </pre>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Copy Code</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="react" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Install the React Component</CardTitle>
                  <CardDescription>
                    First, install the package using npm or yarn.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>
                      {`npm install @aichat/react-widget`}
                    </code>
                  </pre>
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Then import and use the component:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>
                        {`import { ChatWidget } from '@aichat/react-widget';

function App() {
  return (
    <div>
      <ChatWidget widgetId="YOUR_WIDGET_ID" />
    </div>
  );
}`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Copy Code</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="wordpress" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>WordPress Plugin</CardTitle>
                  <CardDescription>
                    Install our WordPress plugin for easy integration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Go to your WordPress admin dashboard</li>
                    <li>Navigate to Plugins > Add New</li>
                    <li>Search for "AI Chat Widget"</li>
                    <li>Click Install Now and then Activate</li>
                    <li>Go to Settings {'>'}  AI Chat Widget</li>
                    <li>Enter your Widget ID and save changes</li>
                  </ol>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Download Plugin</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get started with our AI chat widget today and provide instant support to your visitors.
          </p>
          <Button size="lg">Create Your Chat Widget</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">AI Chat Widget</h2>
              </div>
              <p className="text-muted-foreground">
                Intelligent conversations for your website visitors.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AI Chat Widget. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
