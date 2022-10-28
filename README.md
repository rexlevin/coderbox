# 说明

这是一个基于electron的跨平台的开发小工具集

下载地址：https://docs.r-xnoro.com/coderbox/

# 功能/计划

- [x] 随机串/密码生成器

- [x] 编码转换

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

- [x] Url工具

  - [x] Url 参数解析

  - [x] Url 编码

- [x] JSON工具

  - [x] JSON格式化

  - [x] JSON转xml

  - [x] JSON转yaml

  - [x] JSON压缩

# 开发

```bash
# gitee
git clone https://gitee.com/rexlevin/coderbox.git
# github
git clone https://github.com/rexlevin/coderbox.git

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

| 依赖包                        | 说明                                          |
| ----------------------------- | --------------------------------------------- |
| bootstrap@5<br>@popperjs/core | bootstrap5                                    |
| bootstrap-icons               | [bootstrap图标库](https://icons.bootcss.com/) |
| crypto-js                     | 加解密                                        |
| jsbarcode                     | 条形码                                        |
| qrcode                        | 二维码                                        |
| jsencrypt                     | RSA加解密                                     |
| x2js                          | xml、json互转                                 |

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

![image-20221028113933148](https://imgbd.r-xnoro.com//image-20221028113933148.png)

## 随机数/密码生成器

![image-20220913152551500](https://imgbd.r-xnoro.com//image-20220913152551500.png)

## 编码转换

![image-20221013142832647](https://imgbd.r-xnoro.com//image-20221013142832647.png)

## 条形码

![image-20220915145849226](https://imgbd.r-xnoro.com//image-20220915145849226.png)

## 二维码

![image-20221013143010336](https://imgbd.r-xnoro.com//image-20221013143010336.png)

![image-20221013143051974](https://imgbd.r-xnoro.com//image-20221013143051974.png)

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

## JSON解析

![image-20221028113905518](https://imgbd.r-xnoro.com//image-20221028113905518.png)
