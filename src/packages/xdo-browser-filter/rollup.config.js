import pkg from './package.json';
import cjs from 'rollup-plugin-commonjs';
import url from 'rollup-plugin-url'
import { terser } from 'rollup-plugin-terser'
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss'
function pgl() {
    return [
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
            name: 'xdo-browser-filter',
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
