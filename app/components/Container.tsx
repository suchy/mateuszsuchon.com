import React from "react";

export const Container = ({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) => (
  <OuterContainer className={className}>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);

export const OuterContainer = ({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`sm:px-8 ${className}`}>
    <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
  </div>
);

export const InnerContainer = ({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`relative px-4 sm:px-8 lg:px-12 ${className}`}>
    <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
  </div>
);
