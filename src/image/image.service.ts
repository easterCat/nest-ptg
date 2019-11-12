import { Injectable } from '@nestjs/common';
import { createCanvas } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';

const STATIC_PATH = path.join(__dirname, `../../static`);

@Injectable()
export class ImageService {
  async createImage(
    params: { wh: string; color: string; textcolor: string },
    query: { text: string },
  ) {
    const { wh, color, textcolor } = params;
    const { text } = query;
    const w = Number(wh.split('*')[0]);
    const h = Number(wh.split('*')[1]);
    const canvas = createCanvas(w, h);
    const context = canvas.getContext('2d');
    context.font = '16px "Microsoft YaHei"'; // 统一使用微软雅黑字体
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillStyle = '#' + color;
    context.fillRect(0, 0, w, h);
    context.fillStyle = '#' + textcolor;
    context.fillText(text || '不要太懒哦!', w / 2, h / 2);

    const data = canvas.toDataURL('image/png');
    const base64Img = data.replace(/^data:image\/\w+;base64,/, '');
    const bufferImg = Buffer.from(base64Img, 'base64');
    await write(path.join(STATIC_PATH, '/index.png'), bufferImg);
    return data;
  }
}

function write(filepath: string, bufferImg: any) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, bufferImg, error => {
      if (error) {
        reject(error);
      }
      resolve('success');
    });
  });
}
