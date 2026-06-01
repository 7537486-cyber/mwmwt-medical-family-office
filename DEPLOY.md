# 上线步骤

## 1. 上传到 GitHub

1. 登录 GitHub。
2. 新建仓库，建议名称：`aeteralife-medical-family-office`。
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
aeteralife.com
www.aeteralife.com
```

## 4. 新网 DNS 解析

登录新网，进入域名 `aeteralife.com` 的解析设置，添加：

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
https://aeteralife.com
https://www.aeteralife.com
https://aeteralife.com/sitemap.xml
https://aeteralife.com/robots.txt
```

## 6. 域名邮箱与联系表单配置

建议先创建域名邮箱：

```text
contact@aeteralife.com
```

网站内表单需要在 Vercel 项目里配置环境变量：

```text
RESEND_API_KEY=你的 Resend API Key
CONTACT_FROM_EMAIL=Medical Family Office <contact@aeteralife.com>
CONTACT_CC_EMAIL=内部抄送邮箱，可选
CONTACT_CRM_WEBHOOK_URL=客户表或 CRM 的 Webhook 地址，可选
LINE_NOTIFICATION_WEBHOOK_URL=LINE 推送桥接 Webhook，可选
LINE_CHANNEL_ACCESS_TOKEN=LINE Messaging API Channel Access Token，可选
LINE_TO_ID=要接收内部通知的 LINE 用户或群组 ID，可选
NEXT_PUBLIC_LINE_URL=LINE 官方账号链接，可选
NEXT_PUBLIC_WHATSAPP_URL=WhatsApp 咨询链接，可选
NEXT_PUBLIC_GA_ID=Google Analytics 衡量 ID，例如 G-XXXXXXXXXX，可选
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=Google Search Console HTML 标记中的验证码，可选
```

配置路径：

```text
Vercel -> Project -> Settings -> Environment Variables
```

保存后重新部署一次，表单才会真正发送邮件并写入 CRM Webhook。

LINE 通知最快的落地方式是先用 Make、Zapier 或其他自动化工具生成一个 Webhook URL，填入
`LINE_NOTIFICATION_WEBHOOK_URL`，再由该工具转发到 LINE 群。正式开发 LINE Messaging API 时，再使用
`LINE_CHANNEL_ACCESS_TOKEN` 与 `LINE_TO_ID`。

Google Search Console 推荐使用域名资源验证；如果先用 HTML 标记验证，将 content 值填入
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`，重新部署后再回到 Search Console 点击验证。
