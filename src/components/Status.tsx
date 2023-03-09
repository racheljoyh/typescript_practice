import { StatusProps } from "./Types";

export const Status = ({ status }: StatusProps) => {
  let message;

  if (status === "loading") {
    message = "Loading";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  } else if (status === "error") {
    message = "Error fetching data";
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
