"use client";
import { useState } from "react";
import Link from "next/link";
import {Eye,EyeOff,Mail,Lock,User,} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { API } from "@/lib/api";
import api from "@/lib/axios";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] =useState(false);
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Signing up with:", { username, email, password });
    try{
      const response = await api.post(API.signup, {username, email, password});
      console.log("Sign-up successful:", response.data);
      toast.success(response.data.message || "Sign up successfully");
      const { token } = response.data;
      localStorage.setItem("accesstoken", token);
      router.push("/dashboard");
    }catch(error){
      console.error("Error during sign-up:", error);
      toast.error("Error during sign-up. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex">

      {/* LEFT SIDE */}
      <div className="hidden sm:flex flex-1 flex-col justify-center h-504px" style={{paddingBottom: "16px", paddingLeft: "40px", paddingRight: "16px"}}>
        <img src="/SyncFlow_Icon.svg" alt="Image" className="rounded-3xl h-20 w-100" />
        {/* IMAGE PLACEHOLDER */}
        <img src="/SignUp_image.jfif" alt="Image" className="rounded-3xl h-99 w-300" />

        <div className="max-w-xl">

          <div className="m-10">
            <h1 className="text-5xl font-bold leading-tight">
              Join{" "}
              <span className="text-blue-500">
                SyncHub
              </span>{" "}
              Today.
            </h1>

            <p className="text-slate-400 text-lg">
              Start collaborating effortlessly
              with your team.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center p-6 ">

        <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-xl p-12 w-800" style={{width: "100%", maxWidth: "500px", height: "550px"}}>

          {/* TITLE */}
          <div className="mb-4">

            <h2 className="text-3xl font-bold text-white">
              Create Your Account
            </h2>

            <p className="text-slate-400 mt-2">
              Let’s get started with your workspace.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSignUp}>

            {/* NAME */}
            <div className="space-y-2">

              <label className="text-sm text-slate-300">
                Full Name
              </label>

              <div className="relative mt-3">

                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <Input
                  placeholder="Enter your full name"
                  className="pl-10 bg-[#111827] border-white/10 text-white"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="space-y-2">

              <label className="text-sm text-slate-300">
                Email Address
              </label>

              <div className="relative mt-3">

                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-[#111827] border-white/10 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">

              <label className="text-sm text-slate-300">
                Password
              </label>

              <div className="relative mt-3">

                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <Input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create password"
                  className="pl-10 pr-10 bg-[#111827] border-white/10 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* TERMS */}
            <div className="flex items-center gap-3 text-sm text-slate-400">

              <Checkbox />

              <p>
                I agree to the{" "}
                <span className="text-blue-400">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-blue-400">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* BUTTON */}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-slate-400">

              Already have an account?{" "}

              <Link
                href="/login"
                className="text-blue-400 hover:underline"
              >
                Login
              </Link>
            </p>

          </form>
        </Card>
      </div>
    </div>
  );
}