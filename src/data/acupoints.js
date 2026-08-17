/**
 * 穴位库（经络归属按通行针灸学教材；坐标为归一化相对坐标，供3D图鉴标定）
 * pos: [x, y, z] 归一化坐标（后续Atlas用传输材质叠加标定）; meridians: 所属经络; common: 常见主治
 */
export const acupoints = {
  baihui: {
    name: '百会',
    pinyin: 'Bǎihuì',
    meridian: '督脉',
    location: '头顶正中线与两耳尖连线的交点处',
    common: ['头痛', '眩晕', '失眠', '脱发', '健忘'],
    method: '按揉顺逆时针各1–2分钟，或温和施以指压；力度以酸胀为度',
    caution: '囟门未闭婴幼儿及颅脑术后慎按',
    pos: [0, 0.96, 0.02]
  },
  tshang: {
    name: '太阳',
    pinyin: 'Tàiyáng',
    meridian: '经外奇穴',
    location: '眉梢与目外眦之间向后约一横指凹陷处',
    common: ['头痛', '偏头痛', '目赤肿痛', '视疲劳'],
    method: '双手拇指指腹向的颞部轻轻按揉，往复各1分钟',
    pos: [0.62, 0.72, 0.22]
  },
  fengchi: {
    name: '风池',
    pinyin: 'Fēngchí',
    meridian: '足少阳胆经',
    location: '枕骨下，胸锁乳突肌与斜方肌之间凹陷处',
    common: ['头痛', '头晕', '颈项强痛', '感冒', '目疾'],
    method: '两手拇指指腹按揉1–2分钟，酸胀为度',
    pos: [0.68, 0.86, -0.06]
  },
  qubin: {
    name: '曲鬓',
    pinyin: 'Qūbìn',
    meridian: '足少阳胆经',
    location: '耳前鬓发后缘，耳尖水平线之交点',
    common: ['偏头痛', '耳鸣'],
    pos: [0.55, 0.78, 0.3]
  },
  yifeng: {
    name: '翳风',
    pinyin: 'Yìfēng',
    meridian: '手少阳三焦经',
    location: '耳垂后方，乳突下端前方凹陷处',
    common: ['耳鸣', '耳聋', '口眼斜', '面颊肿痛'],
    pos: [0.6, 0.74, 0.28]
  },
  tinggong: {
    name: '听宫',
    pinyin: 'Tīnggōng',
    meridian: '手太阳小肠经',
    location: '耳屏前方，张口时呈凹陷处',
    common: ['耳鸣', '耳闷', '听力下降'],
    pos: [0.55, 0.72, 0.3]
  },
  yintang: {
    name: '印堂',
    pinyin: '印堂',
    meridian: '督脉·奇穴',
    location: '两眉头连线的中点',
    common: ['头痛', '眩晕', '失眠', '鼻炎'],
    method: '拇指腹自印堂向头顶方向抹1分钟，宁心醒神',
    pos: [0.0, 0.83, 0.18]
  },
  zanzhu: {
    name: '攒竹',
    pinyin: 'Zǎnzhú',
    meridian: '足太阳膀胱经',
    location: '眉头凹陷中',
    common: ['头痛', '眉棱骨痛', '目疾'],
    pos: [0.28, 0.84, 0.17]
  },
  jingming: {
    name: '睛明',
    pinyin: 'Jīngmíng',
    meridian: '足太阳膀胱经',
    location: '目内眦角稍上方凹陷处',
    common: ['眼干涩', '视物模糊', '迎风流泪', '目赤肿痛'],
    method: '闭目，拇指指尖轻按于目内眦角，极轻柔的按揉10–20下，勿施重力',
    caution: '眼疾、青光眼急性期及手术后慎自治',
    pos: [0.18, 0.82, 0.2]
  },
  chengqi: {
    name: '承泣',
    pinyin: 'Chéngqì',
    meridian: '足阳明胃经',
    location: '目正视，瞳孔直下，眼眶缘与眼球之间',
    common: ['眼干涩', '目赤', '迎风流泪'],
    caution: '眼眶部穴位，仅作轻按或热敷，勿用力压眼球',
    pos: [0.18, 0.8, 0.2]
  },
  taiyang_extra: {
    name: '太阳穴',
    pinyin: 'Tàiyáng',
    meridian: '经外奇穴',
    location: '眉梢与外眦之间向后约一横指凹陷处',
    common: ['头痛', '目痛', '视疲劳'],
    pos: [0.55, 0.76, 0.22]
  },
  yingxiang: {
    name: '迎香',
    pinyin: 'Yíngxiāng',
    meridian: '手阳明大肠经',
    location: '鼻翼外缘中点旁，鼻唇沟中',
    common: ['鼻塞', '流涕', '嗅觉减退'],
    method: '食指指腹上下擦动鼻翼两旁各1分钟',
    pos: [0.12, 0.79, 0.2]
  },
  yiming: {
    name: '印明',
    pinyin: 'Yìnmíng',
    meridian: '经外奇穴',
    location: '目内眦角上方约0.1寸凹陷处',
    common: ['近视', '视疲劳'],
    pos: [0.18, 0.83, 0.2]
  },
  tf_xiang: {
    name: '缺盆',
    pinyin: 'Quēpén',
    meridian: '足阳明胃经',
    location: '锁骨上窝中央，前正中线旁开2横指处',
    common: ['咽痛', '咳嗽', '气喘'],
    caution: '深部有重要血管神经，仅作轻抚或热敷，勿重按',
    pos: [0.7, 0.68, 0.3]
  },
  tiantu: {
    name: '天突',
    pinyin: 'Tiāntū',
    meridian: '任脉',
    location: '胸骨上窝正中凹陷处',
    common: ['咳嗽', '气喘', '咽干咽痛', '咽喉异物感'],
    method: '食指指腹轻按揉，宜轻柔、时间宜短',
    caution: '穴居咽喉要道，勿用力深压',
    pos: [0.0, 0.6, 0.02]
  },
  q_que: {
    name: '膻中',
    pinyin: 'Shānzhōng',
    meridian: '任脉',
    location: '前正中线上，两乳头连线的中点（平第4肋间）',
    common: ['胸闷', '心悸', '气短', '咳嗽气喘'],
    method: '手掌鱼际或拇指指腹轻揉，顺逆时针各1分钟',
    pos: [0.0, 0.48, 0.02]
  },
  qimen: {
    name: '期门',
    pinyin: 'Qīmén',
    meridian: '足厥阴肝经',
    location: '乳头直下，第6肋间隙',
    common: ['胁痛', '胸胁胀满', '情志不舒'],
    pos: [0.72, 0.5, 0.15]
  },
  zhongfu: {
    name: '中府',
    pinyin: 'Zhōngfǔ',
    meridian: '手太阴肺经',
    location: '胸前壁外上方，平第1肋间隙，前正中线旁开5寸',
    common: ['咳嗽', '气喘', '胸闷'],
    pos: [0.82, 0.56, 0.15]
  },
  neiguan: {
    name: '内关',
    pinyin: 'Nèiguān',
    meridian: '手厥阴心包经',
    location: '腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间',
    common: ['心悸', '胸闷', '恶心呕吐', '胃痛', '失眠'],
    method: '拇指指腹按揉1–2分钟，酸胀为度',
    pos: [-0.5, 0.42, 0.2]
  },
  jianjing: {
    name: '肩井',
    pinyin: 'Jiānjǐng',
    meridian: '足少阳胆经',
    location: '肩部，大椎与肩峰连线之中点',
    common: ['颈项肩背酸痛', '头颈强痛', '肩凝'],
    method: '拇指或掌根按揉1分钟，力度适中',
    caution: '孕妇禁用；体质虚弱者轻按',
    pos: [0.78, 0.58, -0.28]
  },
  dazhui: {
    name: '大椎',
    pinyin: 'Dàzhuī',
    meridian: '督脉',
    location: '第7颈椎棘突下凹陷中',
    common: ['颈项强痛', '发热', '感冒', '咳喘'],
    method: '以掌根摩擦至微热，或拔罐、热敷',
    pos: [0.0, 0.7, -0.45]
  },
  feiyuan: {
    name: '肺俞',
    pinyin: 'Fèishū',
    meridian: '足太阳膀胱经',
    location: '第3胸椎棘突下，旁开1.5寸',
    common: ['咳嗽', '气喘', '鼻塞', '背痛'],
    method: '用手掌摩擦背部至温热，或温敷',
    pos: [0.6, 0.63, -0.44]
  },
  zhongwan: {
    name: '中脘',
    pinyin: 'Zhōngwǎn',
    meridian: '任脉',
    location: '前正中线上，脐上4寸（胸剑联合至脐之中点）',
    common: ['胃痛', '胃胀', '嗳气', '食欲不振', '呕吐'],
    method: '掌根或拇指按揉，或掌心捂热后顺逆时针摩腹各2分钟',
    pos: [0.0, 0.35, 0.02]
  },
  shenque: {
    name: '神阙',
    pinyin: 'Shénquè',
    meridian: '任脉',
    location: '脐中央',
    common: ['腹痛胀满', '腹泻', '便秘', '脱肛', '虚寒证'],
    method: '掌心按捂，作顺时针摩腹；虚寒者可掌心劳宫穴对脐热熨',
    caution: '脐窝不宜针刺；急性腹症速就医',
    pos: [0.0, 0.28, 0.02]
  },
  guanyuan: {
    name: '关元',
    pinyin: 'Guānyuán',
    meridian: '任脉',
    location: '前正中线上，脐下3寸',
    common: ['腹痛、痛经', '遗尿、尿频', '泄泻', '虚劳羸弱'],
    method: '掌心劳宫穴对穴热熨，或温灸3–5分钟；孕妇禁用',
    caution: '孕妇忌刺激此穴',
    pos: [0.0, 0.2, 0.02]
  },
  qihai: {
    name: '气海',
    pinyin: 'Qìhǎi',
    meridian: '任脉',
    location: '前正中线上，脐下1.5寸',
    common: ['气短乏力', '腹痛', '痛经', '泄泻', '虚损'],
    method: '掌心热熨或温灸；孕妇禁用',
    pos: [0.0, 0.24, 0.02]
  },
  liangmen: {
    name: '梁门',
    pinyin: 'Liángmén',
    meridian: '足阳明胃经',
    location: '脐上4寸，前正中线旁开2寸',
    common: ['胃痛', '反酸', '胃胀'],
    method: '拇指按揉1分钟，家属可辅助；空腹或过饱时轻按',
    pos: [0.55, 0.35, 0.02]
  },
  weishu: {
    name: '胃俞',
    pinyin: 'Wèishū',
    meridian: '足太阳膀胱经',
    location: '第12胸椎棘突下，旁开1.5寸',
    common: ['胃痛', '胃胀', '呕吐', '食欲不振'],
    pos: [0.56, 0.42, -0.42]
  },
  pishu: {
    name: '脾俞',
    pinyin: 'Píshū',
    meridian: '足太阳膀胱经',
    location: '第11胸椎棘突下，旁开1.5寸',
    common: ['食少腹胀', '便溏泄泻', '倦怠乏力', '水肿'],
    pos: [0.57, 0.4, -0.44]
  },
  zusanli: {
    name: '足三里',
    pinyin: 'Zúsānlǐ',
    meridian: '足阳明胃经',
    location: '犊鼻穴下3寸，胫骨前嵴外一横指处',
    common: ['胃痛、腹胀', '食欲不振', '腹泻便秘', '乏力', '虚劳'],
    method: '拇指按揉1–2分钟，或以艾条温和灸;常作保健要穴',
    pos: [0.42, 0.3, -0.35]
  },
  sanyinjiao: {
    name: '三阴交',
    pinyin: 'Sānyīnjiāo',
    meridian: '足太阴脾经',
    location: '内踝尖上3寸，胫骨内侧缘后方',
    common: ['月经不调', '痛经', '失眠', '脾虚泄泻', '小便不利'],
    method: '拇指按揉1–2分钟，酸胀为度',
    caution: '孕妇禁用',
    pos: [0.44, 0.32, 0.36]
  },
  taixi: {
    name: '太溪',
    pinyin: 'Tàixī',
    meridian: '足少阴肾经',
    location: '内踝尖与跟腱之间的凹陷处',
    common: ['耳鸣耳聋', '腰膝酸软', '咽干', '失眠'],
    method: '拇指指腹按揉1分钟',
    pos: [0.5, 0.12, 0.4]
  },
  yongquan: {
    name: '涌泉',
    pinyin: 'Yǒngquán',
    meridian: '足少阴肾经',
    location: '足底，足趾跖屈时约当足底前1/3与后2/3交界凹陷处',
    common: ['失眠', '眩晕', '腰膝酸软', '五心烦热'],
    method: '睡前以掌根擦足心至温热',
    pos: [0.3, 0.02, 0.35]
  },
  ganshu: {
    name: '肝俞',
    pinyin: 'Gānshū',
    meridian: '足太阳膀胱经',
    location: '第9胸椎棘突下，旁开1.5寸',
    common: ['胁痛', '目疾', '情志不畅', '头痛眩晕'],
    pos: [0.58, 0.45, -0.44]
  },
  shenshu: {
    name: '肾俞',
    pinyin: 'Shènshū',
    meridian: '足太阳膀胱经',
    location: '第2腰椎棘突下，旁开1.5寸',
    common: ['腰痛', '腰膝酸软', '耳鸣', '尿频遗尿', '夜尿多'],
    method: '双手握拳，以拳背上下擦动腰部至温热，或用艾条温和灸',
    pos: [0.58, 0.38, -0.48]
  },
  mingmen: {
    name: '命门',
    pinyin: 'Mìngmén',
    meridian: '督脉',
    location: '第2腰椎棘突下凹陷中',
    common: ['腰脊强痛', '肾阳不足', '夜尿多', '畏寒肢冷'],
    method: '掌根摩擦后腰至温热，或温灸',
    pos: [0.0, 0.38, -0.5]
  },
  weizhong: {
    name: '委中',
    pinyin: 'Wěizhōng',
    meridian: '足太阳膀胱经',
    location: '腘横纹中点',
    common: ['腰背疼痛', '下肢痿痹', '小便不利'],
    method: '以掌根或指腹按揉至酸胀，可配合适度的腰部拉伸',
    pos: [0.5, 0.18, -0.2]
  },
  chenshan: {
    name: '承山',
    pinyin: 'Chéngshān',
    meridian: '足太阳膀胱经',
    location: '小腿后正中，腓肠肌肌腹下缘凹陷处',
    common: ['腰腿疼痛', '小腿抽筋', '痔疾'],
    method: '拇指或掌根按揉1分钟',
    pos: [0.55, 0.16, -0.24]
  },
  hegu: {
    name: '合谷',
    pinyin: 'Hégǔ',
    meridian: '手阳明大肠经',
    location: '手背，第1、2掌骨间，第2掌骨桡侧的中点',
    common: ['头痛、齿痛', '咽痛', '鼻塞', '发热', '痛证'],
    method: '拇指与食指相对揉按至酸胀，左右互换',
    caution: '孕妇慎用',
    pos: [-0.58, 0.08, 0.12]
  },
  tongli: {
    name: '通里',
    pinyin: 'Tōnglǐ',
    meridian: '手少阴心经',
    location: '腕横纹上1寸，尺侧腕屈肌腱的桡侧缘',
    common: ['心悸', '失眠', '怔忡', '心痛'],
    method: '按揉1分钟，宁心安神',
    pos: [-0.52, 0.4, 0.14]
  },
  shenmen: {
    name: '神门',
    pinyin: 'Shénmén',
    meridian: '手少阴心经',
    location: '腕横纹尺侧端，尺侧腕屈肌腱的桡侧凹陷处',
    common: ['失眠', '多梦', '心悸怔忡', '健忘'],
    method: '拇指指腹轻揉1–2分钟，宁心安神，睡前尤宜',
    pos: [-0.5, 0.4, 0.12]
  },
  quchi: {
    name: '曲池',
    pinyin: 'Qūchí',
    meridian: '手阳明大肠经',
    location: '屈肘成直角，肘横纹外侧端与肱骨外上髁连线之中点',
    common: ['发热', '咽喉肿痛', '齿痛', '皮肤瘙痒', '眩晕'],
    method: '拇指按揉1分钟',
    pos: [-0.66, 0.42, 0.18]
  },
  xuehai: {
    name: '血海',
    pinyin: 'Xuèhǎi',
    meridian: '足太阴脾经',
    location: '屈膝，髌骨内上缘上2寸',
    common: ['月经不调', '痛经', '皮肤瘙痒', '湿疹', '血瘀'],
    method: '拇指按揉1–2分钟',
    pos: [0.2, 0.28, -0.18]
  },
  taichong: {
    name: '太冲',
    pinyin: 'Tàichōng',
    meridian: '足厥阴肝经',
    location: '足背，第1、2跖骨间，跖骨底结合部前方凹陷中',
    common: ['头痛眩晕', '急躁易怒', '胁痛', '失眠', '目疾'],
    method: '拇指由太冲向脚趾方向推按，左右交替各1分钟',
    pos: [0.34, 0.06, 0.3]
  },
  fenglong: {
    name: '丰隆',
    pinyin: 'Fēnglóng',
    meridian: '足阳明胃经',
    location: '外踝尖上8寸，条口穴外1寸，胫骨前嵴外2横指处',
    common: ['咳嗽痰多', '哮喘', '眩晕', '下肢痿痹', '便秘'],
    method: '拇指指腹按揉1–2分钟，酸胀为度',
    pos: [0.45, 0.18, -0.32]
  },
  yinlingquan: {
    name: '阴陵泉',
    pinyin: 'Yīnlíngquán',
    meridian: '足太阴脾经',
    location: '胫骨内侧髁下缘与胫骨内侧缘之间的凹陷中',
    common: ['小便不利', '水肿', '泄泻', '膝痛', '月经不调'],
    method: '拇指按揉1–2分钟',
    pos: [0.4, 0.22, 0.4]
  },
  yanglingquan: {
    name: '阳陵泉',
    pinyin: 'Yánglíngquán',
    meridian: '足少阳胆经',
    location: '腓骨小头前下方凹陷中',
    common: ['胁痛', '口苦', '下肢痿痹', '膝痛', '筋脉拘挛'],
    method: '拇指按揉1–2分钟',
    pos: [0.45, 0.22, -0.38]
  },
  waiguan: {
    name: '外关',
    pinyin: 'Wàiguān',
    meridian: '手少阳三焦经',
    location: '腕背横纹上2寸，尺骨与桡骨之间',
    common: ['偏头痛', '耳鸣', '胁痛', '肩背痛', '热病'],
    method: '拇指指腹按揉1分钟',
    pos: [-0.5, 0.42, -0.1]
  },
  zhigou: {
    name: '支沟',
    pinyin: 'Zhīgōu',
    meridian: '手少阳三焦经',
    location: '腕背横纹上3寸，尺骨与桡骨之间',
    common: ['便秘', '胁痛', '耳鸣', '暴喑', '热病'],
    method: '拇指按揉1分钟，可助通便',
    pos: [-0.5, 0.44, -0.1]
  },
  houxi: {
    name: '后溪',
    pinyin: 'Hòuxī',
    meridian: '手太阳小肠经',
    location: '握拳，第5掌指关节后尺侧，横纹头赤白肉际处',
    common: ['落枕', '项强头痛', '目赤', '腰痛', '癫狂'],
    method: '握拳时将后溪穴在桌缘滚压，或拇指按揉',
    pos: [-0.52, 0.1, 0.08]
  },
  lieque: {
    name: '列缺',
    pinyin: 'Lièquē',
    meridian: '手太阴肺经',
    location: '桡骨茎突上方，腕横纹上1.5寸',
    common: ['咳嗽', '气喘', '咽喉肿痛', '头痛', '腕痛'],
    method: '两手虎口交叉，以拇指按揉列缺1分钟',
    pos: [-0.5, 0.4, 0.15]
  },
  chize: {
    name: '尺泽',
    pinyin: 'Chǐzé',
    meridian: '手太阴肺经',
    location: '肘横纹中，肱二头肌腱桡侧凹陷处',
    common: ['咳嗽', '气喘', '咽喉肿痛', '肘臂挛痛'],
    method: '拇指按揉1分钟',
    pos: [-0.62, 0.42, 0.15]
  },
  dachangshu: {
    name: '大肠俞',
    pinyin: 'Dàchángshū',
    meridian: '足太阳膀胱经',
    location: '第4腰椎棘突下，旁开1.5寸',
    common: ['腰痛', '腹胀', '泄泻', '便秘', '坐骨神经痛'],
    method: '握拳以拳背擦热腰骶',
    pos: [0.58, 0.3, -0.5]
  },
  tianshu: {
    name: '天枢',
    pinyin: 'Tiānshū',
    meridian: '足阳明胃经',
    location: '脐中旁开2寸',
    common: ['腹胀肠鸣', '腹泻', '便秘', '绕脐腹痛', '月经不调'],
    method: '掌根或指腹按揉，配合摩腹',
    pos: [0.55, 0.28, 0.02]
  },
  zhangmen: {
    name: '章门',
    pinyin: 'Zhāngmén',
    meridian: '足厥阴肝经',
    location: '第11肋游离端下际',
    common: ['胁痛', '腹胀', '黄疸', '痞块'],
    method: '指腹沿胁肋下缘轻揉',
    pos: [0.72, 0.34, 0.1]
  },
  jingmen: {
    name: '京门',
    pinyin: 'Jīngmén',
    meridian: '足少阳胆经',
    location: '章门穴后1.8寸，第12肋游离端',
    common: ['胁痛', '腰痛', '腹胀', '小便不利'],
    method: '指腹按揉1分钟',
    pos: [0.74, 0.33, 0.02]
  },
  xinshu: {
    name: '心俞',
    pinyin: 'Xīnshū',
    meridian: '足太阳膀胱经',
    location: '第5胸椎棘突下，旁开1.5寸',
    common: ['心悸', '心痛', '失眠', '健忘', '咳嗽'],
    method: '以掌根摩擦背部至温热',
    pos: [0.6, 0.58, -0.44]
  },
  geshu: {
    name: '膈俞',
    pinyin: 'Géshū',
    meridian: '足太阳膀胱经',
    location: '第7胸椎棘突下，旁开1.5寸',
    common: ['呃逆', '呕血', '血证', '咳嗽', '皮肤瘙痒'],
    method: '以掌根摩擦背部至温热',
    pos: [0.6, 0.55, -0.44]
  },
  sanjiaoshu: {
    name: '三焦俞',
    pinyin: 'Sānjiāoshū',
    meridian: '足太阳膀胱经',
    location: '第1腰椎棘突下，旁开1.5寸',
    common: ['腹胀', '肠鸣', '小便不利', '腰痛', '水肿'],
    method: '以拳背擦腰部至温热',
    pos: [0.58, 0.42, -0.46]
  },
  xiaochangshu: {
    name: '小肠俞',
    pinyin: 'Xiǎochángshū',
    meridian: '足太阳膀胱经',
    location: '第1骶椎棘突下，旁开1.5寸',
    common: ['小腹胀痛', '泄泻', '遗尿', '腰骶疼痛'],
    method: '以拳背擦腰骶部至温热',
    pos: [0.58, 0.24, -0.5]
  },
  jianyu: {
    name: '肩髃',
    pinyin: 'Jiānyú',
    meridian: '手阳明大肠经',
    location: '肩峰前下方，臂外展平举时肩前呈凹陷处',
    common: ['肩臂痛', '肩周炎', '上肢不遂', '瘾疹'],
    method: '拇指按揉或揉动肩部',
    pos: [0.68, 0.5, 0.05]
  },
  tianzong: {
    name: '天宗',
    pinyin: 'Tiānzōng',
    meridian: '手太阳小肠经',
    location: '肩胛冈下窝中央凹陷处',
    common: ['肩胛疼痛', '气喘', '乳痈'],
    method: '拇指按揉肩胛部至酸胀',
    pos: [0.7, 0.54, -0.3]
  },
  shousanli: {
    name: '手三里',
    pinyin: 'Shǒusānlǐ',
    meridian: '手阳明大肠经',
    location: '曲池穴下2寸，前臂背面桡侧缘',
    common: ['肩臂痛', '上肢不遂', '腹痛泄泻', '齿痛'],
    method: '拇指按揉1分钟',
    pos: [-0.64, 0.36, 0.16]
  },
  yangchi: {
    name: '阳池',
    pinyin: 'Yángchí',
    meridian: '手少阳三焦经',
    location: '腕背横纹中，指总伸肌腱尺侧缘凹陷处',
    common: ['腕关节痛', '消渴', '疟疾', '耳聋'],
    method: '拇指按揉腕背',
    pos: [-0.5, 0.32, -0.1]
  },
  yangxi: {
    name: '阳溪',
    pinyin: 'Yángxī',
    meridian: '手阳明大肠经',
    location: '腕背横纹桡侧，拇短伸肌腱与拇长伸肌腱之间凹陷处',
    common: ['头痛', '目赤', '齿痛', '腕痛', '咽喉肿痛'],
    method: '拇指按揉1分钟',
    pos: [-0.52, 0.32, -0.05]
  },
  shangyang: {
    name: '商阳',
    pinyin: 'Shāngyáng',
    meridian: '手阳明大肠经',
    location: '食指桡侧指甲角旁0.1寸',
    common: ['咽喉肿痛', '齿痛', '耳聋', '热病昏迷'],
    method: '指甲掐按或点压',
    pos: [-0.5, 0.05, 0.1]
  },
  shaoshang: {
    name: '少商',
    pinyin: 'Shàoshāng',
    meridian: '手太阴肺经',
    location: '拇指桡侧指甲角旁0.1寸',
    common: ['咽喉肿痛', '咳嗽', '发热', '昏迷急救'],
    method: '指甲掐按或点压',
    caution: '指尖放血须在医师指导下进行',
    pos: [-0.44, 0.04, 0.1]
  },
  zhongchong: {
    name: '中冲',
    pinyin: 'Zhōngchōng',
    meridian: '手厥阴心包经',
    location: '中指尖端中央',
    common: ['昏迷', '中暑', '热病', '心烦心痛', '小儿惊风'],
    method: '掐按或点压',
    pos: [-0.5, 0.03, 0.08]
  },
  laogong: {
    name: '劳宫',
    pinyin: 'Láogōng',
    meridian: '手厥阴心包经',
    location: '掌心横纹中，第2、3掌骨之间偏于第3掌骨',
    common: ['口疮', '心烦', '心悸', '手掌热', '中暑'],
    method: '拇指与中指相对揉按掌心',
    pos: [-0.5, 0.06, 0.18]
  },
  ximen: {
    name: '郄门',
    pinyin: 'Xìmén',
    meridian: '手厥阴心包经',
    location: '腕横纹上5寸，掌长肌腱与桡侧腕屈肌腱之间',
    common: ['心痛', '心悸', '呕血', '咳血', '胸痛'],
    method: '拇指按揉1–2分钟',
    pos: [-0.5, 0.44, 0.18]
  },
  quze: {
    name: '曲泽',
    pinyin: 'Qūzé',
    meridian: '手厥阴心包经',
    location: '肘横纹中，肱二头肌腱尺侧缘凹陷处',
    common: ['心痛', '胃痛呕吐', '热病', '肘臂挛痛'],
    method: '拇指按揉1分钟',
    pos: [-0.62, 0.42, 0.12]
  },
  taiyuan: {
    name: '太渊',
    pinyin: 'Tàiyuān',
    meridian: '手太阴肺经',
    location: '腕掌侧横纹桡侧端，桡动脉搏动处',
    common: ['咳嗽', '气喘', '胸痛', '腕痛', '无脉症'],
    method: '拇指轻揉1分钟',
    caution: '穴近桡动脉，按揉宜轻',
    pos: [-0.52, 0.4, 0.1]
  },
  yuji: {
    name: '鱼际',
    pinyin: 'Yújì',
    meridian: '手太阴肺经',
    location: '第1掌骨中点桡侧，赤白肉际处',
    common: ['咳嗽', '咳血', '咽喉肿痛', '发热'],
    method: '拇指指腹按揉',
    pos: [-0.48, 0.1, 0.16]
  },
  kunlun: {
    name: '昆仑',
    pinyin: 'Kūnlún',
    meridian: '足太阳膀胱经',
    location: '外踝尖与跟腱之间的凹陷处',
    common: ['腰痛', '颈项强痛', '足踝肿痛', '头痛', '难产'],
    method: '拇指按揉1分钟',
    caution: '孕妇禁用',
    pos: [0.5, 0.12, -0.4]
  },
  shenmai: {
    name: '申脉',
    pinyin: 'Shēnmài',
    meridian: '足太阳膀胱经',
    location: '外踝直下方凹陷中',
    common: ['头痛眩晕', '失眠', '癫痫', '腰腿痛', '足踝痛'],
    method: '拇指按揉1分钟',
    pos: [0.5, 0.08, -0.38]
  },
  zhaohai: {
    name: '照海',
    pinyin: 'Zhàohǎi',
    meridian: '足少阴肾经',
    location: '内踝尖直下方凹陷处',
    common: ['失眠', '咽干咽痛', '月经不调', '小便不利', '目赤肿痛'],
    method: '拇指按揉1分钟',
    pos: [0.5, 0.08, 0.38]
  },
  fuliu: {
    name: '复溜',
    pinyin: 'Fùliū',
    meridian: '足少阴肾经',
    location: '太溪穴直上2寸，跟腱前缘',
    common: ['水肿', '盗汗', '泄泻', '腰脊强痛', '汗出不止'],
    method: '拇指按揉1分钟',
    pos: [0.5, 0.18, 0.4]
  },
  shuiquan: {
    name: '水泉',
    pinyin: 'Shuǐquán',
    meridian: '足少阴肾经',
    location: '太溪穴直下1寸',
    common: ['月经不调', '痛经', '小便不利', '足跟痛'],
    method: '拇指按揉1分钟',
    pos: [0.5, 0.08, 0.4]
  },
  huantiao: {
    name: '环跳',
    pinyin: 'Huántiào',
    meridian: '足少阳胆经',
    location: '侧卧屈股，股骨大转子最凸点与骶管裂孔连线的外1/3与中1/3交点处',
    common: ['腰胯疼痛', '坐骨神经痛', '下肢痿痹', '半身不遂'],
    method: '握拳以拳峰按揉，或卧姿肘压，力度适中',
    pos: [0.5, 0.25, -0.08]
  },
  fengshi: {
    name: '风市',
    pinyin: 'Fēngshì',
    meridian: '足少阳胆经',
    location: '大腿外侧正中，腘横纹上7寸，直立垂手时中指端处',
    common: ['下肢痿痹', '腿膝酸痛', '遍身瘙痒', '半身不遂'],
    method: '握拳以拳峰叩按大腿外侧',
    pos: [0.52, 0.32, -0.2]
  },
  xiyan: {
    name: '犊鼻',
    pinyin: 'Dúbí',
    meridian: '足阳明胃经',
    location: '屈膝，髌韧带外侧凹陷中',
    common: ['膝痛', '屈伸不利', '下肢痿痹'],
    method: '拇指或掌根按揉膝部',
    pos: [0.42, 0.34, -0.35]
  },
  lidui: {
    name: '厉兑',
    pinyin: 'Lìduì',
    meridian: '足阳明胃经',
    location: '第2趾外侧趾甲角旁0.1寸',
    common: ['齿痛', '面肿', '口眼歪斜', '鼻衄', '热病'],
    method: '掐按或点压',
    pos: [0.3, 0.02, -0.3]
  },
  neiting: {
    name: '内庭',
    pinyin: 'Nèitíng',
    meridian: '足阳明胃经',
    location: '足背，第2、3趾间，趾蹼缘后方赤白肉际处',
    common: ['齿痛', '咽喉肿痛', '口歪', '胃痛腹胀', '泄泻'],
    method: '拇指与食指相对掐按',
    pos: [0.32, 0.04, -0.28]
  },
  qiuxu: {
    name: '丘墟',
    pinyin: 'Qiūxū',
    meridian: '足少阳胆经',
    location: '外踝前下方，趾长伸肌腱外侧凹陷中',
    common: ['颈项痛', '胸胁痛', '腰痛', '踝关节痛', '偏头痛'],
    method: '拇指按揉1分钟',
    pos: [0.52, 0.1, -0.35]
  },
  zulinqi: {
    name: '足临泣',
    pinyin: 'Zúlínqì',
    meridian: '足少阳胆经',
    location: '第4、5跖骨结合部前方，小趾伸肌腱外侧凹陷中',
    common: ['偏头痛', '目赤', '胁痛', '乳痈', '足跗肿痛'],
    method: '拇指按揉1分钟',
    pos: [0.4, 0.06, -0.32]
  }
}

export const acupointList = Object.keys(acupoints).map((id) => ({
  id,
  ...acupoints[id]
}))

export const MERIDIAN_COLOR = {
  督脉: '#c0392b',
  任脉: '#8e44ad',
  手太阴肺经: '#2980b9',
  手阳明大肠经: '#f39c12',
  足阳明胃经: '#f1c40f',
  足太阴脾经: '#e67e22',
  手少阴心经: '#e74c3c',
  手太阳小肠经: '#27ae60',
  足太阳膀胱经: '#2c3e50',
  足少阴肾经: '#34495e',
  手厥阴心包经: '#9b59b6',
  手少阳三焦经: '#16a085',
  足少阳胆经: '#d35400',
  足厥阴肝经: '#1abc9c',
  经外奇穴: '#7f8c8d'
}