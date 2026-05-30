export type DoctorProfile = {
  slug: string;
  name: string;
  jaName: string;
  specialty: string;
  institution: string;
  role: string;
  summary: string;
  education: string[];
  societies: string[];
  research: string[];
  papers: string[];
  cases: string[];
  sources: Array<{
    label: string;
    href: string;
  }>;
};

export const doctorProfiles: DoctorProfile[] = [
  {
    slug: "hideyuki-okano",
    name: "Hideyuki Okano",
    jaName: "岡野 栄之",
    specialty: "再生医疗 / 神经再生",
    institution: "Keio University School of Medicine",
    role: "生理学教授、再生医学研究中心相关负责人",
    summary:
      "日本神经干细胞、iPS 细胞与中枢神经系统再生领域的代表性研究者之一，适合用于再生医疗项目尽调、神经损伤研究路径和前沿治疗边界说明。",
    education: [
      "庆应义塾大学医学部医学教育背景",
      "M.D., Ph.D.",
      "长期任职庆应义塾大学医学部 / 医学研究科生理学领域"
    ],
    societies: [
      "国际干细胞与神经再生相关学术网络活跃研究者",
      "庆应义塾大学 Global COE 干细胞医学教育研究项目负责人之一",
      "日本再生医疗安全法规框架下 iPS 神经干/祖细胞临床研究团队核心成员"
    ],
    research: [
      "神经干细胞命运决定与中枢神经系统发育",
      "iPS 细胞来源神经干/祖细胞用于脊髓损伤等神经损伤再生研究",
      "疾病模型、药物发现与灵长类转化研究"
    ],
    papers: [
      "iPS cell-based regenerative medicine for neurological diseases 相关综述与转化研究",
      "Neural stem cells, CNS development and regeneration 相关系列论文",
      "Keio iPS-derived neural stem/progenitor cell spinal cord injury clinical research"
    ],
    cases: [
      "脊髓损伤家庭需要了解日本 iPS 细胞临床研究的合规边界、适应症和等待周期",
      "高净值客户关注再生医疗但需区分临床研究、自由诊疗项目与商业化抗衰项目",
      "神经退行性疾病家庭需要整理前沿研究、常规治疗和可行转诊路径"
    ],
    sources: [
      {
        label: "Keio Global COE profile",
        href: "https://www.med.keio.ac.jp/gcoe-stemcell/english/member/okano.html"
      },
      {
        label: "Keio spinal cord injury regenerative medicine release",
        href: "https://www.keio.ac.jp/en/press-release/20181128-1/"
      }
    ]
  },
  {
    slug: "tetsuya-mitsudomi",
    name: "Tetsuya Mitsudomi",
    jaName: "光冨 徹哉",
    specialty: "肿瘤 / 肺癌精准外科",
    institution: "近畿大学医学部 / Kanagawa Cancer Center 等公开履历",
    role: "胸部外科与肺癌个体化治疗领域专家",
    summary:
      "日本非小细胞肺癌分子分型、EGFR 相关治疗策略和肺癌精准外科领域的重要专家，适合肺癌第二意见、术式讨论和基因检测路径说明。",
    education: [
      "日本医学部与胸部外科训练背景",
      "长期从事肺癌外科、转化研究与国际肺癌学术协作",
      "公开资料显示其任职近畿大学医学部胸部外科等机构"
    ],
    societies: [
      "日本肺癌学会相关领导职务公开记录",
      "IASLC、ASCO、ESMO、AACR 等国际肿瘤学术活动参与记录",
      "日本胸部外科、癌症、临床肿瘤相关学会活动记录"
    ],
    research: [
      "非小细胞肺癌的 EGFR / 分子标志物驱动治疗",
      "肺癌外科与个体化治疗策略",
      "新辅助治疗、基因检测和术后风险分层"
    ],
    papers: [
      "Surgery for NSCLC in the era of personalized medicine, Nature Reviews Clinical Oncology, 2013",
      "EGFR mutation and lung cancer personalized therapy 相关系列论文",
      "Neoadjuvant nivolumab plus chemotherapy in resectable NSCLC in Japanese patients 相关研究"
    ],
    cases: [
      "肺结节或早期肺癌客户需要判断手术、随访、消融或药物路径",
      "EGFR 阳性肺癌家庭希望获取日本专家第二诊疗意见",
      "已完成国内治疗的客户需要复核术后辅助治疗和长期随访计划"
    ],
    sources: [
      {
        label: "Translational Lung Cancer Research expert interview",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5750153/"
      },
      {
        label: "PubMed: Surgery for NSCLC in personalized medicine",
        href: "https://pubmed.ncbi.nlm.nih.gov/23438759/"
      }
    ]
  },
  {
    slug: "yoshiki-sawa",
    name: "Yoshiki Sawa",
    jaName: "澤 芳樹",
    specialty: "心血管 / 心脏外科与心肌再生",
    institution: "Osaka University Graduate School of Medicine",
    role: "心血管外科、心脏移植、人工心脏与心肌再生研究专家",
    summary:
      "大阪大学心血管外科和心肌再生医学领域代表性专家，公开资料显示其因外科、心脏移植、人工器官、微创心脏外科与再生医疗获紫绶褒章。",
    education: [
      "大阪大学医学系研究科心血管外科长期任职背景",
      "M.D., Ph.D.",
      "心血管外科、胸部外科、移植医学与转化研究训练"
    ],
    societies: [
      "日本心血管外科、胸部外科、移植与再生医学相关学术网络",
      "大阪大学心血管外科临床研究与转化医学团队核心成员",
      "2020 年紫绶褒章获得者"
    ],
    research: [
      "重症心衰外科治疗与心脏移植",
      "iPS 细胞来源心肌细胞片临床研究",
      "人工心脏、组织工程、细胞片技术与微创心脏外科"
    ],
    papers: [
      "Surgical treatment for ischemic cardiomyopathy, Kyobu Geka, 2011",
      "iPSC-derived cardiac cell sheet transplantation 相关临床研究",
      "Myoblast cell sheet and cardiac regenerative therapy 相关研究"
    ],
    cases: [
      "重症心衰家庭需要评估日本心脏外科、移植或再生医疗临床研究路径",
      "复杂瓣膜病或缺血性心肌病客户需要第二意见和手术风险解释",
      "关注心脏再生医疗的客户需要区分临床试验、安全性观察和常规治疗"
    ],
    sources: [
      {
        label: "Osaka University Medal of Honor announcement",
        href: "https://www.osaka-u.ac.jp/en/news/topics/2020/11/20201102001"
      },
      {
        label: "Osaka University iPS heart therapy release",
        href: "https://www.med.osaka-u.ac.jp/eng/archives/3739"
      }
    ]
  },
  {
    slug: "ryosuke-takahashi",
    name: "Ryosuke Takahashi",
    jaName: "髙橋 良輔",
    specialty: "神经科 / 帕金森与神经退行性疾病",
    institution: "Kyoto University Graduate School of Medicine",
    role: "京都大学神经内科名誉教授、神经退行性疾病研究专家",
    summary:
      "京都大学神经内科和帕金森病研究领域的代表性专家之一，公开资料显示其作为主要研究者参与 iPS 细胞来源多巴胺前体细胞治疗帕金森病的医师主导试验。",
    education: [
      "京都大学医学部教育背景",
      "医学博士",
      "京都大学医院、东京都神经病院、RIKEN 脑科学研究所等训练与任职经历"
    ],
    societies: [
      "日本神经内科与神经退行性疾病研究网络",
      "京都大学神经内科教授及名誉教授公开履历",
      "帕金森病 iPS 细胞治疗医师主导试验主要研究者之一"
    ],
    research: [
      "帕金森病、帕金森综合征和运动障碍",
      "神经退行性疾病病理机制、早期诊断与生物标志物",
      "iPS 细胞治疗、神经影像和转化神经科学"
    ],
    papers: [
      "Pael receptor, endoplasmic reticulum stress, and Parkinson's disease, Journal of Neurology, 2003",
      "ATP maintenance and Parkinson's disease model studies",
      "Kyoto University iPS cell-based Parkinson's disease therapy clinical trial materials"
    ],
    cases: [
      "帕金森病客户希望确认药物、DBS、康复和前沿细胞治疗的排序",
      "认知下降或运动障碍客户需要日本神经内科第二诊疗意见",
      "疑难神经退行性疾病家庭需要影像、量表、基因与长期管理计划整合"
    ],
    sources: [
      {
        label: "Kyoto University research profile",
        href: "https://www.research.kyoto-u.ac.jp/en/member/ryosuke-takahashi/"
      },
      {
        label: "Kyoto University iPS Parkinson's therapy news",
        href: "https://www.kyoto-u.ac.jp/en/news/2018-12-10"
      }
    ]
  },
  {
    slug: "takashi-kadowaki",
    name: "Takashi Kadowaki",
    jaName: "門脇 孝",
    specialty: "内分泌 / 糖尿病与代谢综合征",
    institution: "The University of Tokyo Graduate School of Medicine",
    role: "糖尿病、代谢综合征和胰岛素信号研究专家",
    summary:
      "日本 2 型糖尿病分子机制、胰岛素抵抗、脂联素受体与代谢综合征研究领域的代表性医师科学家，曾获日本学士院奖。",
    education: [
      "东京大学医学部 / 医学系研究科背景",
      "M.D., Ph.D.",
      "长期任职东京大学糖尿病与代谢病相关学科"
    ],
    societies: [
      "日本内科学、糖尿病、内分泌与代谢相关学术网络",
      "日本学士院奖获得者",
      "东京大学医学系研究科教授公开记录"
    ],
    research: [
      "2 型糖尿病遗传易感性和胰岛素分泌 / 抵抗机制",
      "脂联素、脂联素受体与能量代谢调控",
      "肥胖、代谢综合征和亚洲人群糖尿病风险"
    ],
    papers: [
      "Molecular Basis of Type 2 Diabetes and Metabolic Syndrome, Japan Academy Prize summary",
      "Insulin receptor substrate and glucose metabolism 相关系列研究",
      "Elucidation of Pathogenesis and Development of Therapeutic Strategy of Type 2 Diabetes, 2016"
    ],
    cases: [
      "企业家客户存在糖尿病前期、脂肪肝、内脏脂肪和心血管风险叠加",
      "家族多成员有糖尿病史，需要建立代谢风险筛查和年度复盘",
      "客户希望把减重、药物、营养、运动和长期指标管理纳入同一方案"
    ],
    sources: [
      {
        label: "Japan Academy Prize summary",
        href: "https://www.japan-acad.go.jp/pdf/youshi/103en/kadowaki.pdf"
      },
      {
        label: "J-STAGE presidential lecture",
        href: "https://www.jstage.jst.go.jp/article/naika/105/9/105_1543/_article"
      }
    ]
  },
  {
    slug: "ryosuke-kuroda",
    name: "Ryosuke Kuroda",
    jaName: "黒田 良祐",
    specialty: "运动医学 / 膝关节与运动损伤",
    institution: "Kobe University Graduate School of Medicine",
    role: "骨科、膝关节外科与运动医学专家",
    summary:
      "神户大学骨科与运动医学领域专家，研究重点覆盖 ACL 重建、膝关节生物力学、半月板修复、MPFL 重建和软骨损伤细胞治疗。",
    education: [
      "神户大学医学研究科训练背景，公开资料显示 1990 年毕业",
      "M.D., Ph.D.",
      "神户大学医院骨科住院医师及后续教研任职经历"
    ],
    societies: [
      "ISAKOS 旅行学者公开记录",
      "APOSSM / ESSKA 旅行学者公开记录",
      "Knee Surgery, Sports Traumatology, Arthroscopy 期刊 Associate Editor 公开记录"
    ],
    research: [
      "ACL 损伤、膝关节不稳和运动员复出评估",
      "膝关节生物力学、pivot-shift 分析与韧带重建技术",
      "半月板修复、髌股关节不稳和软骨损伤细胞治疗"
    ],
    papers: [
      "Knee Surgery, Sports Traumatology, Arthroscopy associate editor profile, 2016",
      "ACL reconstruction, MPFL reconstruction and meniscal repair 相关论文",
      "Cell-based therapy for cartilage damage 相关研究"
    ],
    cases: [
      "职业或高强度运动人群 ACL 损伤后需要日本运动医学第二意见",
      "膝关节软骨损伤客户需要评估保守治疗、关节镜、细胞治疗和康复周期",
      "滑雪、高尔夫、网球等运动损伤客户需要术后复出计划和风险控制"
    ],
    sources: [
      {
        label: "Springer profile: Ryosuke Kuroda",
        href: "https://link.springer.com/article/10.1007/s00167-016-4126-x"
      }
    ]
  }
];

export function getDoctorProfile(slug: string) {
  return doctorProfiles.find((doctor) => doctor.slug === slug);
}
