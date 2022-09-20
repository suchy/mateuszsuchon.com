import type { MetaFunction } from "@remix-run/cloudflare";

import { ArticleLayout } from "~/components/ArticleLayout";
import DependencyInjectionInTypescriptContent, {
  attributes,
} from "../../content/articles/dependency-injection-in-typescript.mdx";

export const meta: MetaFunction = () => ({
  title: attributes.title + " - Mateusz Suchoń",
  description: attributes.description,
});

export default function DependencyInjectionInTypescriptArticle() {
  return (
    <ArticleLayout title={attributes.title} published={attributes.date}>
      <DependencyInjectionInTypescriptContent />
    </ArticleLayout>
  );
}
