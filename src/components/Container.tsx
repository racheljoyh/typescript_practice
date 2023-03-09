import { isPropertyAccessChain } from "typescript";

type ContainerProps = {
  style: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return (
    <div style={props.style}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  );
};
