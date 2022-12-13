import type { MetaFunction } from "@remix-run/cloudflare";
import { Container } from "~/components/Container";
import { formatDate } from "~/utils/formatDate";
import {
  Card,
  CardCta,
  CardDate,
  CardDescription,
  CardTitle,
} from "~/components/Card";
import { getArticles } from "~/utils/getArticles";

const articles = getArticles();

export const meta: MetaFunction = () => ({
  title: "Articles - Mateusz Suchoń",
  description:
    "Writing on software development, reading notes and team management. All of my thoughts on software development, current learning subjects, product design process and more.",
});

export default function ArticlesIndex() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Writing on software development, reading notes and team management.
        </h1>

        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          All of my thoughts on software development, current learning subjects,
          product design process and more.
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map(({ title, published, description, slug }) => (
              <article
                className="md:grid md:grid-cols-4 md:items-baseline"
                key={slug}
              >
                <Card className="md:col-span-3">
                  <CardTitle to={`/articles/${slug}`}>{title}</CardTitle>

                  <CardDate dateTime={published} className="md:hidden" decorate>
                    {formatDate(published)}
                  </CardDate>

                  <CardDescription>{description}</CardDescription>

                  <CardCta>Read article</CardCta>
                </Card>

                <CardDate dateTime={published} className="mt-1 hidden md:block">
                  {formatDate(published)}
                </CardDate>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
