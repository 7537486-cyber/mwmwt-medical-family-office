# 当前任务进度

## 目标

优化首页信息架构，使其更接近亚洲领先的高净值健康与长寿管理平台，同时保留冻卵咨询和联系表单可用发送路径。

当前追加目标：将医疗官网与误覆盖进来的钢结构网站彻底分开；医疗官网继续补齐联系表单系统、首页首屏价值主张、会员体系、合规声明和服务流程页面。

当前最新调整：在现有询盘闭环基础上补齐增长基础设施入口：LINE/CRM 配置说明已更新，自动回复已完成；新增 Google Analytics 与 Google Search Console 环境变量入口；知识库新增 5 个 SEO 文章页，并与现有长寿医学文章共同组成首批 6 个 SEO 主题。

## 成功标准

- 首页 9 个服务卡片在桌面端呈现 3+3+3
- 服务卡片不再复用同一张图片
- 新增富士山健康长寿、家庭健康规划、生育力保存等更有人气的图片
- 新增“冻卵与生育力保存咨询”页面，并避免把代孕写成可安排服务
- 联系表单点击后不打开本地邮件客户端，改由服务器端发送
- 首页第一屏不出现具体项目，改为 Medical Family Office 总定位
- 首页按六屏结构呈现：定位、What We Do、Why Clients Choose Us、Knowledge Center、Medical Advisory Board、Membership
- 首页体现“四大核心板块”：Longevity Medicine、Regenerative Medicine、Executive Health、Global Medical Access
- 首页体现“1000+专业文章 / 10大知识中心 / 100位医生数据库 / 案例中心 / 媒体中心 / 研究中心”平台目标
- 执行生产构建验证

## 状态

