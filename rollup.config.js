import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import { external } from '@vvi/rollup-external';

export default {
  input: {
    index: './src/index.ts', // 默认：聚合导出入口
  },
  output: [
    {
      format: 'es', // ESM 模式
      entryFileNames: '[name].js', // 打包文件名
      preserveModules: true, // 保留独立模块结构（关键）
      preserveModulesRoot: 'src', // 保持 src 目录结构
      sourcemap: false, // 正式环境：关闭 source map
      exports: 'named', // 导出模式
      dir: 'dist/es/',
    },
    {
      format: 'cjs',
      entryFileNames: '[name].js',
      preserveModules: true,
      preserveModulesRoot: 'src', // 保持 src 目录结构
      sourcemap: false,
      exports: 'named',
      dir: 'dist/cjs',
    },
  ],
  // 配置需要排除的包
  external: external(),
  plugins: [
    resolve(),
    commonjs(),
    // 可打包 json 内容
    json(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    // 打包压缩，自动去注释
    // terser(),
    // 去除无用代码
    // cleanup(),
    copy({
      targets: [
        { src: ['README.md', 'LICENSE', 'CHANGELOG.md'], dest: 'dist' },
      ],
    }),
  ],
};
