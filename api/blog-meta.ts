import { blogArticles } from "../client/src/lib/blogArticles";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default function handler(req: any, res: any) {
  const slug = typeof req.query?.slug === "string" ? req.query.slug : "";
  const article = blogArticles.find((entry) => entry.slug === slug);

  if (!article) {
    res.status(404).send("Noticia no encontrada");
    return;
  }

  const host =
    req.headers["x-forwarded-host"] ||
    req.headers.host ||
    "academia-internacional-macas.vercel.app";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const pageUrl = `${protocol}://${host}/blog/${encodeURIComponent(article.slug)}`;
  const imageUrl = `${protocol}://${host}${encodeURI(article.image)}`;
  const siteName = "Academia Internacional de Ajedrez Macas";
  const title = escapeHtml(article.title);
  const description = escapeHtml(article.excerpt);
  const safePageUrl = escapeHtml(pageUrl);
  const safeImageUrl = escapeHtml(imageUrl);
  const imageAlt = escapeHtml(article.imageAlt);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | ${siteName}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${safePageUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${safePageUrl}" />
  <meta property="og:site_name" content="${siteName}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${safeImageUrl}" />
  <meta property="og:image:secure_url" content="${safeImageUrl}" />
  <meta property="og:image:alt" content="${imageAlt}" />
  <meta property="og:locale" content="es_EC" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title} | ${siteName}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${safeImageUrl}" />
  <meta name="twitter:image:alt" content="${imageAlt}" />
</head>
<body></body>
</html>`);
}
