import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Button } from "@/components/ui/button";
import "./Auth.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="loginContainer">
      <div className="box min-h-[35rem] w-[28rem] p-6"> {/* Updated size */}
        <div className="login p-4"> {/* Added padding for better layout */}
          {/* Form Header */}
          <h1 className="text-2xl font-bold mb-2 align-items text-white">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h1>
          <p className="text-gray-400 mb-4">
            {isSignUp
              ? "Fill in your details to create an account"
              : "Log in with your email and password"}
          </p>

          {/* Render SignUp or Login */}
          {isSignUp ? <SignUp /> : <Login />}

          {/* Toggle Button */}
          <div className="toggleContainer mt-4">
            <p className="text-sm text-gray-500 mb-2">
              {isSignUp
                ? "Already have an account?"
                : "Don't have an account?"}
            </p>
            <Button
              variant="ghost"
              onClick={() => setIsSignUp(!isSignUp)}
              className="toggleButton text-white border"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
