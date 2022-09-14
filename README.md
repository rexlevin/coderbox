# 说明

这是一个基于electron的跨平台的开发小工具集

# 功能/计划

- [x] 随机串/密码生成器

- [x] 中文/ASCii互转

- [x] 中文/UTF-8互转

- [x] Base64编码/解码

- [ ] AES/DES加解密

- [ ] MD5、SHA加密

# 开发

```bash
git clone

cd coderbox
npm i

# 运行
npm start
```

Bootstrap5终于不再需要jquery了:happy:

```bash
npm i -D electron
npm i vue bootstrap @popperjs/core crypto-js jsbarcode
```

# 发行版打包

```bash
# 安装electron-builder
npm i -g electron-builder

cd coderbox
# linux环境下打包
npm run build-dist:linux
# win环境下打包
npm run build-dist:win
```

# 截图

## 中文/ASCii编码

![image-20220913152703258](https://imgbd.r-xnoro.com//image-20220913152703258.png)

## 中文/UTF-8编码

![image-20220913162817293](https://imgbd.r-xnoro.com//image-20220913162817293.png)

## Base64编码/解码

![image-20220913170027407](https://imgbd.r-xnoro.com//image-20220913170027407.png)

## 随机数/密码生成器

![image-20220913152551500](https://imgbd.r-xnoro.com//image-20220913152551500.png)