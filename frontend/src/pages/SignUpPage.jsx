import {MessageSquare, User, Mail, EyeOff, Eye, Lock, Loader2,} from "lucide-react";
import React, { useState } from "react";
import { useAuthStore} from "../store/useAuthStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const backgroundCircles = [
    { top: "6%", left: "12%", size: 18, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "10%", left: "36%", size: 28, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "14%", left: "72%", size: 22, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "18%", left: "88%", size: 16, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "24%", left: "20%", size: 34, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "28%", left: "50%", size: 20, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "32%", left: "66%", size: 14, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "36%", left: "8%", size: 26, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "40%", left: "28%", size: 12, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "44%", left: "80%", size: 30, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "48%", left: "58%", size: 18, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "54%", left: "16%", size: 22, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "60%", left: "38%", size: 16, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "62%", left: "68%", size: 24, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "66%", left: "86%", size: 12, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "70%", left: "24%", size: 28, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "74%", left: "52%", size: 14, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "78%", left: "6%", size: 20, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "82%", left: "34%", size: 26, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "86%", left: "70%", size: 18, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "90%", left: "90%", size: 22, color: "bg-[rgba(198,180,220,0.22)]" }
  ];
  const[showPassword, setShowPassword] = useState(false);
  const[formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const{ signup, isSigningUp} = useAuthStore();


  const validateForm =()=>{
    if(!formData.fullName.trim()) return toast.error("Full name is required");
    if(!formData.email.trim()) return toast.error("Email is required");
    
    const email = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return toast.error("Invalid email format");

    if(!formData.password) return toast.error("Password is required");
    if(formData.password.length < 6) return toast.error("Password must be at least 6 characters long");
    return true;
  }


  const handleSubmit =(e)=>{
    e.preventDefault();
    const sucess = validateForm()
    if(sucess=== true) signup(formData);
  };

  

  return <div className="min-h-screen relative flex items-center justify-center px-6 py-12">
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

    <div className="relative w-full max-w-md mt-10 space-y-8 rounded-2xl bg-base-100/85 p-8 shadow-xl border border-base-300/70">
        <div className="text-center">
          <div className="flex flex-col items-center gap-2 group">
            <div
              className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center
                         group-hover:bg-primary/20 transition-colors"
            >
              <MessageSquare className="size-6 text-[rgb(176,154,204)]" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-base-content/50">Chatbox</p>
            <h1 className="text-3xl font-bold mt-2 brand-serif">Create account</h1>
            <p className="text-base-content/70">
              Get started with your free account
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className= "space-y-6">
        <div className= "form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="size-5 text-base-content/40" />
              </div>
              <input
                type="text"
                className="input input-bordered w-full pl-10 focus:outline-none focus:border-primary"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}

              />
            </div>

        </div>
        <div className="form-control">
          <label className="label"> 
            <span className="label-text font-medium">Email</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="size-5 text-base-content/40"/>
            </div>
            <input
              type="email"
              className="input input-bordered w-full pl-10 focus:outline-none focus:border-primary"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value})}
            />
          </div>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="size-5 text-base-content/40" />
            </div>
            <input
              type={showPassword? "text" : "password"}
              className="input input-bordered w-full pl-10 focus:outline-none focus:border-primary"
              placeholder="********"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value})}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword?(
                <Eye className="size-5 text-base-content/40" />
              ) : (
                <EyeOff className="size-5 text-base-content/40"/>
              
              )}
            </button>

          </div>
        </div>

        <button
          type="submit"
          className="btn w-full border border-base-300 bg-[rgba(198,180,220,0.85)] text-[rgb(64,52,82)] hover:bg-[rgba(198,180,220,0.95)]"
          disabled={isSigningUp}
        >
          {isSigningUp?(
            <>
              <Loader2 className="size-5 animate-spin" />
              Loading...
            </>
          ) :(
            "Create account"
          )
          }
        </button>

      </form>

      <div className="text-center">
        <p className="text-base-content/60">
          Already have an account?{""}
          <Link to ="/login" className="link text-[rgb(176,154,204)]">
            Sign in
          </Link>
        </p>
      </div>
      </div>
  </div>
};

export default SignUpPage;
