import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  version: string;
  type: "submit" | "button";
  isDisabled: boolean;
}

function Button({ children, version, type, isDisabled }: ButtonProps) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  isDisabled: false,
};
export default Button;
