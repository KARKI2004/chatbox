import React from "react";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const backgroundCircles = [
    { top: "6%", left: "10%", size: 18, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "10%", left: "32%", size: 28, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "14%", left: "70%", size: 22, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "20%", left: "86%", size: 16, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "24%", left: "18%", size: 34, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "28%", left: "48%", size: 20, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "30%", left: "62%", size: 14, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "36%", left: "8%", size: 26, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "38%", left: "26%", size: 12, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "42%", left: "78%", size: 30, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "46%", left: "56%", size: 18, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "52%", left: "14%", size: 22, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "58%", left: "36%", size: 16, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "60%", left: "64%", size: 24, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "64%", left: "84%", size: 12, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "68%", left: "22%", size: 28, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "72%", left: "48%", size: 14, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "76%", left: "6%", size: 20, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "82%", left: "32%", size: 26, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "86%", left: "68%", size: 18, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "90%", left: "90%", size: 22, color: "bg-[rgba(198,180,220,0.22)]" }
  ];
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {login, isLoggingIn} = useAuthStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundCircles.map((circle, index) => (
          <span
            key={index}
            className={`absolute rounded-full blur-[0.5px] ${circle.color}`}
            style={{
              top: circle.top,
              left: circle.left,
              width: `${circle.size}px`,
              height: `${circle.size}px`
            }}
          />
        ))}
        <div className="absolute -top-16 left-10 w-56 h-56 rounded-full bg-[rgba(198,180,220,0.22)] blur-3xl" />
        <div className="absolute bottom-10 right-12 w-64 h-64 rounded-full bg-[rgba(198,180,220,0.22)] blur-3xl" />
      </div>

      <div className="relative w-full max-w-md space-y-8 rounded-2xl bg-base-100/85 p-8 shadow-xl border border-base-300/70">
          <div className="text-center">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-[rgb(176,154,204)]" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-base-content/50">Chatbox</p>
              <h1 className="text-3xl font-bold mt-2 brand-serif">Welcome back</h1>
              <p className="text-base-content/70">Sign in to continue the conversation.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 focus:outline-none focus:border-primary"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 focus:outline-none focus:border-primary"
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full border border-base-300 bg-[rgba(198,180,220,0.85)] text-[rgb(64,52,82)] hover:bg-[rgba(198,180,220,0.95)]"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link text-[rgb(176,154,204)]">
                Create account
              </Link>
            </p>
          </div>
        </div>
    </div>
  );
};
export default LoginPage;
