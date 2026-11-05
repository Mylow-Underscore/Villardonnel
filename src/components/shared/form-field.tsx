"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label"; // Assuming shadcn label is installed
import { MessageCircle } from "lucide-react";

interface FormFieldProps {
  label: string;
  name: string;
  description?: string;
  error?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
}

export function FormField({
  label,
  name,
  description,
  error,
  type = "text",
  placeholder,
}: FormFieldProps) {
  const { register, formState: { errors } } = useFormContext();
  const currentError = (errors[name]?.message as string | undefined) ?? error;

  return (
    <div className="space-y-1.5 w-full">
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
      </Label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full${
          currentError ? " border-destructive focus-visible:ring-destructive" : ""
        }`}
      />
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      {currentError && (
        <p className="text-xs text-destructive flex items-center gap-1">
          <MessageCircle className="w-3 h-3" />
          {currentError}
        </p>
      )}
    </div>
  );
}
