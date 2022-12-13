interface ArticleAttributes {
  title: string;
  description: string;
  slug: string;
  imageFile: string;
}
export const getArticleMeta = (articleAttributes: ArticleAttributes) => {
  const { description, imageFile } = articleAttributes;

  const title = articleAttributes.title + " - Mateusz Suchoń";

  const imageUrl = "https://mateuszsuchon.com/articles-images/" + imageFile;

  return {
    title,
    description,
    "og:title": title,
    "og:description": description,
    "og:image": imageUrl,
    "twitter:card": "summary_large_image",
    "twitter:site": "@suchy",
    "twitter:creator": "@suchy",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": imageUrl,
  };
};
