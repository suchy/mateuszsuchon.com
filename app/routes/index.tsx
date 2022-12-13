import {
  Card,
  CardCta,
  CardDate,
  CardDescription,
  CardTitle,
} from "~/components/Card";
import { Container } from "~/components/Container";
import { Photos } from "~/components/Photos/Photos";
import {
  GithubIconLink,
  LinkedinIconLink,
  TwitterIconLink,
} from "~/components/SocialLink";
import { SocialMediaBox } from "~/components/SocialMediaBox";
import { formatDate } from "~/utils/formatDate";
import { getArticles } from "~/utils/getArticles";

const articles = getArticles();

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer and indie hacker wannabe.
          </h1>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Mateusz, a software developer, mentor and indie hacker based in
            Kraków. I'm focused to solve business problems with web technology.
          </p>

          <div className="mt-6 flex gap-6">
            <GithubIconLink />

            <TwitterIconLink />

            <LinkedinIconLink />
          </div>
        </div>
      </Container>

      <Photos />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map(({ title, published, description, slug }) => (
              <Card key={slug}>
                <CardTitle to={`/articles/${slug}`}>{title}</CardTitle>

                <CardDate dateTime={published} decorate>
                  {formatDate(published)}
                </CardDate>

                <CardDescription>{description}</CardDescription>

                <CardCta>Read article</CardCta>
              </Card>
            ))}
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="mb-6 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Social media
              </h2>
              <SocialMediaBox />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
