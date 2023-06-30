import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  cool: boolean;
};

function Card({ children, cool }: CardProps) {
  return <div className={`review-card ${cool && "aqua"}`}>{children}</div>;
}

export default Card;
