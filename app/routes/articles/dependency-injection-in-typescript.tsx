import type { MetaFunction } from "@remix-run/cloudflare";

import { ArticleLayout } from "~/components/ArticleLayout";
import { getArticleMeta } from "~/utils/getArticleMeta";
import DependencyInjectionInTypescriptContent, {
  attributes,
} from "../../content/articles/dependency-injection-in-typescript/dependency-injection-in-typescript.mdx";

export const meta: MetaFunction = () => getArticleMeta(attributes);

export default function DependencyInjectionInTypescriptArticle() {
  console.log(attributes);
  return (
    <ArticleLayout title={attributes.title} published={attributes.date}>
      <DependencyInjectionInTypescriptContent />

      {attributes.twitterUrl && (
        <p>
          <a href={attributes.twitterUrl} title="Discuss on Twitter">
            Discuss on Twitter
          </a>
        </p>
      )}
    </ArticleLayout>
  );
}
