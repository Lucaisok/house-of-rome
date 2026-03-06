module.exports = {
    apps: [{
        name: 'houseofrome',
        script: '/var/www/houseofrome/node_modules/.bin/next',
        args: 'start --port 3010',
        cwd: '/var/www/houseofrome',
        interpreter: '/home/luca/.nvm/versions/node/v20.20.1/bin/node',
        env: {
            NODE_ENV: 'production',
            NEXT_PUBLIC_SITE_URL: 'https://houseofrome.org',
            NEXT_PUBLIC_FORMSPREE_ENDPOINT: 'https://formspree.io/f/mgoljokq',
            PATH: '/home/luca/.nvm/versions/node/v20.20.1/bin:' + process.env.PATH
        }
    }]
};
