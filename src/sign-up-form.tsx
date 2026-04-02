"use client";
import React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { signUpDefaultValue } from "@/lib/constants";
import { Button } from "./ui/button";
import { signUpUser } from "@/lib/action/auth.action";
import Link from "next/link";

function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending ? true : false}
      className="w-full"
      variant="default"
    >
      {pending ? "Submitting..." : "Sign Up"}
    </Button>
  );
}

function SignUpForm() {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  return (
    <form action={action}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={signUpDefaultValue.name}
          />
        </div>
        
    </form>
  );
}

export default SignUpForm;
