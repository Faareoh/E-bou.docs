import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://e-bou.fr',
	integrations: [
		starlight({
			title: 'E-bou',
			favicon: './favicon.ico',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
			logo: {
				dark: './src/assets/logo.png',
				light: './src/assets/logo.png',
			},
			social: {
				twitter: 'https://twitter.com/EbouBot',
				discord: 'https://discord.gg/rmSsDC84AS',
				github: 'https://github.com/Faareoh/E-bou.docs',
			},
			sidebar: [
				{
					label: 'Changelog',
					autogenerate: { directory: 'changelog' },
				}
			],
			lastUpdated: true,
		}),
	],
});
