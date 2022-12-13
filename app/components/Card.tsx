import type { ReactNode } from "react";
import { Link } from "@remix-run/react";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={`${className} group relative flex flex-col items-start`}>
    {children}
  </div>
);

interface CardTitleProps {
  children: ReactNode;
  to: string;
}

export const CardTitle = ({ children, to }: CardTitleProps) => (
  <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
    <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
    <Link to={to} title="">
      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
      <span className="relative z-10">{children}</span>
    </Link>
  </h2>
);

interface CardCtaProps {
  children: ReactNode;
}

export const CardCta = ({ children }: CardCtaProps) => (
  <div
    aria-hidden="true"
    className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
  >
    {children}
    <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
  </div>
);

interface CardDescriptionProps {
  children: ReactNode;
}

export const CardDescription = ({ children }: CardDescriptionProps) => (
  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
    {children}
  </p>
);

interface CardDateProps {
  children: ReactNode;
  className?: string;
  decorate?: boolean;
  dateTime?: string;
}

export const CardDate = ({
  children,
  className,
  decorate,
  dateTime,
}: CardDateProps) => (
  <time
    className={`${className} relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 ${
      decorate ? "pl-3.5" : ""
    }`}
    dateTime={dateTime}
  >
    {decorate && (
      <span
        className="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
      >
        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
      </span>
    )}

    {children}
  </time>
);
