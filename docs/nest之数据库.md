## 数据库

Nest 与数据库无关，允许您轻松地与任何 SQL 或 NoSQL 数据库集成。根据您的偏好，您有许多可用的选项。一般来说，将 Nest 连接到数据库只需为数据库加载一个适当的 Node.js 驱动程序，就像使用 Express 或 Fastify 一样。

您还可以直接使用任何通用的 Node.js 数据库集成库或 ORM ，以在更高的抽象级别上进行操作。

- Sequelize (recipe)
- knexjs (tutorial
- TypeORM

Nest 还提供了与现成的 TypeORM 与 @nestjs/typeorm 的紧密集成。这些集成提供了附加的特定于 nestjs 的特性，比如模型/存储库注入、可测试性和异步配置，从而使访问您选择的数据库更加容易

## TypeORM 集成

为了与 SQL 和 NoSQL 数据库集成，Nest 提供了 @nestjs/typeorm 包。Nest 使用 TypeORM 是因为它是 TypeScript 中最成熟的对象关系映射器( ORM )。因为它是用 TypeScript 编写的，所以可以很好地与 Nest 框架集成。

为了开始使用它，我们首先安装所需的依赖项。在本章中，我们将演示如何使用流行的 Mysql ， TypeORM 提供了对许多关系数据库的支持，比如 PostgreSQL 、Oracle、Microsoft SQL Server、SQLite，甚至像 MongoDB 这样的 NoSQL 数据库。我们在本章中介绍的过程对于 TypeORM 支持的任何数据库都是相同的。您只需为所选数据库安装相关的客户端 API 库。

```
npm install --save @nestjs/typeorm typeorm mysql
```

安装过程完成后，我们可以将 TypeOrmModule 导入 AppModule

#### 方法一

app.module.ts

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

forRoot() 方法接受与来自 TypeORM 包的 createConnection() 相同的配置对象

#### 方法二

app.module.ts

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
})
export class AppModule {}
```

创建 ormconfig.json,可以将 forRoot()配置抽离出来,不传入没有任何选项调用 forRoot()

```
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "root",
  "database": "test",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}
```

一旦完成，TypeORM 连接和 EntityManager 对象就可以在整个项目中注入(不需要导入任何模块)

app.module.ts

```
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
```

## 存储库模式

TypeORM 支持存储库设计模式，因此每个实体都有自己的存储库。可以从数据库连接获得这些存储库。该 image 实体属于该 image 目录。这个目录代表了 ImageModule。这是你决定在哪里保留你的模型文件.最好的方法是将它们放在他们的域中, 放在相应的模块目录中。

./src/image/entity/image.entity.ts

```
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 50 })
  public name: string;

  @Column({ length: 300 })
  public path: string;

  @Column({ length: 50 })
  public createdBy: string;

  @Column('int')
  public createAt: number;
}
```

开始使用 image 实体，我们需要让 TypeORM 知道它插入实体数组:

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './image/entity/image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Image],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

同时修改 image.module.ts

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoService } from './Image.service';
import { PhotoController } from './Image.controller';
import { Image } from './Image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}

```

此模块使用 forFeature() 方法定义在当前范围中注册哪些存储库。这样，我们就可以使用 @InjectRepository()装饰器将 PhotoRepository 注入到 PhotoService 中:

之后再 service 中进行使用

image.service.ts

```
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}

```

> 不要忘记将 PhotoModule 导入根 ApplicationModule。

#### 配置自动加载 entity

./ormconfig.json

```
{
  "type": "mysql",
  "host": "127.0.0.1",
  "port": 3306,
  "username": "xxxxx",
  "password": "xxxxx",
  "database": "ks",
  "entities": ["src/**/*.entity{.ts,.js}"],
  "synchronize": true
}
```
