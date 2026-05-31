export type MedicalResource = {
  id: string;
  region: string;
  resourceType: string;
  specialty: string;
  suitableFor: string;
  accessModel: string;
  dueDiligence: string[];
  documents: string[];
};

export type DoctorProfile = {
  id: string;
  specialty: string;
  role: string;
  caseFit: string;
  languageWorkflow: string;
  verification: string[];
  matchingQuestions: string[];
};

export type ProgramProfile = {
  id: string;
  category: string;
  program: string;
  clientFit: string;
  deliverables: string[];
  riskControls: string[];
  followUp: string;
};

export type AcquisitionStage = {
  stage: string;
  target: string;
  contentAsset: string;
  qualificationSignal: string;
  nextAction: string;
};

export const medicalResources: MedicalResource[] = [
  {
    id: "MR-TYO-EXEC-01",
    region: "Tokyo",
    resourceType: "高端精密体检中心",
    specialty: "肿瘤早筛、心脑血管、代谢与影像检查",
    suitableFor: "企业家年度体检、赴日短行程检查、家族成员基线评估",
    accessModel: "预约制，行前资料预审，中日双语报告解读",
    dueDiligence: ["设备与检查组合核对", "国际患者接待能力", "异常结果转诊路径"],
    documents: ["既往体检报告", "用药清单", "家族史问卷", "过敏史"]
  },
  {
    id: "MR-TYO-ONC-02",
    region: "Tokyo / Kanto",
    resourceType: "肿瘤专科会诊路径",
    specialty: "肺癌、消化道肿瘤、乳腺肿瘤、泌尿系统肿瘤",
    suitableFor: "已确诊客户的第二诊疗意见、治疗方案复核、临床路径比较",
    accessModel: "先整理影像与病理资料，再匹配专科意见窗口",
    dueDiligence: ["病理资料完整性", "影像格式可读性", "可接受等待周期"],
    documents: ["病理报告", "DICOM 影像", "治疗记录", "主治医生问题清单"]
  },
  {
    id: "MR-OSA-CARD-03",
    region: "Osaka / Kansai",
    resourceType: "心血管评估资源",
    specialty: "冠脉风险、动脉硬化、心律异常、术后复查",
    suitableFor: "高压企业主、家族心血管史客户、运动前风险评估",
    accessModel: "体检指标与影像评估结合，必要时转专科会诊",
    dueDiligence: ["急症排除", "检查禁忌确认", "后续复查周期"],
    documents: ["心电图", "血脂血糖指标", "既往支架或手术记录", "运动习惯"]
  },
  {
    id: "MR-TYO-REGEN-04",
    region: "Tokyo",
    resourceType: "再生医疗与抗衰咨询机构",
    specialty: "干细胞、免疫细胞、外泌体、组织修复相关咨询",
    suitableFor: "希望了解合规边界、适应症、预期管理与长期追踪的客户",
    accessModel: "先做医学适配度评估，再决定是否进入医生面谈",
    dueDiligence: ["合规备案范围", "医生资质", "禁忌症筛查", "不夸大疗效"],
    documents: ["近期血检", "既往重大疾病史", "免疫相关病史", "当前诉求"]
  },
  {
    id: "MR-KYO-REHAB-05",
    region: "Kyoto / Kansai",
    resourceType: "康复与功能恢复资源",
    specialty: "术后康复、运动损伤、神经康复、疼痛管理",
    suitableFor: "术后恢复客户、慢性疼痛客户、运动能力下降客户",
    accessModel: "功能评估后设计阶段性康复计划",
    dueDiligence: ["医生诊断基础", "康复目标可量化", "回国后延续方案"],
    documents: ["手术记录", "影像报告", "疼痛评分", "活动能力描述"]
  },
  {
    id: "MR-TYO-WOMEN-06",
    region: "Tokyo",
    resourceType: "女性健康与更年期管理资源",
    specialty: "妇科筛查、内分泌、更年期、骨密度与代谢",
    suitableFor: "企业家配偶、女性高管、家族女性成员年度管理",
    accessModel: "隐私预约、分层检查、报告后行动建议",
    dueDiligence: ["筛查项目适配", "隐私动线", "长期复查安排"],
    documents: ["月经与生育史", "既往妇科报告", "激素检查", "骨密度记录"]
  }
];

