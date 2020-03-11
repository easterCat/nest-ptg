import * as path from 'path';

const config = {
    webUrl: '',
    githubID: '',
    githubSecret: '',
    base: path.join(__dirname, ''),
    static: path.join(__dirname, './static'),
    sessionTime: 1000 * 60 * 60 * 24, // 一天
    db: {
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'ks',
    },
    STATIC_PATH: path.join('/var/ptg/static'),
};

console.log('当前环境为=> :', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    config.webUrl = 'http://127.0.0.1:6688';
    config.githubID = 'Iv1.59ce08097886630e';
    config.githubSecret = 'e0272412365d8f63e5468c78a3306e1b2fb8da33';
} else {
    config.webUrl = '';
    config.githubID = 'Iv1.1acd14baff8e005f';
    config.githubSecret = '466ceb62920fd0cc3cc9a24b190b0fdf7604671b';
    config.db.host = '111.231.138.132';
    config.db.host = 'Jp940612';
}

export default config;
