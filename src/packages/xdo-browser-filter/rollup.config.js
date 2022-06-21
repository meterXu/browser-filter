import pkg from './package.json';
import cjs from 'rollup-plugin-commonjs';
import url from 'rollup-plugin-url'
import { terser } from 'rollup-plugin-terser'
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
function pgl() {
    return [
        babel({
            exclude: "node_modules/**"
        }),
        livereload(),
        serve({
            open: true, // 自动打开页面
            port: 8000,
            openPage: '/public/index.html', // 打开的页面
            contentBase: ''
        }),
        cjs(),
        url({
            include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.woff', '**/*.woff2'],
            limit: Infinity,
            publicPath: '/assets',
        }),
        postcss({
            plugins: [
                cssnano(),
            ],
            extensions: [ '.css' ],
        }),
        terser()
    ];
}

export default [
    {
        input: './index.js',
        output: {
            name: 'xdoBrowserFilter',
            file: `dist/xdo-brower-filter.umd.js`,
            format: 'umd'
        },
        plugins: pgl()
    },
    {
        input: './index.js',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins: pgl()
    }
];
