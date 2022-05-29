
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: dev? "/svelte-cartoon-star" : "/svelte-cartoon-star"
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		  }),
		  vite: {
			build: {
				minify: false
			}
		}
	}
};

export default config;