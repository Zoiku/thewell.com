import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";

const Section = ({ className, children, id, ...props }) => {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};

export { Section };
