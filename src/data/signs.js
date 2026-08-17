/**
 * 补充体征题（第二步）：作用是将诊断模式加权。
 * 每个选项携带 traits（特质贡献值），由规则引擎累加匹配证型。
 */
export const signGroups = [
  {
    id: 'duration',
    title: '首发至今多久了？',
    hint: '帮助区分急症、新病与久病',
    multi: false,
    options: [
      { label: '今天/一两天内', traits: { acute: 1 } },
      { label: '一周以内', traits: { acute: 0.6, subacute: 0.4 } },
      { label: '一到四周', traits: { subacute: 1 } },
      { label: '一个月以上', traits: { chronic: 1 } }
    ]
  },
  {
    id: 'temperature',
    title: '冷热感受',
    hint: '看是否恶寒畏冷或恶热喜冷',
    multi: false,
    options: [
      { label: '怕冷、遇冷加重、喜热饮', traits: { coldLikeWarm: 1, aversionCold: 1 } },
      { label: '怕热、喜凉饮、喜冷', traits: { heatLikeCool: 1, aversionHeat: 1 } },
      { label: '手足心发热、心烦、盗汗', traits: { fiveVexHeat: 1, nightSweat: 0.5 } },
      { label: '不明显的冷热感', traits: {} }
    ]
  },
  {
    id: 'painNature',
    title: '疼痛/胀满的性质（可多选）',
    hint: '按、揉、捂、热敷会有不同效果',
    multi: true,
    options: [
      { label: '胀痛、窜痛、善太息（叹气舒服）', traits: { distendingPain: 1, sighing: 0.6 } },
      { label: '隐痛、喜按、劳累后加重', traits: { emptyPain: 1, fatigable: 0.4 } },
      { label: '刺痛、痛处固定、拒按', traits: { stabbingPain: 1 } },
      { label: '冷痛、遇冷加重、喝热水舒服', traits: { coldPain: 1, coldLikeWarm: 0.8 } },
      { label: '灼痛、口干口苦', traits: { burningPain: 1, dryBitterMouth: 0.6 } },
      { label: '走窜痛、随时间或情绪波动加重', traits: { wanderingPain: 1, moodSensitive: 0.6 } }
    ]
  },
  {
    id: 'tongue',
    title: '舌象（照镜子看舌头）',
    hint: '平和舌淡红、薄白苔',
    multi: false,
    options: [
      { label: '舌淡红、薄白苔（正常）', traits: {} },
      { label: '舌淡白、边有齿痕', traits: { paleTongue: 1, teethMark: 0.8 } },
      { label: '舌红、少苔', traits: { redTongue: 1, lessCoating: 0.6 } },
      { label: '舌胖、苔白滑或白腻', traits: { greasyTongue: 1, paleTongue: 0.6 } },
      { label: '舌红、苔黄厚', traits: { yellowTongue: 1, greasyTongue: 0.6 } },
      { label: '舌紫暗或有瘀点、舌下络脉粗', traits: { purpleTongue: 1, stasis: 0.8 } }
    ]
  },
  {
    id: 'sleep',
    title: '睡眠情况（可多选）',
    hint: '入睡难、易醒、多梦……',
    multi: true,
    options: [
      { label: '入睡困难、心烦不寐', traits: { insomnia: 1, restless: 0.6 } },
      { label: '多梦、易惊醒', traits: { dreaming: 1 } },
      { label: '醒后疲乏、白天嗜睡', traits: { sleepiness: 1, fatigable: 0.4 } },
      { label: '睡眠尚可', traits: {} }
    ]
  },
  {
    id: 'bowel',
    title: '大便情况（可多选）',
    hint: '近1–2周较常见的大便状况',
    multi: true,
    options: [
      { label: '大便稀溏、不成形', traits: { looseStool: 1 } },
      { label: '便秘、大便干硬', traits: { constipation: 1 } },
      { label: '肠鸣、泻前腹痛', traits: { borborygmus: 1, looseStool: 0.5 } },
      { label: '晨起五更泄泻', traits: { dawnDiarrhea: 1, coldLikeWarm: 0.5 } },
      { label: '正常', traits: {} }
    ]
  },
  {
    id: 'emotionStress',
    title: '近期情绪与压力（可多选）',
    hint: '情志与肝、心关系最密切',
    multi: true,
    options: [
      { label: '易怒、烦躁', traits: { irritable: 1 } },
      { label: '忧思、焦虑、爱叹气', traits: { anxiety: 1, sighing: 0.6 } },
      { label: '闷闷不乐、情绪低落', traits: { lowMood: 1 } },
      { label: '压力大、常熬夜', traits: { lateNight: 1 } },
      { label: '情绪平稳', traits: {} }
    ]
  },
  {
    id: 'energy',
    title: '精力与体力（可多选）',
    hint: '日常的精力和行动力',
    multi: true,
    options: [
      { label: '容易疲倦、气短懒言', traits: { fatigue: 1, shortBreath: 0.6 } },
      { label: '说话声音低、稍动即累', traits: { fatigue: 1, weakSpeech: 0.8 } },
      { label: '四肢沉重、困倦、身子重', traits: { heaviness: 1, dampness: 0.8 } },
      { label: '精神尚可', traits: {} }
    ]
  },
  {
    id: 'thirst',
    title: '口渴饮水情况',
    hint: '帮助区分津液与燥热',
    multi: false,
    options: [
      { label: '口不渴、不思饮', traits: { noThirst: 1 } },
      { label: '口干喜温饮', traits: { dryMouth: 1, coldLikeWarm: 0.5 } },
      { label: '口干喜冷饮', traits: { dryMouth: 1, heatLikeCool: 0.6 } },
      { label: '口渴但不多饮', traits: { dryAdipsia: 1, dampness: 0.4 } }
    ]
  }
]

export const signGroupMap = Object.fromEntries(signGroups.map((g) => [g.id, g]))