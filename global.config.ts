import * as path from 'path';

let webUrl: string;
let githubID: string;
let githubSecret: string;

if (process.env.NODE_ENV === 'development') {
  webUrl = 'http://172.18.234.34:6688';
  githubID = 'Iv1.59ce08097886630e';
  githubSecret = 'e0272412365d8f63e5468c78a3306e1b2fb8da33';
} else {
  webUrl = '';
  githubID = 'Iv1.1acd14baff8e005f';
  githubSecret = '466ceb62920fd0cc3cc9a24b190b0fdf7604671b';
}

const config = {
  webUrl,
  githubID,
  githubSecret,
  base: path.join(__dirname, ''),
  static: path.join(__dirname, './static'),
  sessionTime: 1000 * 60 * 60 * 24, // 一天
};

export default config;
