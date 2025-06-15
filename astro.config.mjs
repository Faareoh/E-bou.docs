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
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Faareoh/E-bou.docs' },
				{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/EbouBot' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/rmSsDC84AS' }
			],
			sidebar: [
				{
					label: 'Informations',
					autogenerate: { directory: 'app' },
				}
			],
		}),
	],
});
