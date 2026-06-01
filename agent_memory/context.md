# 项目上下文

## 项目定位

日本医疗官网：面向中国高净值企业家与家庭的日本 Medical Family Office 与 Longevity Concierge 平台。

正式域名：`https://aeteralife.com`

默认公开联系邮箱：`contact@aeteralife.com`

## 当前技术栈

- Next.js App Router
- Tailwind CSS
- TypeScript
- 结构化内容数据集中放在 `lib/site.ts` 与 `lib/databases.ts`

## 设计方向

- 奢华、克制、私行/家族办公室/高端咨询感
- 避免医院式视觉
- 双语中文与日文内容

## 约束

- 默认中文沟通
- 最小改动，优先复用项目内模式
- 运行时代码变更需做匹配验证
- 医疗与医生数据库内容保持合规边界：可写资源分类、专家画像、尽调字段和匹配流程，不虚构真实医生姓名或疗效承诺
- 全球抗衰、长寿医学与高端健康管理内容必须采用权威来源优先、证据等级分层、合规边界明确的编辑标准；目标是成为行业定义者，而不是追逐夸张抗衰营销话术。
