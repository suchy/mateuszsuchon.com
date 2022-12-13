import type { ReactNode } from "react";
import { Link } from "@remix-run/react";

import { InnerContainer, OuterContainer } from "./Container";

export const Footer = () => (
  <footer className="mt-32">
    <OuterContainer>
      <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <InnerContainer>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/articles">Articles</NavLink>
            </div>

            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Mateusz Suchoń. All rights
              reserved.
            </p>
          </div>
        </InnerContainer>
      </div>
    </OuterContainer>
  </footer>
);

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link
    to={to}
    className="transition hover:text-teal-500 dark:hover:text-teal-400"
  >
    {children}
  </Link>
);
