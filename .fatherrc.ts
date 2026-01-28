import { defineConfig } from 'father';
// import {readFileSync} from 'node:fs'
// import {resolve} from 'node:path'

// const packageJson = JSON.parse(readFileSync(resolve(__dirname , 'package.json'), 'utf8'))

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'dist' },
  // esm: { output: 'dist/esm' },
  // cjs: { output: 'dist/cjs' },
  // umd: { output: 'dist/umd', externals: Object.keys(packageJson.peerDependencies).concat('react-dom/client') },
});
