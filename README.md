# 说明

这是一个基于electron的跨平台的开发小工具集

# 功能/计划

- [x] 随即串/密码生成器

- [ ] navtive和ascii互转

- [ ] native和utf-8互转

- [ ] AES/DES加解密

- [ ] MD5、SHA加密

- [ ] base64编码/解码

# 开发

```bash
git clone

cd coderbox
npm i

# 安装electron-builder
npm i -g electron-builder
# linux环境下打包
npm run build-dist:linux
# win环境下打包
npm run build-dist:win
```

Bootstrap5终于不再需要jquery了，可以和Vue一起用：

```bash
npm i -D electron webpack webpack-cli css-loader style-loader html-webpack-plugin
npm i vue vue-router bootstrap @popperjs/core
```

# 截图