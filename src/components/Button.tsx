import { ButtonProps } from "./Types";

export const Button = ({ handleClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 1)}>Click Me</button>
    </div>
  );
};
