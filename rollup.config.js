import alias from '@rollup/plugin-alias'
import ts from 'rollup-plugin-ts'

import tsconfig from './tsconfig.json'

const src = 'src'
const dest = 'dist'

export default {
  input: `${src}/index.ts`,
  output: {
    dir: dest,
    format: 'iife',
    entryFileNames: '[name].[hash].js',
    assetFileNames: '[name].[hash][extname]',
  },
  plugins: [
    alias({
      resolve: ['.ts', '.vert', '.frag', '.glsl'],
      entries: Object.entries(
        tsconfig.compilerOptions.paths
      ).map(([find, [replacement]]) => ({ find, replacement })),
    }),
    ts(),
  ],
}
