export const Prose = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`prose dark:prose-invert ${className}`}>{children}</div>
);
