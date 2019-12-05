import * as path from 'path';

const webUrl =
  process.env.NODE_ENV === 'development' ? 'http://172.18.12.30:6776' : '';

export const config = {
  webUrl,
  base: path.join(__dirname, ''),
  static: path.join(__dirname, './static'),
  sessionTime: 1000 * 60 * 60 * 24, // 一天
  githubID: 'Iv1.1acd14baff8e005f',
  githubSecret: '466ceb62920fd0cc3cc9a24b190b0fdf7604671b',
};
