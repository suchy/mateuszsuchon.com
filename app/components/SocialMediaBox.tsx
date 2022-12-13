import { TwitterLink, LinkedinLink, GithubLink } from "~/components/SocialLink";

interface SocialMediaBoxProps {
  className?: string;
}

export const SocialMediaBox = ({ className = "" }: SocialMediaBoxProps) => (
  <ul className={className}>
    <li className="flex">
      <TwitterLink />
    </li>

    <li className="mt-4 flex">
      <GithubLink />
    </li>

    <li className="mt-4 flex">
      <LinkedinLink />
    </li>
  </ul>
);
