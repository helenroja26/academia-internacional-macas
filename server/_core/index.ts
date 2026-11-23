import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.get("/sitemap.xml", (req, res) => {
    const host = req.get("host");
    const baseUrl = `${req.protocol}://${host}`;
    const now = new Date().toISOString();

    const urls = ["/"];
    const urlEntries = urls
      .map(
        (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
      )
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.status(200).send(sitemap);
  });

  // Configure body parser with larger size limit for file uploads
  app.get("/blog/mundial-sub20-caracas-christopher-garzon-alexa-oblitas", (req, res, next) => {
    if (!req.headers["user-agent"]?.match(/facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|Slackbot|Discordbot|Googlebot|bingbot/i)) {
      return next();
    }

    const host = req.get("host") || "localhost:3000";
    const protocol = req.protocol;
    const pageUrl = `${protocol}://${host}/blog/mundial-sub20-caracas-christopher-garzon-alexa-oblitas`;
    const imageUrl = `${protocol}://${host}/garzon%20mundialronda5.jpg`;
    const title = "Christopher Garzón entre los diez mejores del Mundial Sub-20";
    const description = "Tras cinco rondas en Caracas, Christopher suma dos victorias y tres empates y hoy se mide frente a la India con piezas blancas.";

    res.status(200).type("html").send(`<!doctype html><html lang="es"><head><meta charset="UTF-8" /><title>${title} | Academia Internacional Macas</title><meta name="description" content="${description}" /><link rel="canonical" href="${pageUrl}" /><meta property="og:type" content="article" /><meta property="og:url" content="${pageUrl}" /><meta property="og:site_name" content="Academia Internacional Macas" /><meta property="og:title" content="${title}" /><meta property="og:description" content="${description}" /><meta property="og:image" content="${imageUrl}" /><meta property="og:image:secure_url" content="${imageUrl}" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Christopher Garzón disputando la quinta ronda del Mundial Sub-20" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${title}" /><meta name="twitter:description" content="${description}" /><meta name="twitter:image" content="${imageUrl}" /></head><body></body></html>`);
  });

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  registerStorageProxy(app);
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
