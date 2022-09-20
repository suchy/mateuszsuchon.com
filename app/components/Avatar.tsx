import type { HTMLAttributes } from "react";
import { Link } from "@remix-run/react";

interface AvatarProps extends HTMLAttributes<HTMLAnchorElement> {
  large?: boolean;
}

export const Avatar = ({ className = "", large }: AvatarProps) => (
  <Link to="/" aria-label="Home" className={`pointer-events-auto ${className}`}>
    <img
      src="https://via.placeholder.com/64.webp"
      alt="Mateusz Suchoń"
      sizes={large ? "4rem" : "2.25rem"}
      className={`rounded-full bg-zinc-100 object-cover dark:bg-zinc-800
        ${large ? "h-16 w-16" : "h-9 w-9"}`}
    />
  </Link>
);
