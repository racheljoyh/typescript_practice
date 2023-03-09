import { GreetProps } from "./Types";

export const Greeting = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages.`
          : "Welcome, Guest!"}
      </h2>
    </div>
  );
};
