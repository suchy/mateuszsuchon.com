import { Link, useLocation } from "@remix-run/react";
import type { HTMLAttributes } from "react";

export const Navigation = (props: HTMLAttributes<HTMLElement>) => (
  <nav {...props}>
    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
      <NavItem to="/about">About</NavItem>
      <NavItem to="/articles">Articles</NavItem>
    </ul>
  </nav>
);

interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  to: string;
}

const NavItem = ({ to, children, ...props }: NavItemProps) => {
  const { pathname } = useLocation();

  const isActive = pathname === to;

  const baseClassNames = "relative block px-3 py-2 transition";
  const activeClassNames = "text-teal-500 dark:text-teal-400";

  const defaultClassNames = "hover:text-teal-500 dark:hover:text-teal-400";

  return (
    <li {...props}>
      <Link
        to={to}
        className={`${baseClassNames} ${
          isActive ? activeClassNames : defaultClassNames
        }`}
      >
        {children}

        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
};
