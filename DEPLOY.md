# 上线步骤

## 1. 上传到 GitHub

1. 登录 GitHub。
2. 新建仓库，建议名称：`mwmwt-medical-family-office`。
3. 将本项目上传到该仓库。

## 2. 在 Vercel 部署

1. 打开 `https://vercel.com`。
2. 使用 GitHub 登录。
3. 点击 `Add New...`，选择 `Project`。
4. 选择刚才的 GitHub 仓库。
5. Framework Preset 选择 `Next.js`。
6. 点击 `Deploy`。

## 3. 绑定域名

在 Vercel 项目中进入：

```text
Settings -> Domains
```

添加：

```text
mwmwt.com
www.mwmwt.com
```

## 4. 新网 DNS 解析

登录新网，进入域名 `mwmwt.com` 的解析设置，添加：

```text
记录类型：A
主机记录：@
记录值：76.76.21.21
线路：默认
TTL：默认
```

```text
记录类型：CNAME
主机记录：www
记录值：cname.vercel-dns.com
线路：默认
TTL：默认
```

如果已经有 `@` 或 `www` 的旧解析记录，需要先删除或改成上面的值。

## 5. 验证

等待解析生效后访问：

```text
https://mwmwt.com
https://www.mwmwt.com
https://mwmwt.com/sitemap.xml
https://mwmwt.com/robots.txt
```