export const doctorProfiles: DoctorProfile[] = [
  {
    id: "DR-ONC-LEAD-01",
    specialty: "肿瘤内科 / 综合治疗决策",
    role: "第二诊疗意见主审专家画像",
    caseFit: "适合已有病理结果、希望复核治疗顺序与替代路径的客户",
    languageWorkflow: "中文顾问整理问题清单，日本医生按病例资料给出意见，诊后形成中文行动摘要",
    verification: ["执业资格与专科背景", "肿瘤 MDT 经验", "是否接受国际病例资料预审"],
    matchingQuestions: ["当前分期是否明确", "是否已有基因检测", "希望复核手术、放疗、药物还是全流程"]
  },
  {
    id: "DR-CARD-RISK-02",
    specialty: "心血管内科 / 风险预防",
    role: "企业家心血管风险评估专家画像",
    caseFit: "适合高压力、睡眠不足、血脂血糖异常或有家族史客户",
    languageWorkflow: "先汇总指标与生活方式，再安排检查和医生说明",
    verification: ["心血管专科资质", "预防医学经验", "检查项目解释能力"],
    matchingQuestions: ["是否有胸痛或急症信号", "近一年血压血脂变化", "运动强度与睡眠情况"]
  },
  {
    id: "DR-REGEN-SCREEN-03",
    specialty: "再生医疗 / 抗衰风险筛查",
    role: "项目适配度评估医生画像",
    caseFit: "适合关注干细胞、免疫细胞、外泌体但需要先判断禁忌与证据边界的客户",
    languageWorkflow: "医学资料预审后再进入医生沟通，不以销售话术替代医学判断",
    verification: ["合规项目参与范围", "不良反应处理机制", "术前术后管理能力"],
    matchingQuestions: ["是否有肿瘤或自身免疫病史", "是否正在使用免疫抑制药", "核心目标是修复、抗衰还是疲劳改善"]
  },
  {
    id: "DR-DIGEST-ENDO-04",
    specialty: "消化内镜 / 胃肠早筛",
    role: "消化道肿瘤早筛医生画像",
    caseFit: "适合有胃肠道家族史、长期应酬、幽门螺杆菌或息肉史客户",
    languageWorkflow: "行前确认麻醉、病理与复查安排，诊后输出中文复查节点",
    verification: ["内镜操作经验", "病理转诊流程", "麻醉安全流程"],
    matchingQuestions: ["是否有息肉或萎缩性胃炎史", "是否服用抗凝药", "希望一次完成哪些检查"]
  },
  {
    id: "DR-LONGEVITY-05",
    specialty: "预防医学 / 长寿管理",
    role: "年度健康董事会顾问画像",
    caseFit: "适合希望把体检、生活方式和医学干预纳入年度计划的家庭",
    languageWorkflow: "多学科资料汇总，按季度复盘指标和行动清单",
    verification: ["预防医学背景", "跨学科协作能力", "长期随访机制"],
    matchingQuestions: ["家庭核心风险是什么", "年度预算与时间限制", "是否需要父母与子女分层管理"]
  },
  {
    id: "DR-ORTHO-REHAB-06",
    specialty: "骨科 / 康复医学",
    role: "术后与运动能力恢复专家画像",
    caseFit: "适合关节、脊柱、运动损伤术后复查及康复路径设计",
    languageWorkflow: "医生评估结构问题，康复团队落地功能训练计划",
    verification: ["影像判读能力", "康复团队协作", "回国后训练衔接"],
    matchingQuestions: ["疼痛位置与持续时间", "是否已有手术或注射治疗", "目标是止痛、恢复运动还是避免复发"]
  }
];

