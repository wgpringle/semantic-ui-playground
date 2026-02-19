

module.exports = function override(config, env) {
    // Add the LESS loader
    config.module.rules.push({
        test: /\.less$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1DA57A', // example customization
                            // ...other variables
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        ],
    });

    return config;
};
