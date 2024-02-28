import { defineConfig } from 'astro/config';
import graphql from '@rollup/plugin-graphql';

export default defineConfig({
  vite: {
    plugins: [graphql()],
  }
});
