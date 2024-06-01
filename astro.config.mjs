import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://e-bou.fr',
	integrations: [
		starlight({
			title: 'E-bou',
			favicon: './src/assets/E-bou.V2.png',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
			logo: {
				dark: './src/assets/E-bou.V2.png',
				light: './src/assets/E-bou.V2.png',
			},
			social: {
				twitter: 'https://twitter.com/EbouBot',
				discord: 'https://discord.gg/rmSsDC84AS',
				github: 'https://github.com/E-bou',
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
