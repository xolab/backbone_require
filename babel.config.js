module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: '3.12.1'
            }
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic'
            }
        ]
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods'
    ]
};