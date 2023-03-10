import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // using Type assertion so that user is never null/only if certain that user will always be mounted soon after function is called
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);

  // used for when uncertaint that mount will occur soon after function is called
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Rachel",
      email: "rachel@example.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
