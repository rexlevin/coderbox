# 说明

这是一个基于electron的跨平台的开发小工具集

# 功能/计划

- [x] 随机串/密码生成器

- [x] 中文/ASCii互转

- [x] 中文/UTF-8互转

- [x] Base64编码/解码

- [x] Hex编码解码

- [x] AES/DES/3DES加解密

- [x] RSA加解密/签名/验签

- [x] Hash计算

- [x] 文件Hash计算

- [x] 条形码生成器

- [x] 二维码生成器

- [ ] Url

  - [x] Url 参数解析

  - [x] Url 编码/解码

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
npm i vue bootstrap@5 @popperjs/core crypto-js jsbarcode qrcode jsencrypt
```

| 依赖包                        | 说明       |
| ----------------------------- | ---------- |
| bootstrap@5<br>@popperjs/core | bootstrap5 |
| bootstrap-icons               | [bootstrap图标库](https://icons.bootcss.com/) |
| crypto-js                     | 加解密     |
| jsbarcode                     | 条形码     |
| qrcode                        | 二维码     |
| jsencrypt                     | RSA加解密  |

# 发行版打包

```bash
# 安装electron-builder
npm i -g electron-builder

cd coderbox
# linux环境下打包，appimage
npm run build-dist:linux
# win环境下打包，exe安装包
npm run build-dist:win
```

# 截图

## 首页

![image-20221012162614635](https://imgbd.r-xnoro.com//image-20221012162614635.png)

## 中文/ASCii编码

![image-20220913152703258](https://imgbd.r-xnoro.com//image-20220913152703258.png)

## 中文/UTF-8编码

![image-20220913162817293](https://imgbd.r-xnoro.com//image-20220913162817293.png)

## Base64编码/解码

![image-20220913170027407](https://imgbd.r-xnoro.com//image-20220913170027407.png)

## 随机数/密码生成器

![image-20220913152551500](https://imgbd.r-xnoro.com//image-20220913152551500.png)

## 条形码

![image-20220915145849226](https://imgbd.r-xnoro.com//image-20220915145849226.png)

## 对称加密

![image-20220919170834776](https://imgbd.r-xnoro.com//image-20220919170834776.png)

## RSA非对称加解密/签名/验签

![image-20220923171508700](https://imgbd.r-xnoro.com//image-20220923171508700.png)

## Hash计算

![image-20220926121326143](https://imgbd.r-xnoro.com//image-20220926121326143.png)

## 文件Hash计算

![image-20221011161700089](https://imgbd.r-xnoro.com//image-20221011161700089.png)

## Url参数解析

![image-20221012162716784](https://imgbd.r-xnoro.com//image-20221012162716784.png)

## Url编码

![image-20221013103748269](https://imgbd.r-xnoro.com//image-20221013103748269.png)
