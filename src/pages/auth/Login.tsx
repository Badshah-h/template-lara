import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MessageSquare, Mail, Lock } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Column - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary/90 to-purple-700 text-white p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="h-8 w-8" />
            <h1 className="text-2xl font-bold">AI Chat Widget</h1>
          </div>
          <div className="mt-24">
            <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
            <p className="text-xl opacity-90 mb-8 max-w-md">
              Log in to access your AI chat widget dashboard and manage your
              customer interactions.
            </p>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="italic text-white/90 mb-4">
                "This AI chat solution has transformed our customer service
                operations. Response times are down 80% and customer
                satisfaction is up 45%."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Testimonial avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm opacity-80">CTO, TechCorp Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} AI Chat Widget. All rights reserved.
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full md:w-1/2 bg-background p-6 md:p-12 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2 md:hidden">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">AI Chat Widget</h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="max-w-md mx-auto w-full">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">Sign In</h2>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>

          <Card className="border-primary/10 shadow-lg">
            <CardContent className="pt-6">
              <form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        to="#"
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white"
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t p-6 flex justify-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
