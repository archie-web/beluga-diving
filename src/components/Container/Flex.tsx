import React, { HTMLAttributes } from "react";

interface FlexProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
   children?: React.ReactNode;
}

export const Flex = ({ children, ...rest }: FlexProps) => (
   <div className="flex flex-col lg:flex-row" {...rest}>
      {children}
   </div>
);
