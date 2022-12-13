import type { ReactNode } from "react";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

interface SocialLinkProps {
  children: ReactNode;
  title: string;
  url: string;
}
const linkedinUrl = "https://linkedin.com/in/mateuszsuchon";

const githubUrl = "https://github.com/suchy";

const twitterUrl = "https://twitter.com/suchy";

const socialIconLinkIconClassName =
  "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300";

const SocialIconLink = ({ children, title, url }: SocialLinkProps) => (
  <a href={url} title={title} className="group -m-1 p-1">
    {children}
  </a>
);

export const GithubIconLink = () => (
  <SocialIconLink url={githubUrl} title="@suchy on Github">
    <GithubIcon className={socialIconLinkIconClassName} />
  </SocialIconLink>
);

export const TwitterIconLink = () => (
  <SocialIconLink url={twitterUrl} title="@suchy on Twitter">
    <TwitterIcon className={socialIconLinkIconClassName} />
  </SocialIconLink>
);

export const LinkedinIconLink = () => (
  <SocialIconLink url={linkedinUrl} title="Mateusz Suchoń on LinkedIn">
    <LinkedinIcon className={socialIconLinkIconClassName} />
  </SocialIconLink>
);

const socialLinkIconClassName =
  "h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500";

const SocialLink = ({ children, title, url }: SocialLinkProps) => (
  <a
    href={url}
    title={title}
    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
  >
    {children}
  </a>
);

export const GithubLink = () => (
  <SocialLink url={githubUrl} title="@suchy on Github">
    <GithubIcon className={socialLinkIconClassName} />
    <span className="ml-4">Follow on Github</span>
  </SocialLink>
);

export const TwitterLink = () => (
  <SocialLink url={twitterUrl} title="@suchy on Twitter">
    <TwitterIcon className={socialLinkIconClassName} />
    <span className="ml-4">Follow on Twitter</span>
  </SocialLink>
);

export const LinkedinLink = () => (
  <SocialLink url={linkedinUrl} title="Mateusz Suchoń on LinkedIn">
    <LinkedinIcon className={socialLinkIconClassName} />
    <span className="ml-4">Follow on LinkedIn</span>
  </SocialLink>
);
