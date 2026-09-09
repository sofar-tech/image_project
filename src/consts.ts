export const SITE_TITLE = '我的博客';
export const SITE_DESCRIPTION = '记录生活与想法的个人站点';

/** 拼接 GitHub Pages 的 base 路径，避免 /image_project + blog 变成 /image_projectblog */
export function withBase(path = '') {
	const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
	return `${base}${path.replace(/^\//, '')}`;
}
