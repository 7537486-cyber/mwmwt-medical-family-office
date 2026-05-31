# 问题与风险

## 当前风险

- 预期模板目录 `~/.codex/templates/agent_memory/` 不存在，无法按模板原样创建 agent_memory 文件；已使用最小结构继续，并保留此风险记录。
- Vercel、GitHub 与新网账号登录、验证码、域名解析保存需要用户本人在浏览器中完成。
- 当前系统不允许在项目目录创建 `.git`，因此未能直接初始化 Git 仓库；已改为生成可上传压缩包。
- 医生网络档案基于公开资料线索整理；正式转诊或对外使用前仍需复核医生当前任职、接诊规则、机构准入要求与可公开展示边界。
- 医生详情页已经改为专业履历与资源介绍模板，但目前医生资料仍是种子数据；未来扩展到更多医生时，每一条学历、资格、论文、合作身份、语言能力和可转诊状态都必须逐项核验，不能用模板默认值代替真实事实。
- 生育力保存内容涉及医疗、伦理与法律边界；冻卵可作为咨询方向展示，代孕不应写成安排或撮合服务，只能作为风险说明与合规咨询。
- 医疗治理体系页面涉及合规、监管、机构审查与长期随访表述；正式公开前应由熟悉日本医疗法规与个人信息保护的专业人士复核措辞，避免被理解为医疗行为或疗效承诺。
- 知识库文章涉及长寿医学、生物年龄、干细胞、外泌体等医学科普；公开前建议继续保持“教育内容/风险认知/咨询前评估”表达，不写成诊断、治疗建议或效果保证。
- 本地预览服务在当前环境启动时遇到端口绑定权限限制（`0.0.0.0:3000`），因此视觉检查主要依赖生产构建；用户本机或 Vercel 部署后仍需实际浏览确认图片裁切效果。
- 本轮再次尝试用 `127.0.0.1:3000` 启动本地预览，仍被环境以 `EPERM` 拦截；移动端视觉已通过代码约束处理，但最终仍建议在 Vercel 部署后用手机实际检查首屏图片比例和文字换行。
- 曾发现钢结构网站内容误覆盖到医疗官网目录；已将钢结构网站复制保存在 `/Users/yumi/Documents/MWM钢结构官网`，医疗官网已恢复，但后续部署钢结构网站时必须作为独立 GitHub/Vercel 项目处理，不能继续在当前医疗官网仓库内操作。
- 当前联系表单已经改为站内提交接口并固定发送到 `info@mwmwt.com`；真正上线发送邮件需要在 Vercel 配置 `RESEND_API_KEY`，并建议配置已验证发件地址 `CONTACT_FROM_EMAIL=Medical Family Office <info@mwmwt.com>`。如未配置 `RESEND_API_KEY`，表单会提示提交系统暂不可用。
- CRM 写入目前采用可选 Webhook：需要后续提供 `CONTACT_CRM_WEBHOOK_URL`，可接 Make、Zapier、Notion、Airtable、Google Sheets 或正式 CRM。
- LINE / WhatsApp 快捷入口已在感谢页预留，但需要提供官方链接并配置 `NEXT_PUBLIC_LINE_URL` 与 `NEXT_PUBLIC_WHATSAPP_URL` 后才会启用。
- `info@mwmwt.com` 当前如尚未创建，表单代码虽已默认发送到该地址，但上线前必须先创建邮箱或至少完成 Resend 发信域名验证；否则邮件发送会失败。
- LINE 内部推送需要二选一配置：`LINE_NOTIFICATION_WEBHOOK_URL`（推荐先接 Make/Zapier）或 `LINE_CHANNEL_ACCESS_TOKEN` + `LINE_TO_ID`（直接接 LINE Messaging API）。未配置时表单仍可提交邮件和 CRM，但不会推送 LINE。
- 本次 Resend 表单修复已本地提交，但生产部署仍被账号认证阻塞：`git push origin main` 无法读取 GitHub 用户名，Vercel CLI token 无效，Vercel 连接工具也未提供直接部署能力。需要用户重新登录 GitHub/Vercel 或在本机执行授权后再发布。
- Google Analytics 与 Google Search Console 代码入口已经加入，但需要在 Vercel 配置 `NEXT_PUBLIC_GA_ID` 与 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` 并重新部署；Search Console 仍需要用户在 Google 后台完成资源创建和验证。
- 新增 SEO 文章为首批合规型内容骨架，未使用真实医生、真实机构或疗效承诺；后续扩展到深度医学文章时应继续保留参考文献、来源和医学免责声明。
