/**
 * 问诊部位（Region）：用于「岐黄问诊」第一步之人体选部位。
 * region3D: 与Atlas 3D人体模型对应分组，供高亮。
 */
export const regions = [
  {
    id: 'tou',
    name: '头部',
    desc: '头痛、眩晕、头胀',
    icon: 'head',
    anchors: ['baihui', 'tshang', 'fengchi'],
    region3D: 'head'
  },
  {
    id: 'yan',
    name: '目',
    desc: '眼干涩、视物模糊、目赤',
    icon: 'eye',
    anchors: ['jingming', 'zanzhu', 'tshang'],
    region3D: 'head'
  },
  {
    id: 'er',
    name: '耳',
    desc: '耳鸣、听力下降',
    icon: 'ear',
    anchors: ['tinggong', 'yifeng', 'taixi'],
    region3D: 'head'
  },
  {
    id: 'bqm',
    name: '鼻咽喉口腔',
    desc: '鼻塞流涕、咽痛声哑、口苦口疮',
    icon: 'mouth',
    anchors: ['yingxiang', 'tiantu', 'hegu'],
    region3D: 'head'
  },
  {
    id: 'jingjian',
    name: '颈肩',
    desc: '颈项酸痛、肩背沉重',
    icon: 'neck',
    anchors: ['fengchi', 'jianjing', 'dazhui'],
    region3D: 'neck'
  },
  {
    id: 'xiongxie',
    name: '胸胁',
    desc: '胸闷、心悸、胁痛',
    icon: 'chest',
    anchors: ['q_que', 'qimen', 'neiguan'],
    region3D: 'chest'
  },
  {
    id: 'weiwan',
    name: '胃脘',
    desc: '胃痛、胃胀、反酸嗳气、食欲不振',
    icon: 'stomach',
    anchors: ['zhongwan', 'weishu', 'zusanli'],
    region3D: 'abdomen'
  },
  {
    id: 'fubu',
    name: '脘腹',
    desc: '腹痛、腹胀、腹泻、便秘',
    icon: 'abdomen',
    anchors: ['shenque', 'guanyuan', 'zusanli', 'sanyinjiao'],
    region3D: 'abdomen'
  },
  {
    id: 'yaobei',
    name: '腰背',
    desc: '腰痛、腰膝酸软、背痛',
    icon: 'back',
    anchors: ['shenshu', 'mingmen', 'dazhui', 'weizhong'],
    region3D: 'back'
  },
  {
    id: 'sizhi',
    name: '四肢关节',
    desc: '肢体麻木、关节痛、手足冰凉',
    icon: 'limb',
    anchors: ['hegu', 'zusanli', 'sanyinjiao', 'weizhong', 'taixi'],
    region3D: 'limbs'
  },
  {
    id: 'pifu',
    name: '皮肤',
    desc: '瘙痒、湿疹、荨麻疹',
    icon: 'skin',
    anchors: ['hegu', 'quchi', 'xuehai'],
    region3D: 'skin'
  },
  {
    id: 'shuimian',
    name: '睡眠',
    desc: '失眠、多梦、易醒、嗜睡',
    icon: 'sleep',
    anchors: ['shenmen', 'baihui', 'yongquan', 'neiguan'],
    region3D: 'head'
  },
  {
    id: 'qingzhi',
    name: '情志',
    desc: '易怒、焦虑、抑郁善太息',
    icon: 'mind',
    anchors: ['neiguan', 'ganshu', 'taichong'],
    region3D: 'head'
  },
  {
    id: 'chuhan',
    name: '出汗',
    desc: '自汗、盗汗、汗多黏腻',
    icon: 'sweat',
    anchors: ['qihai', 'feiyuan', 'hegu'],
    region3D: 'whole'
  },
  {
    id: 'quanshen',
    name: '全身状态',
    desc: '疲乏无力、气短、低热、头晕',
    icon: 'whole',
    anchors: ['qihai', 'zusanli', 'xuehai'],
    region3D: 'whole'
  },
  {
    id: 'daobian',
    name: '二便',
    desc: '便秘、泄泻、夜尿多',
    icon: 'bowel',
    anchors: ['shenshu', 'guanyuan', 'zusanli', 'sanyinjiao'],
    region3D: 'abdomen'
  },
  {
    id: 'jingluo',
    name: '经络不通',
    desc: '舌下络脉、青筋、怕冷刺痛',
    icon: 'meridian',
    anchors: ['hegu', 'weizhong', 'xuehai'],
    region3D: 'whole'
  },
  {
    id: 'nvxing',
    name: '女性',
    desc: '月经不调、痛经、带下',
    icon: 'female',
    anchors: ['sanyinjiao', 'guanyuan', 'qihai', 'xuehai'],
    region3D: 'abdomen'
  }
]

export const regionMap = Object.fromEntries(regions.map((r) => [r.id, r]))