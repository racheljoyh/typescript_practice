import { InputProps } from "./Types";

export const Input = ({ value, handleChange }: InputProps) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
