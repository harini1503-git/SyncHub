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

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] =useState(false);
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleLogin(e) {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    try{
      const response = await api.post(API.login, {email, password});
      console.log("Login successful:", response.data);
      toast.success(response.data.message || "Login successful");
      const { token } = response.data;
      localStorage.setItem("accesstoken", token);
      router.push("/dashboard");
    }catch(error){
      console.error("Error during login:", error);
      toast.error("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex">

      {/* LEFT SIDE */}
      <div className="hidden sm:flex flex-1 flex-col justify-center h-504px" style={{paddingBottom: "16px", paddingLeft: "40px", paddingRight: "16px"}}>
        <img src="/SyncFlow_Icon.svg" alt="Image" className="rounded-3xl h-20 w-100" />
        <div className="max-w-xl">

          <div className="m-10">
            <h1 className="text-5xl font-bold leading-tight">
              Welcome{" "}
              <span className="text-blue-500">
                Back
              </span>{" "}
              Today.
            </h1>

            <p className=" text-slate-400 text-lg">
               Login in to access your unified 
               workspace for tasks, chat, and meetings.
            </p>
          </div>
        </div>
        {/* IMAGE PLACEHOLDER */}
        <img src="/Login_image.png" alt="Image" className="rounded-3xl h-99 w-300" />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center p-6 ">

        <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-xl p-12 w-800" style={{width: "100%", maxWidth: "500px", height: "auto"}}>

          {/* TITLE */}
          <div className="mb-3">

            <h2 className="text-3xl font-bold text-white">
              Login to SyncHub
            </h2>

            <p className="text-slate-400 mt-2">
                Enter your credentials to access your account and start collaborating.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="space-y-2">

              <label className="font-medium text-base text-slate-300">
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
                  className="pl-10 bg-[#111827] border-white/10 text-white h-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-5">

              <label className="font-medium text-base text-slate-300">
                Password
              </label>

              <div className="relative mt-3">

                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 bg-[#111827] border-white/10 text-white h-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* TERMS */}
            <div className=" xl:flex xl:items-center xl:gap-3 xl:text-sm text-slate-400">
                <span className="flex gap-3">
                    <Checkbox />
                    <p>Remember me </p>
                </span>
                <span className="ml-auto">
                    <Link href="/forgot-password" className="text-blue-400 hover:underline">
                        Forgot password?
                    </Link>
                </span>
            </div>

            {/* BUTTON */}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10 text-base font-medium font-bold cursor-pointer">
              Login
            </Button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-slate-400">

              Don't have an account?{" "}

              <Link
                href="/signup"
                className="text-blue-400 hover:underline"
              >
                Sign Up
              </Link>
            </p>

          </form>
        </Card>
      </div>
    </div>
  );
}