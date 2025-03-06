import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const InputCommon = ({ name, label, ...props }) => {
  return (
    <div className="w-full space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} {...props} />
    </div>
  );
};

export default InputCommon;
