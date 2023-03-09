import { PersonProps } from "./Types";

export const Person = ({ name }: PersonProps) => {
  const { first, last } = name;
  return (
    <div>
      {first} {last}
    </div>
  );
};
