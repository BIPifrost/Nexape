import type { APIRoute } from "astro";

const basePath = import.meta.env.BASE_URL;
const siteRoot = new URL(basePath, import.meta.env.SITE);
const robotsTxt = `
User-agent: *
Disallow: ${basePath}_astro/

Sitemap: ${new URL("sitemap-index.xml", siteRoot).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
