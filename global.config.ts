import * as path from 'path';

export const config = {
  base: path.join(__dirname, ''),
  static: path.join(__dirname, './static'),
  sessionTime: 1000 * 60 * 60 * 24, // 一天
};
