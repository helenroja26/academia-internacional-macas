export default function handler(req: any, res: any) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "chesskacademy.com";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const pageUrl = `${protocol}://${host}/blog/mundial-sub20-caracas-christopher-garzon-alexa-oblitas`;
  const imageUrl = `${protocol}://${host}/garzon%20mundialronda5.jpg`;
  const title = "Christopher Garzón entre los diez mejores del Mundial Sub-20";
  const description = "Tras cinco rondas en Caracas, Christopher suma dos victorias y tres empates y hoy se mide frente a la India con piezas blancas.";

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Academia Internacional Macas</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${pageUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:site_name" content="Academia Internacional Macas" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:secure_url" content="${imageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Christopher Garzón disputando la quinta ronda del Mundial Sub-20" />
  <meta property="og:locale" content="es_EC" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${imageUrl}" />
  <script>window.location.replace("/blog/mundial-sub20-caracas-christopher-garzon-alexa-oblitas");</script>
  <noscript><meta http-equiv="refresh" content="0;url=/blog/mundial-sub20-caracas-christopher-garzon-alexa-oblitas" /></noscript>
</head>
<body></body>
</html>`);
}