export const programProfiles: ProgramProfile[] = [
  {
    id: "PG-EXEC-3D",
    category: "精密体检",
    program: "3 日东京高净值客户精密筛查",
    clientFit: "时间有限但希望建立年度健康基线的企业家",
    deliverables: ["检查预约表", "中日双语陪诊", "异常指标摘要", "后续转诊建议"],
    riskControls: ["避免重复检查", "确认检查禁忌", "异常结果不直接销售治疗"],
    followUp: "30 天内完成报告解读，90 天内跟进异常指标处理"
  },
  {
    id: "PG-ONC-2OP",
    category: "第二诊疗意见",
    program: "肿瘤病例日本专家复核",
    clientFit: "已确诊或治疗中，需比较方案与下一步路径的家庭",
    deliverables: ["病历资料清单", "医生问题清单", "会诊纪要", "下一步行动表"],
    riskControls: ["不承诺改变诊断", "强调原主治医生连续治疗", "保护病理与影像隐私"],
    followUp: "根据医生建议协助补充检查、复诊或回国沟通"
  },
  {
    id: "PG-REGEN-DUE",
    category: "再生医疗",
    program: "再生医疗项目尽调与适配评估",
    clientFit: "关注抗衰或修复项目，但需要先判断合规、风险和适应症",
    deliverables: ["适配度问卷", "禁忌风险清单", "机构尽调摘要", "医生沟通安排"],
    riskControls: ["不替代医生诊断", "不夸大疗效", "先评估后预约"],
    followUp: "治疗后纳入指标追踪和年度健康档案"
  },
  {
    id: "PG-LONG-12M",
    category: "长寿管理",
    program: "12 个月家庭长寿管理计划",
    clientFit: "希望持续管理代谢、睡眠、压力、肿瘤与心脑血管风险的家庭",
    deliverables: ["家庭健康档案", "年度风险地图", "季度复盘", "赴日升级检查建议"],
    riskControls: ["分层管理", "必要医疗才升级", "避免项目堆叠"],
    followUp: "每季度复盘一次，年度更新健康董事会议程"
  },
  {
    id: "PG-CONC-VIP",
    category: "医疗礼宾",
    program: "赴日就医 VIP 全流程协调",
    clientFit: "需要私密、高效、跨语言就医安排的客户",
    deliverables: ["行前说明", "预约确认", "现场翻译陪同", "诊后中文总结"],
    riskControls: ["只收集必要病历", "明确医院规则", "费用与等待周期提前确认"],
    followUp: "回国后 7 日内交付行动清单，必要时安排远程复诊"
  },
  {
    id: "PG-FAMILY-LEDGER",
    category: "家族健康治理",
    program: "家庭健康台账与重大疾病预案",
    clientFit: "家族办公室、私人银行客户经理服务的企业家家庭",
    deliverables: ["成员分层", "关键病历目录", "紧急联系人机制", "第二意见预案"],
    riskControls: ["权限分级", "隐私边界", "敏感资料延后提交"],
    followUp: "每年更新一次，重大事件发生时启动预案"
  }
];

export const acquisitionStages: AcquisitionStage[] = [
  {
    stage: "定位触达",
    target: "企业家、家族办公室、私人银行 RM、海外教育与移民服务客户",
    contentAsset: "《日本高端体检与长寿管理白皮书》",
    qualificationSignal: "主动询问日本体检、肿瘤第二意见、再生医疗或父母健康安排",
    nextAction: "邀请填写匿名健康需求问卷"
  },
  {
    stage: "信任建立",
    target: "已表达健康焦虑但尚未提交病历的潜在客户",
    contentAsset: "闭门线上说明会：日本医疗资源如何筛选",
    qualificationSignal: "愿意说明年龄、核心风险、预算区间与可出行时间",
    nextAction: "安排 20 分钟适配度电话"
  },
  {
    stage: "需求诊断",
    target: "具备明确医疗需求或家庭健康管理目标的客户",
    contentAsset: "一页式家庭健康风险地图",
    qualificationSignal: "提供既往体检或病历摘要，接受保密流程",
    nextAction: "生成初步服务路径和报价范围"
  },
  {
    stage: "服务确认",
    target: "需要决策赴日体检、第二意见或年度健康计划的客户",
    contentAsset: "项目说明书、行程节奏、交付物样例",
    qualificationSignal: "确认决策人、时间窗口和付款主体",
    nextAction: "签署服务确认并建立客户档案"
  },
  {
    stage: "长期跟进",
    target: "已完成体检、会诊或医疗礼宾的客户",
    contentAsset: "诊后中文行动清单与年度复盘报告",
    qualificationSignal: "愿意加入季度复盘或推荐家庭成员",
    nextAction: "升级为 12 个月长寿管理或家庭健康计划"
  },
  {
    stage: "渠道共建",
    target: "私人银行、保险经纪、家族办公室、企业家社群",
    contentAsset: "合规合作介绍包与客户转介边界",
    qualificationSignal: "有稳定高净值客户池且认可不夸大医疗承诺",
    nextAction: "建立联合活动和转介登记机制"
  }
];

export const acquisitionSegments = [
  "企业创始人：关注重大疾病风险、时间效率、隐私与决策确定性",
  "创始人配偶：关注父母健康、子女压力、女性健康与长期陪伴",
  "家族办公室：关注信息可信度、供应商尽调、预算与服务边界",
  "私人银行 RM：关注可转介绍内容、客户体验和合规表达",
  "高端保险与移民顾问：关注补充服务能力、跨境资源和客户粘性"
];

export const leadScoringRules = [
  "A 级线索：30 天内有明确赴日计划、愿意提交资料、预算与决策人明确",
  "B 级线索：有明确健康议题但时间未定，需要内容培育和适配度沟通",
  "C 级线索：只关注价格或单一项目，先进入教育内容池，不立即投入高成本服务",
  "风险线索：要求结果承诺、规避合规流程或拒绝基础病史披露，应暂停推进"
];
