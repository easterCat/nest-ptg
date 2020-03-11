import { Injectable } from '@nestjs/common';
import { createCanvas } from 'canvas';
import { createWriteStream, readFileSync, writeFile } from 'fs';
import config from '../../global.config';
import { ensureDirSync, ensureFileSync } from 'fs-extra';
import * as path from 'path';

@Injectable()
export class ImageService {
    /**
     * 创建占位图
     * @param params
     * @param query
     */
    public async createPlaceImage(params: { wh: string; color: string; textcolor: string }, query: { text: string }) {
        const { wh, color, textcolor } = params;
        const { text } = query;
        const w = Number(wh.split('*')[0]);
        const h = Number(wh.split('*')[1]);
        const canvas = createCanvas(w, h);
        const context = canvas.getContext('2d');
        context.font = '36px "Microsoft YaHei"'; // 统一使用微软雅黑字体
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        context.fillStyle = '#' + color;
        context.fillRect(0, 0, w, h);
        context.fillStyle = '#' + textcolor;
        context.fillText(text || '不要太懒哦!', w / 2, h / 2);

        const data = canvas.toDataURL('image/png');
        const base64Img = data.replace(/^data:image\/\w+;base64,/, '');
        const bufferImg = Buffer.from(base64Img, 'base64');
        const savePath = path.join(config.STATIC_PATH, '/placehold.png');
        await this.write(savePath, bufferImg);
        readFileSync(savePath, {
            encoding: 'binary',
        });
        return savePath;
    }

    /**
     * 上传图片的方法
     * @param image
     */
    public async uplodaImage(image: any) {
        const DIR_PATH = path.join(config.static, './upload/images');
        const FILE_PATH = path.join(DIR_PATH, `${image.originalname}`);
        ensureDirSync(DIR_PATH);
        ensureFileSync(FILE_PATH);
        const writeImage = createWriteStream(FILE_PATH);
        writeImage.write(image.buffer);
        return `/static/upload/images/${image.originalname}`;
    }

    public write(filepath: string, bufferImg: any) {
        return new Promise((resolve, reject) => {
            writeFile(filepath, bufferImg, (error) => {
                if (error) {
                    reject(error);
                }
                resolve('success');
            });
        });
    }
}
