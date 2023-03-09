import { PersonsListProps } from "./Types";

export const PersonList = ({ names }: PersonsListProps) => {
  return (
    <div>
      {names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
