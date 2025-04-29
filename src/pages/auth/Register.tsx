import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MessageSquare, Mail, Lock, User, Building } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Column - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="h-8 w-8" />
            <h1 className="text-2xl font-bold">AI Chat Widget</h1>
          </div>
          <div className="mt-24">
            <h2 className="text-4xl font-bold mb-6">Start Your Journey</h2>
            <p className="text-xl opacity-90 mb-8 max-w-md">
              Create an account to deploy AI-powered chat widgets on your
              website and transform your customer experience.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Quick Setup</h3>
                <p className="opacity-80 text-sm">
                  Deploy your chat widget in minutes with a simple JavaScript
                  snippet.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">AI Powered</h3>
                <p className="opacity-80 text-sm">
                  Leverage advanced AI models to provide intelligent responses
                  to your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} AI Chat Widget. All rights reserved.
        </div>
      </div>

      {/* Right Column - Registration Form */}
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
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-muted-foreground">
              Register to get started with AI Chat Widget
            </p>
          </div>

          <Card className="border-primary/10 shadow-lg">
            <CardContent className="pt-6">
              <form>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
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
                    <Label htmlFor="company">Company (Optional)</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
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
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link to="#" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="#" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t p-6 flex justify-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
