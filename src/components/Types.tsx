export type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export type StatusProps = {
  status: "loading" | "success" | "error";
};

// reusable properties
export type Name = {
  first: string;
  last: string;
};

export type PersonsListProps = {
  names: Name[];
};

export type PersonProps = {
  name: Name;
};

export type OscarProps = {
  children: React.ReactNode;
};

export type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type HeadingProps = {
  children: string;
};

export type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export type ContainerProps = {
  style: React.CSSProperties;
};
