import classnames from "classnames";
import React, { ReactNode } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: keyof typeof elements;
  otherClasses?: string;
  children: ReactNode;
}

const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

const Heading: React.FC<HeadingProps> = ({
  type = "h1",
  children,
  otherClasses,
  ...props
}) => {
  const className = classnames(otherClasses);

  return React.createElement(
    elements[type] || "h1",
    { className, ...props },
    children
  );
};

export const HeadingPuckConfig = {
  componentName: "Heading",
  componentConfig: {
    fields: {
      heading: {
        label: "Heading",
        type: "text" },
      type: {
        type: "select",
        label: "Type",
        options: [
          { label: "h1", value: "h1" },
          { label: "h2", value: "h2" },
          { label: "h3", value: "h3" },
          { label: "h4", value: "h4" },
          { label: "h5", value: "h5" },
          { label: "h6", value: "h6" },
        ],
      },
    },
    defaultProps: {
      heading: "Heading",
      type: "h1",
    },
    render: (props) => {
      return <Heading type={props?.type}>{props?.heading}</Heading>;
    },
  },
};

export default Heading;
