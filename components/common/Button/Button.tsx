import React from "react";
import { Button as ButtonComponent } from "@/components/ui/button";

interface ButtonProps {
  text?: string;
  Component?: React.ReactNode;
  className?: React.ComponentProps<"button">["className"];
}

const Button: React.FC<ButtonProps> = ({ text, Component, className }) => {
  return (
    <ButtonComponent className={`flex gap-2 rounded-full ${className}`}>
      {Component}
      {text}
    </ButtonComponent>
  );
};

export default Button;
