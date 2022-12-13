import {
  attributes as dependencyInjectionInTypescriptAttributes,
  filename as dependencyInjectionInTypescriptFilename,
} from "../content/articles/dependency-injection-in-typescript/dependency-injection-in-typescript.mdx";

export const getArticles = () => [
  {
    title: dependencyInjectionInTypescriptAttributes.title,
    description: dependencyInjectionInTypescriptAttributes.description,
    published: dependencyInjectionInTypescriptAttributes.date,
    slug: dependencyInjectionInTypescriptFilename.replace(".mdx", ""),
    imageFile: dependencyInjectionInTypescriptAttributes.imageFile,
  },
];
