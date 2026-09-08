// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 项目站地址形如：https://<用户名>.github.io/image_project/
export default defineConfig({
	site: 'https://sofar-tech.github.io',
	base: '/image_project',
	integrations: [mdx(), sitemap()],
});
