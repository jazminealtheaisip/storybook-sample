import { ComponentProps } from "react";
import "../../index.css";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ ...props }: ButtonProps) => {
  return <button className="text-blue-500" {...props} />;
};