- 已生成并保存 5 张新图片到 `public/`
- 已将首页服务卡桌面布局调整为 3 列，9 个卡片为三行
- 已将首页服务项调整为：服务、再生医疗、长寿规划、医疗礼宾、日本医院网络、医生网络、资源数据库、冻卵咨询、家庭健康计划
- 已新增 `/fertility-preservation` 页面及中日英内容
- 已更新图片映射，首页可见服务卡片不再重复图片
- 已新增 `ContactForm`，表单提交会打开发往 `7537486@qq.com` 的邮件草稿
- 已重构首页为六屏结构，强调风险管理、长期健康决策权、跨境医疗资源整合和会员体系
- Knowledge Center 已调整为 10 大知识中心，并标注文章目标数量
- Medical Advisory Board 已接入现有医生资料中的前 4 位专家卡片
- 已新增通用顶层栏目路由 `/[slug]`，用于承接 Medical Family Office、Executive Health、Global Medical Access、Knowledge Center、Membership 等新增导航入口
- 顶部导航已调整为更接近平台结构：About Us、Medical Family Office、Longevity Medicine、Regenerative Medicine、Executive Health、Global Medical Access、Doctor Network、Knowledge Center、Membership、Contact
- 已在首页新增 Medical Governance Framework，包含严格监管、医生培训体系、医疗质量控制和长期随访机制
- 已新增 McKinsey + Private Bank + Medical Concierge 的核心价值屏，覆盖 Resource Access、Medical Navigation、Privacy、Time Efficiency、Risk Control
- 已新增 Global Medical Network 屏，展示日本、新加坡、瑞士、美国资源网络布局
- 已将会员体系改为 Founder Membership、Executive Membership、Family Membership、Legacy Membership，并强调长期健康伙伴关系
- 已新增 `/medical-governance-framework` 承接页面，并将研究中心、案例中心、媒体中心等平台页面加入 sitemap
- 已新增正式 `/knowledge-center` 知识库首页，加入 Regenerative Medicine、Cellular Science、Longevity Science、Healthy Aging 四大核心研究方向
- 已新增 `/knowledge-center/longevity-medicine` 长寿医学长文页面，覆盖健康寿命、传统医学对比、衰老机制、生物年龄检测、检测技术和 Medical Family Office 理念
- 已将长寿医学文章加入 sitemap，便于后续 SEO 收录
- 已移除首页 Knowledge Center 区域中的内部运营话术，不再展示“1000+文章”“10大知识中心”“SEO内容资产”，改为客户可理解的 Medical intelligence 与长期健康决策表达
- 已清理多语言混用问题：中文导航改为中文，联系表单中文字段移除日文混写，通用页面小标题、联系页栏目、医生档案返回与资料标签按中日英分别显示
- 已为知识库首页增加中日英显示逻辑，避免日文/英文访问时仍出现大段中文
- 已将医生网络定位调整为专业履历页与医疗资源介绍页，不再呈现为销售页
- 已在医生网络页新增专业定位、医生分类规划与合规说明，强调持续建立跨领域医生网络，而不是宣称“已有100位顶级医生”
- 已重构医生详情页模板，新增医生基本信息、专业定位、学历/资格/研究/论文/临床经验、适合客户、医疗家族办公室如何协助与合规免责声明
- 已新增 `/doctors` 与 `/doctors/[slug]` URL 结构，并将 sitemap 医生详情链接改为 `/doctors/...`
- 已将导航进入的页面首屏升级为超宽屏主题大图：通用页面、联系页、医生网络页、知识中心页、长寿医学文章页和医生详情页均使用对应主题图片作为首屏视觉
- 已移除这些页面中原先首屏下方重复出现的图片区块，让页面开场更像高端咨询/家族办公室网站，而不是文字页
- 已将“买的不是治疗，而是时间”“不承诺永生，帮助更长时间保持健康”“财富管理资产，Medical Family Office 管理人生”的核心思考加入首页，并用中日英三语分别表达
- 已在首页新增 Healthspan Philosophy 区域，强调延缓功能衰退、降低重大疾病风险、健康寿命和长期健康决策权，避免“永远年轻、逆转衰老、延长寿命”等高风险表述
- 已新增 8 张超宽屏高质感首屏图，分别用于关于、医疗家族办公室、企业家健康、全球医疗资源、医生网络、知识中心、会员体系和私密联系场景
- 已调整导航页面首屏图映射，确保首页、关于、医疗家族办公室、长寿医学、再生医疗、企业家健康、全球医疗资源、医生网络、知识中心、会员体系和联系页使用不同主题图片
- 已新增包机、阿尔法商务车接送、一对一医疗陪同 3 张高端服务场景图，并接入医疗礼宾页与私人航空礼宾页
- 已更新医疗礼宾页中日英文案，明确包含包机协调、高端商务车接送与一对一现场陪同，同时保持隐私、动线和医疗资料管理的高净值服务定位
- 已清理用户截图中出现的内部沟通话术：移除“麦肯锡 + 私人银行 + 医疗礼宾”“卖项目”“平台资产”“网站不应像…”等内部定位表达，改为正式客户可见文案
- 已全站检索并清理“获客、复购、SEO、高权重、销售页、正式版后续可接入”等不应公开展示的运营/内部表达
- 已将首页核心板块、价值板块、全球网络、平台架构、会员体系、知识中心、医生网络与医生详情页改为按中日英三种语言分别输出
- 已修正日文页面中大量英文小标题、英文/日文页面露出中文医生种子资料的问题，医生详情页在日文/英文下改为对应语言的专业资源介绍
- 已将知识中心长寿医学文章改为中文完整长文，日文/英文访问时显示对应语言的精简专业文章，避免语言混杂
- 已调整通用首屏图片移动端展示：手机端先显示完整比例图片，桌面端仍保留大图沉浸式背景，降低手机端裁切看不全的问题
- 当前修复已本地提交；GitHub 推送和 Vercel CLI 生产部署因本机认证不可用暂时未完成
- 已将当前误混入的钢结构网站另存到 `/Users/yumi/Documents/MWM钢结构官网`，并用 `git archive HEAD` 将医疗官网目录恢复为医疗项目内容，两个网站后续作为独立项目处理
- 已在 `.gitignore` 忽略 `public/mwm-*.jpg`，避免钢结构图片被误提交到医疗官网
- 已新增 `/privacy-policy`、`/medical-disclaimer`、`/terms-of-service`、`/compliance` 四个法律与合规页面，并在页脚加入入口
- 已将结构化数据从 `MedicalBusiness` 调整为 `ProfessionalService`，避免网站被误解为直接医疗机构
- 已将联系表单从 `mailto` 草稿改为站内提交：`/api/contact` 发送到域名邮箱配置，并支持可选 CRM Webhook 写入
- 已新增 `/thank-you` 感谢页，提示邮箱、LINE 与 WhatsApp 后续咨询入口
- 已将公开联系邮箱统一改为 `vip@mwmwt.com`，表单默认发送目标为 `concierge@mwmwt.com`，内部抄送改为环境变量配置
- 已强化首页首屏为 “Medical Family Office”，明确长期医疗资源管理、长寿规划与日本高端医疗通道
- 已完善首页会员体系卡片，加入结果、核心权益、申请门槛、费用说明与服务边界
- 已新增 `/service-process` 服务流程页面，并加入导航，展示从 15 分钟初步沟通到长期随访的完整路径
- 已更新 `DEPLOY.md`，补充域名邮箱、Resend、CRM Webhook、LINE 与 WhatsApp 环境变量配置说明
- 已将联系表单主联系方式改为“电话 / WhatsApp / LINE”必填，微信 / 备用联系方式和邮箱改为可选
- 已将表单后台默认收件改为 `info@mwmwt.com`，公开页面不再依赖客户发邮件
- 已在表单 API 中增加 LINE 内部通知能力：可通过 `LINE_NOTIFICATION_WEBHOOK_URL` 接 Make/Zapier/LINE 桥接，也可通过 `LINE_CHANNEL_ACCESS_TOKEN` + `LINE_TO_ID` 直接调用 LINE Messaging API
- 已将 CRM Payload 拆分为 `phone`、`messenger`、`email` 字段，便于后续写入客户表或 CRM
- 已将联系表单发送接口固定发送到 `info@mwmwt.com`，不再依赖 `CONTACT_TO_EMAIL`
- 已移除感谢页残留的邮件链接，公开代码中不再存在 `mailto:`，避免点击后打开 Apple Mail
- 已将感谢页标题三语统一为 “Thank you. Your inquiry has been submitted.”
- 已将表单当前页面 URL 作为 `sourcePage` 传给后端，内部询盘邮件、CRM Payload 与 LINE 通知均包含来源页面
- 已将默认发件人显示改为 `Medical Family Office <info@mwmwt.com>`
- 已新增客户自动回复邮件：客户填写有效邮箱时，按中日英语言发送 24 小时内联系的确认邮件，并提示不要通过公开邮件直接发送完整病历或敏感资料
- 已新增 `components/Analytics.tsx`，通过 `NEXT_PUBLIC_GA_ID` 加载 Google Analytics，不配置时不输出脚本
- 已在根布局加入 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`，用于 Google Search Console HTML 标记验证
- 已新增 `lib/knowledge.ts` 与 `/knowledge-center/[slug]` 动态文章页，首批新增 5 个知识库 SEO 文章：日本精密体检、干细胞合法性、外泌体、日本医疗体系、企业家健康管理
- 已将知识库首页的精选文章区扩展为 6 篇文章入口，并将新知识库文章加入 sitemap
- 已更新 `DEPLOY.md`，补充 LINE Webhook、GA、Search Console 的环境变量与落地说明

## 验证记录

- 已执行 `npm run build`，Next.js 生产构建通过，生成 23 个路由
- 已再次执行 `npm run build`，Next.js 生产构建通过，确认治理体系、会员体系和 sitemap 改动未破坏构建
- 已执行 `npm run build`，Next.js 生产构建通过，确认知识库首页与长寿医学文章静态路由生成正常，共 25 个路由
- 已执行 `npm run build`，Next.js 生产构建通过，确认首页知识库文案精简后仍正常生成 25 个路由
- 已执行 `npm run build`，Next.js 生产构建通过，确认多语言文案清理后仍正常生成 25 个路由
- 已执行 `npm run build`，Next.js 生产构建通过，确认 `/doctors` 路由与医生履历模板正常生成，共 32 个路由
- 已执行 `npm run build`，Next.js 生产构建通过，确认导航页面首屏大图改造后共 32 个路由正常生成
- 已尝试启动本地预览，但当前环境阻止绑定 `0.0.0.0:3000`，因此本轮以生产构建结果作为验证依据
- 已执行 `npm run build`，Next.js 生产构建通过，确认首页 Healthspan 价值观文案加入后共 32 个路由正常生成
- 已执行 `npm run build`，Next.js 生产构建通过，确认不重复首屏图与新增图片资产接入后共 32 个路由正常生成
- 已执行 `npm run build`，Next.js 生产构建通过，确认包机、商务车接送、一对一陪同图片与页面接入后共 32 个路由正常生成
- 已执行全站敏感内部词检索，确认公开代码中不再出现“麦肯锡、卖项目、网站不应、医美诊所、干细胞中介、获客、复购、SEO、高权重、1000+、100位、销售页、正式版后续可”等公开不适合词
- 已执行 `npm run build`，Next.js 生产构建通过，确认内部话术清理、多语言修正和移动端图片展示调整后共 32 个路由正常生成
- 已执行 `npm run build`，Next.js 生产构建通过，确认表单 API、感谢页、合规页面、会员体系与服务流程页面正常生成，共 38 个路由
- 已执行公开文案检索，确认未检出 QQ/iCloud 邮箱、钢结构网站残留、SEO/线索/获客/内部沟通等不适合公开展示词
- 已执行 `npm run build`，Next.js 生产构建通过，确认电话优先表单、`info@mwmwt.com` 默认配置与 LINE 通知代码未破坏构建，共 38 个路由
- 已执行邮箱残留检索，确认公开代码中不再出现 QQ/iCloud/vip/concierge 等旧联系邮箱
- 已执行 `rg` 检索，确认 `app`、`components`、`lib`、`DEPLOY.md` 中不再出现 `mailto:`、`window.location`、`location.href`、`CONTACT_TO_EMAIL`、旧邮箱等残留
- 已执行 `npm run build`，Next.js 生产构建通过，确认 Resend 服务端发送、感谢页文案和部署说明更新后仍正常生成 38 个路由
- 已执行 `npm run build`，Next.js 生产构建通过，确认来源页面字段、发件人显示和客户自动回复邮件改动未破坏构建
- 已执行 `npm run build`，Next.js 生产构建通过，确认 GA/GSC 入口、知识库动态文章和 sitemap 正常生成，共 43 个路由
