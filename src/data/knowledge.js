/**
 * 规则库（knowledge）：部位 → 症状 → 候选证型及权重。
 * weight 反映该症状指向证型的倾向强度（0–1），由引擎累加并按体征 traits 微调。
 */
export const knowledge = {
  tou: [
    { id: 'tou_tong', name: '头痛', desc: '头部疼痛', patterns: { ganyang: 0.7, ganxuexu: 0.5, qixueliangxu: 0.6, xueyu: 0.5, shizhu: 0.35 } },
    { id: 'tou_xuanyun', name: '眩晕', desc: '天旋地转或头重脚轻', patterns: { ganyang: 0.8, jingkui: 0.7, qixueliangxu: 0.7, shizhu: 0.5, tanhuo: 0.45 } },
    { id: 'tou_touzhang', name: '头胀痛', desc: '胀痛随情绪或日间加重', patterns: { ganyang: 0.9, ganyu: 0.6 } },
    { id: 'tou_touzhong', name: '头重如裹', desc: '头重昏沉如布裹', patterns: { shizhu: 0.9, shire: 0.6, tanhuo: 0.5 } },
    { id: 'tou_fengtong', name: '头风痛', desc: '头痛遇风加重、走窜不定', patterns: { fengxie: 0.7, xueyu: 0.5, ganyu: 0.5 } },
    { id: 'tou_piantong', name: '偏头痛', desc: '偏侧头痛、随情绪或经期发作', patterns: { ganyu: 0.7, ganyang: 0.6, ganxuexu: 0.5, xueyu: 0.5 } },
    { id: 'tou_houding', name: '后枕痛', desc: '后枕部疼痛、项背牵掣', patterns: { shenyang: 0.6, jingkui: 0.5, hanxie: 0.5, xueyu: 0.4 } },
    { id: 'tou_dingtong', name: '巅顶痛', desc: '头顶胀痛、巅顶尤甚', patterns: { ganyang: 0.7, ganyu: 0.5, hanxie: 0.5 } },
    { id: 'tou_xuanyan', name: '头晕耳鸣', desc: '头晕目眩并伴耳鸣、腰膝酸软', patterns: { jingkui: 0.8, shenyinxu: 0.7, shenyang: 0.5 } },
    { id: 'tou_zhangzhao', name: '头胀烦躁', desc: '头胀而烦、面红目赤', patterns: { ganyang: 0.8, ganhuo: 0.6, tanhuo: 0.5 } },
    { id: 'tou_xuanhua', name: '头晕眼花', desc: '头晕眼花、劳累即发', patterns: { qixueliangxu: 0.7, ganxuexu: 0.6, ganyinxu: 0.5 } }
  ],
  yan: [
    { id: 'yan_gar', name: '眼干涩', desc: '眼干眼涩、视物易疲劳', patterns: { ganxuexu: 0.8, shenyinxu: 0.6, shire: 0.35 } },
    { id: 'yan_mohu', name: '视物模糊', desc: '看东西不清、易花', patterns: { ganxuexu: 0.85, jingkui: 0.7 } },
    { id: 'yan_chong', name: '目赤肿痛', desc: '眼白充血、肿痛畏光', patterns: { ganyang: 0.7, shire: 0.7, fengre: 0.5 } },
    { id: 'yan_lei', name: '迎风流泪', desc: '见风流泪、目痒', patterns: { shizhu: 0.55, shenyinxu: 0.5, ganxuexu: 0.45 } },
    { id: 'yan_suanzhang', name: '眼酸胀', desc: '眼胀酸涩、久视加剧', patterns: { ganxuexu: 0.6, shenyinxu: 0.5, ganyang: 0.4 } },
    { id: 'yan_yang', name: '目痒', desc: '目痒难忍、遇风更甚', patterns: { fengre: 0.6, ganxuexu: 0.5, shire: 0.5 } },
    { id: 'yan_zhu', name: '眼内发胀', desc: '眼球胀痛、目胀欲脱', patterns: { ganyang: 0.8, ganshire: 0.6, ganhuo: 0.6 } },
    { id: 'yan_weiguang', name: '眼干畏光', desc: '眼干涩、畏光少泪', patterns: { ganyinxu: 0.7, shenyinxu: 0.6, ganxuexu: 0.5 } },
    { id: 'yan_shidao', name: '眼分泌物多', desc: '眼眵黄稠、晨起封目', patterns: { ganshire: 0.7, shire: 0.6, ganhuo: 0.6 } }
  ],
  er: [
    { id: 'er_chan', name: '耳鸣如蝉', desc: '耳鸣声细如蝉鸣、夜静加重', patterns: { jingkui: 0.85, shenyinxu: 0.8, ganyang: 0.45 } },
    { id: 'er_hong', name: '耳鸣轰响', desc: '耳鸣声大如雷响、随情绪加重', patterns: { ganyang: 0.75, tanhuo: 0.6, shire: 0.5 } },
    { id: 'er_xialai', name: '听力下降', desc: '同时伴腰酸健忘', patterns: { jingkui: 0.85, shenyang: 0.6 } },
    { id: 'er_tong', name: '耳痛', desc: '耳内疼痛、按压加重', patterns: { ganshire: 0.6, shire: 0.6, fengre: 0.5 } },
    { id: 'er_liunong', name: '耳流脓', desc: '耳内流脓、黏稠臭秽', patterns: { ganshire: 0.7, shire: 0.6, shirexiazhu: 0.5 } },
    { id: 'er_wengweng', name: '耳内嗡鸣', desc: '耳内嗡嗡作响、头重如裹', patterns: { shizhu: 0.7, tanhuo: 0.6, ganyang: 0.5 } },
    { id: 'er_menzhan', name: '耳闭发闷', desc: '耳内闷胀堵塞感、听力欠清', patterns: { shizhu: 0.6, tanqijiaozu: 0.6, ganyu: 0.5 } },
    { id: 'er_long', name: '耳聋', desc: '耳聋渐重、伴腰酸健忘', patterns: { jingkui: 0.9, shenyinxu: 0.7, shenyang: 0.5 } }
  ],
  bqm: [
    { id: 'bqm_qingti', name: '鼻塞流清涕', desc: '鼻塞、流清稀涕、恶寒', patterns: { fengxie: 0.85, feiqixu: 0.7 } },
    { id: 'bqm_huangti', name: '鼻塞流黄涕', desc: '鼻塞、流黄稠涕、口渴', patterns: { fengre: 0.9, shire: 0.5 } },
    { id: 'bqm_yantong', name: '咽喉疼痛', desc: '咽痛咽干、吞咽不舒', patterns: { fengre: 0.9, yinxu: 0.5, shire: 0.5 } },
    { id: 'bqm_yasang', name: '声音嘶哑', desc: '说话声哑、咽干', patterns: { feiqixu: 0.6, yinxu: 0.55, fengre: 0.5 } },
    { id: 'bqm_kuchong', name: '口苦口干', desc: '晨起口苦、口干黏', patterns: { shire: 0.9, ganyang: 0.7 } },
    { id: 'bqm_shengchuang', name: '口舌生疮', desc: '口腔或舌尖生疮、灼痛', patterns: { yinxu: 0.7, xinshenbujiao: 0.65, shire: 0.5 } },
    { id: 'bqm_ganke', name: '干咳', desc: '干咳少痰、咽痒口燥', patterns: { zaoxiefanfei: 0.7, feiyinxu: 0.7, weiyinxu: 0.5 } },
    { id: 'bqm_keke', name: '咳嗽痰多', desc: '咳嗽痰白量多、咳出为快', patterns: { tanshiyunfei: 0.8, shizhu: 0.6, piqixu: 0.5 } },
    { id: 'bqm_huangke', name: '咳嗽痰黄', desc: '咳嗽痰黄黏稠、气味腥臭', patterns: { tanreyongfei: 0.9, shire: 0.5 } },
    { id: 'bqm_houyang', name: '咽痒', desc: '咽痒如蚁行、刺激即咳', patterns: { fengre: 0.6, zaoxiefanfei: 0.6, feiyinxu: 0.5 } },
    { id: 'bqm_meihe', name: '咽喉异物感', desc: '咽中异物感、吞之不下吐之不出', patterns: { tanqijiaozu: 0.8, ganyu: 0.6, weiyinxu: 0.4 } }
  ],
  jingjian: [
    { id: 'jingjian_jiang', name: '颈项酸痛', desc: '颈项僵硬酸痛、转头不灵', patterns: { shizhu: 0.7, xueyu: 0.6, hanxie: 0.6 } },
    { id: 'jingjian_zhonghu', name: '肩背沉重', desc: '肩背如负重物、困重', patterns: { shizhu: 0.85, piqixu: 0.6 } },
    { id: 'jingjian_leng', name: '颈肩怕冷', desc: '颈肩发凉、遇冷加重', patterns: { hanxie: 0.8, shenyang: 0.55 } },
    { id: 'jingjian_zhangtong', name: '颈项胀痛', desc: '颈项胀痛、活动受限', patterns: { xueyu: 0.6, ganyu: 0.5, hanxie: 0.5 } },
    { id: 'jingjian_ying', name: '颈肩僵硬', desc: '颈肩发僵发板、转动不利', patterns: { xueyu: 0.6, hanxie: 0.6, shizhu: 0.5 } },
    { id: 'jingjian_fama', name: '颈肩发麻', desc: '颈肩及手臂发麻、指端麻木', patterns: { shiChan: 0.8, xueyu: 0.6, ganxuexu: 0.5 } },
    { id: 'jingjian_qianla', name: '项背牵拉', desc: '项背牵拉作痛、低头加重', patterns: { hanxie: 0.6, shenyang: 0.5, xueyu: 0.5 } },
    { id: 'jingjian_pafeng', name: '颈肩怕风', desc: '颈肩怕风、受风即痛', patterns: { weiqiruo: 0.6, hanxie: 0.6, shenyang: 0.5 } },
    { id: 'jingjian_chenzhong', name: '头项沉重', desc: '头项沉重、昏蒙不清', patterns: { shizhu: 0.8, shushi: 0.6, tanhuo: 0.5 } }
  ],
  xiongxie: [
    { id: 'xiong_men', name: '胸闷', desc: '胸口发闷、呼吸不畅', patterns: { shizhu: 0.7, tanhuo: 0.7, ganyu: 0.6, xinpiliangxu: 0.5 } },
    { id: 'xiong_ji', name: '心悸心慌', desc: '心跳心慌、动则更甚', patterns: { xinpiliangxu: 0.8, xinshenbujiao: 0.75, qixueliangxu: 0.7, tanhuo: 0.6 } },
    { id: 'xiong_xietong', name: '胁肋胀闷', desc: '两胁胀痛、叹气则舒', patterns: { ganyu: 0.9, xueyu: 0.6 } },
    { id: 'xiong_yintong', name: '胸膺隐痛', desc: '胸部固定隐痛、夜间明显', patterns: { xueyu: 0.75, qixueliangxu: 0.6 } },
    { id: 'xiong_menduan', name: '胸闷气短', desc: '胸闷短气、动则加剧', patterns: { feiqixu: 0.7, qixueliangxu: 0.6, xinyangxu: 0.5 } },
    { id: 'xiong_tanmen', name: '痰多胸闷', desc: '胸闷咳痰、痰白量多', patterns: { tanshiyunfei: 0.8, shizhu: 0.6, tanqijiaozu: 0.5 } },
    { id: 'xiong_xici', name: '胁痛如刺', desc: '胁部刺痛、痛处固定', patterns: { xueyu: 0.8, ganyu: 0.5 } },
    { id: 'xiong_xiezhang', name: '胁下走窜', desc: '胁下胀痛走窜、叹气则舒', patterns: { ganyu: 0.9, xueyu: 0.5 } },
    { id: 'xiong_xinhuang', name: '心慌气短', desc: '心慌气促、动辄明显', patterns: { qixueliangxu: 0.7, xinpiliangxu: 0.7, xinyangxu: 0.5, feiqixu: 0.4 } },
    { id: 'xiong_menci', name: '胸前闷痛', desc: '胸前闷痛、时作时止', patterns: { xueyu: 0.7, tanhuo: 0.6, xinyangxu: 0.5 } }
  ],
  weiwan: [
    { id: 'wei_lengtong', name: '胃部冷痛', desc: '胃脘冷痛、喜温喜按', patterns: { hanweihan: 0.9, shenyang: 0.4 } },
    { id: 'wei_yintong', name: '胃脘隐痛', desc: '隐痛绵绵、喜按、劳累加重', patterns: { piqixu: 0.8, qixueliangxu: 0.7 } },
    { id: 'wei_zhang', name: '胃脘胀满', desc: '食后腹胀、嗳气不舒', patterns: { zhiji: 0.7, piqixu: 0.8, shizhu: 0.6 } },
    { id: 'wei_nansuan', name: '反酸嗳气', desc: '反酸、嗳气腐臭', patterns: { ganyu: 0.7, zhiji: 0.7, hanweihan: 0.5 } },
    { id: 'wei_nayan', name: '食欲不振', desc: '食欲差、口淡无味', patterns: { piqixu: 0.85, shizhu: 0.75, qixueliangxu: 0.6 } },
    { id: 'wei_shaoxin', name: '胃脘烧心', desc: '胃中灼热、烧心反酸', patterns: { weire: 0.8, weiyinxu: 0.7, ganweibuhe: 0.5 } },
    { id: 'wei_oxiang', name: '恶心欲吐', desc: '恶心反胃、吐之不出', patterns: { ganyu: 0.6, ganweibuhe: 0.6, shizhu: 0.5 } },
    { id: 'wei_fangqing', name: '口泛清水', desc: '口中泛清水、吐清水涎', patterns: { hanweihan: 0.8, piqixu: 0.6, shenyang: 0.5 } },
    { id: 'wei_caoza', name: '胃脘嘈杂', desc: '胃中嘈杂、似饥非饥', patterns: { weiyinxu: 0.7, weire: 0.6, ganweibuhe: 0.5 } },
    { id: 'wei_pitong', name: '胃脘刺痛', desc: '胃脘刺痛、固定拒按', patterns: { xueyu: 0.8, hanweihan: 0.5, weire: 0.4 } },
    { id: 'wei_zhidai', name: '饭前胃痛', desc: '饥时胃痛、得食则缓', patterns: { piqixu: 0.7, qixueliangxu: 0.6, weiyinxu: 0.5 } }
  ],
  fubu: [
    { id: 'fu_zhang', name: '腹胀', desc: '腹部胀满、排气后减轻', patterns: { shizhu: 0.8, piqixu: 0.7, ganyu: 0.7 } },
    { id: 'fu_xie', name: '腹泻便溏', desc: '大便稀溏、一日数次', patterns: { piqixu: 0.7, shizhu: 0.7, shenyang: 0.65 } },
    { id: 'fu_wugeng', name: '晨起泄泻', desc: '天亮前后即欲腹泻、怕冷', patterns: { shenyang: 0.9, piqixu: 0.5 } },
    { id: 'fu_bianmi', name: '便秘', desc: '大便干结、数日一行', patterns: { yinxu: 0.7, shire: 0.6, xueyu: 0.6, qixueliangxu: 0.5 } },
    { id: 'fu_tong', name: '腹痛', desc: '腹部胀痛、按之疼痛', patterns: { hanweihan: 0.6, shizhu: 0.6, ganyu: 0.6 } },
    { id: 'fu_changming', name: '肠鸣', desc: '腹中肠鸣、辘辘有声', patterns: { shizhu: 0.7, piqixu: 0.6, shenyang: 0.5 } },
    { id: 'fu_lihou', name: '里急后重', desc: '便意频频、下坠不爽', patterns: { dachangshire: 0.8, shire: 0.7, shirexiazhu: 0.5 } },
    { id: 'fu_qizhou', name: '脐周隐痛', desc: '脐周隐痛、喜温喜按', patterns: { hanweihan: 0.7, piqixu: 0.6, qixueliangxu: 0.5 } },
    { id: 'fu_zhuizhang', name: '腹部坠胀', desc: '腹部坠胀、久立加重', patterns: { zhongqixiaxian: 0.9, piqixu: 0.7 } },
    { id: 'fu_shiji', name: '食积腹胀', desc: '食后腹胀、嗳腐吞酸', patterns: { zhiji: 0.9, shizhu: 0.5, piqixu: 0.4 } },
    { id: 'fu_piman', name: '心下痞满', desc: '心下痞闷、按之不痛', patterns: { piqixu: 0.7, shizhu: 0.7, ganyu: 0.5 } }
  ],
  yaobei: [
    { id: 'yao_lengtong', name: '腰痛遇冷', desc: '腰部冷痛、遇寒加重', patterns: { shenyang: 0.8, hanxie: 0.7, xueyu: 0.6 } },
    { id: 'yao_yintong', name: '腰酸隐痛', desc: '腰部酸软隐痛、劳累加重', patterns: { jingkui: 0.8, shenyinxu: 0.8, ganxuexu: 0.4 } },
    { id: 'yao_ci', name: '腰部刺痛', desc: '痛处固定如针刺、拒按', patterns: { xueyu: 0.9 } },
    { id: 'yao_beizhong', name: '背部沉重', desc: '肩背困重发凉', patterns: { shizhu: 0.7, piqixu: 0.5, shenyang: 0.55 } },
    { id: 'yao_suanruan', name: '腰膝酸软', desc: '腰膝酸软、腿足乏力', patterns: { jingkui: 0.8, shenyang: 0.7, shenyinxu: 0.6 } },
    { id: 'yao_suanchen', name: '腰部酸沉', desc: '腰部酸重、困重如裹', patterns: { shizhu: 0.7, shenyang: 0.6, jingkui: 0.5 } },
    { id: 'yao_yintian', name: '腰骶酸痛', desc: '腰骶酸痛、劳累加重', patterns: { jingkui: 0.7, shenyang: 0.6, xueyu: 0.5 } },
    { id: 'yao_ying', name: '腰脊僵硬', desc: '腰脊发僵、晨起明显', patterns: { hanxie: 0.6, shenyang: 0.6, xueyu: 0.5 } },
    { id: 'yao_faliang', name: '腰膝发凉', desc: '腰膝发凉、喜暖畏冷', patterns: { shenyang: 0.9, hanxie: 0.6, yinyangliangxu: 0.5 } },
    { id: 'yao_zhuanche', name: '转侧不利', desc: '腰部转侧不利、活动受限', patterns: { xueyu: 0.6, hanxie: 0.6, jingkui: 0.4 } }
  ],
  sizhi: [
    { id: 'sizhi_mamu', name: '肢体麻木', desc: '手足或肢体发麻、感迟钝', patterns: { shiChan: 0.8, xueyu: 0.7, hanxie: 0.6, ganxuexu: 0.6 } },
    { id: 'sizhi_guanjie', name: '关节冷痛', desc: '关节冷痛、屈伸不灵', patterns: { hanxie: 0.9, shenyang: 0.6, hanshi: 0.5 } },
    { id: 'sizhi_bingliang', name: '手足冰凉', desc: '手脚发凉、入冬明显', patterns: { qixueliangxu: 0.8, shenyang: 0.8, hanweihan: 0.5 } },
    { id: 'sizhi_edema', name: '下肢浮肿', desc: '下午或劳累后下肢浮肿', patterns: { shizhu: 0.8, piqixu: 0.7, shenyang: 0.6 } },
    { id: 'sizhi_redswollen', name: '关节红肿', desc: '关节红肿热痛、屈伸不利', patterns: { shirebi: 0.9, shire: 0.7, ganyang: 0.3 } },
    { id: 'sizhi_suanruan', name: '四肢酸软', desc: '肢体酸软无力、困重疲乏', patterns: { piqixu: 0.7, qixueliangxu: 0.7, shizhu: 0.6 } },
    { id: 'sizhi_choujin', name: '腿抽筋', desc: '小腿夜间抽筋、痉挛疼痛', patterns: { ganxuexu: 0.7, shenyang: 0.5, jingkui: 0.4 } },
    { id: 'sizhi_hongre', name: '关节红肿', desc: '关节红肿热痛、屈伸不利', patterns: { shire: 0.7, fengre: 0.5, xueyu: 0.4 } },
    { id: 'sizhi_ying', name: '肢体僵硬', desc: '肢体僵硬、晨起尤甚', patterns: { shiChan: 0.6, xueyu: 0.6, hanxie: 0.5 } },
    { id: 'sizhi_chandon', name: '手足颤动', desc: '手足不自主颤动、时作时止', patterns: { ganyang: 0.6, ganyinxu: 0.5, ganxuexu: 0.5 } },
    { id: 'sizhi_youzou', name: '关节游走痛', desc: '关节疼痛游走不定、遇寒加重', patterns: { fengxie: 0.6, hanxie: 0.6, xueyu: 0.5 } }
  ],
  pifu: [
    { id: 'pifu_yang', name: '皮肤瘙痒', desc: '皮肤瘙痒、夜间加重', patterns: { ganxuexu: 0.8, shire: 0.7, xueyu: 0.5 } },
    { id: 'pifu_shi', name: '湿疹丘疹', desc: '皮肤起疹、渗水瘙痒', patterns: { shire: 0.9, shizhu: 0.8 } },
    { id: 'pifu_feng', name: '荨麻疹', desc: '风团时起时消、瘙痒', patterns: { shire: 0.7, ganyu: 0.6, fengre: 0.6 } },
    { id: 'pifu_tuopi', name: '皮肤脱屑', desc: '皮肤干燥脱屑、搔之掉皮', patterns: { xuexufengzao: 0.8, feiyinxu: 0.5, yinxu: 0.5 } },
    { id: 'pifu_shuipao', name: '皮肤水疱', desc: '皮肤起水疱、疱液清或黄', patterns: { shizhu: 0.6, shire: 0.6, shirexiazhu: 0.5 } },
    { id: 'pifu_hongzhen', name: '红疹成片', desc: '皮肤红疹成片、灼热瘙痒', patterns: { shire: 0.8, ganshire: 0.6, fengre: 0.5 } },
    { id: 'pifu_gan', name: '皮肤干燥', desc: '皮肤干燥、皱褶起屑', patterns: { xuexufengzao: 0.9, ganxuexu: 0.6, weiyinxu: 0.5 } },
    { id: 'pifu_jie', name: '皮下结节', desc: '皮下结节、按之滑动', patterns: { tanqijiaozu: 0.6, xueyu: 0.6, shizhu: 0.5 } },
    { id: 'pifu_ziban', name: '皮肤瘀斑', desc: '皮肤紫暗瘀斑、触之青紫', patterns: { xueyu: 0.9, hanxie: 0.5 } }
  ],
  shuimian: [
    { id: 'mian_rushu', name: '入睡困难', desc: '躺下难以入睡、心烦', patterns: { xinshenbujiao: 0.85, tanhuo: 0.8, ganyang: 0.5 } },
    { id: 'mian_duomeng', name: '多梦易醒', desc: '多梦、易惊醒、睡不解乏', patterns: { xinpiliangxu: 0.8, xinshenbujiao: 0.7, qixueliangxu: 0.5 } },
    { id: 'mian_kun', name: '白天嗜睡', desc: '白天困倦嗜睡、头脑昏沉', patterns: { shizhu: 0.85, piqixu: 0.7, qixueliangxu: 0.6 } },
    { id: 'mian_weichuo', name: '胃不和卧不安', desc: '晚间腹胀嗳气而难眠', patterns: { zhiji: 0.8, hanweihan: 0.5 } },
    { id: 'mian_zaoxing', name: '早醒', desc: '天未亮即醒、醒后难再睡', patterns: { xinshenbujiao: 0.8, qixueliangxu: 0.6, xinxuexu: 0.5 } },
    { id: 'mian_qian', name: '睡眠浅', desc: '睡眠表浅、易被惊醒', patterns: { xinpiliangxu: 0.7, qixueliangxu: 0.6, shenyang: 0.5 } },
    { id: 'mian_emeng', name: '恶梦纷纭', desc: '睡中恶梦、惊醒害怕', patterns: { xinshenbujiao: 0.7, tanhuo: 0.7, ganyang: 0.5 } },
    { id: 'mian_xinfan', name: '心烦不寐', desc: '心中烦热、彻夜辗转', patterns: { xinshenbujiao: 0.8, tanhuo: 0.7, yinxu: 0.6 } },
    { id: 'mian_shuohua', name: '睡中呓语', desc: '睡中说梦话、磨牙', patterns: { xinshenbujiao: 0.6, tanhuo: 0.5, ganyu: 0.4 } },
    { id: 'mian_bujie', name: '睡不解乏', desc: '睡醒仍困乏、意欲再卧', patterns: { qixueliangxu: 0.7, piqixu: 0.7, shizhu: 0.6 } }
  ],
  qingzhi: [
    { id: 'qing_yiyi', name: '急躁易怒', desc: '容易发怒、面红口苦', patterns: { ganyang: 0.8, tanhuo: 0.7, ganyu: 0.5 } },
    { id: 'qing_tanqi', name: '爱叹气', desc: '常不自觉地叹气才舒服', patterns: { ganyu: 0.9 } },
    { id: 'qing_yiyu', name: '情绪低落', desc: '闷闷不乐、对事提不起兴趣', patterns: { ganyu: 0.9, qixueliangxu: 0.5 } },
    { id: 'qing_hao', name: '思虑焦虑', desc: '思虑过度、心慌不宁', patterns: { xinpiliangxu: 0.8, ganyu: 0.7 } },
    { id: 'qing_kongbu', name: '恐惧易惊', desc: '无端恐惧、胆怯易惊', patterns: { xinxuexu: 0.7, xinyangxu: 0.6, qixueliangxu: 0.5 } },
    { id: 'qing_zao', name: '烦躁不安', desc: '坐立不安、心浮气躁', patterns: { ganyang: 0.7, tanhuo: 0.7, xinshenbujiao: 0.5 } },
    { id: 'qing_duoyi', name: '多疑多虑', desc: '多疑善虑、思虑不休', patterns: { xinpiliangxu: 0.7, ganyu: 0.6, qixueliangxu: 0.4 } },
    { id: 'qing_weisu', name: '精神萎靡', desc: '精神不振、无精打采', patterns: { piqixu: 0.7, shenyang: 0.6, qixueliangxu: 0.6 } },
    { id: 'qing_beishang', name: '悲忧欲哭', desc: '常悲伤欲哭、情志不舒', patterns: { ganyu: 0.7, xinpiliangxu: 0.6, feiyinxu: 0.4 } }
  ],
  chuhan: [
    { id: 'han_zihan', name: '白天自汗', desc: '不活动也出汗、动则更甚', patterns: { weiqiruo: 0.9, qixueliangxu: 0.6, piqixu: 0.6 } },
    { id: 'han_daohan', name: '夜间盗汗', desc: '睡中出汗、醒来即止', patterns: { yinxu: 0.9, shenyinxu: 0.8 } },
    { id: 'han_nian', name: '汗多黏腻', desc: '汗出黏腻、头面多汗', patterns: { shire: 0.8, shizhu: 0.8 } },
    { id: 'han_touhan', name: '头面汗出', desc: '头面多汗、汗出如珠', patterns: { shire: 0.6, ganyang: 0.6, weiqiruo: 0.5 } },
    { id: 'han_zhixinhan', name: '手足汗出', desc: '手心足心多汗、湿冷', patterns: { yinxu: 0.7, piqixu: 0.6, shizhu: 0.5 } },
    { id: 'han_xinkou', name: '心胸汗出', desc: '心口出汗、动则更甚', patterns: { xinpiliangxu: 0.7, xinxuexu: 0.6, qixueliangxu: 0.5 } },
    { id: 'han_leng', name: '冷汗', desc: '汗出而凉、汗后畏冷', patterns: { shenyang: 0.8, weiqiruo: 0.6, qixueliangxu: 0.5 } },
    { id: 'han_ban', name: '半身汗出', desc: '半身出汗、另侧无汗', patterns: { xueyu: 0.7, qixueliangxu: 0.6, hanxie: 0.5 } }
  ],
  quanshen: [
    { id: 'quan_pifa', name: '疲乏无力', desc: '易疲乏、少气懒言', patterns: { piqixu: 0.9, qixueliangxu: 0.8, shenyang: 0.6 } },
    { id: 'quan_qiduan', name: '气短', desc: '爬楼说话就接不上气', patterns: { feiqixu: 0.9, qixueliangxu: 0.7, piqixu: 0.7 } },
    { id: 'quan_lowre', name: '低热潮热', desc: '下午或夜间低热、面颊发红', patterns: { yinxu: 0.8, shenyinxu: 0.7, tanhuo: 0.4 } },
    { id: 'quan_xuanyun', name: '头昏头晕', desc: '头昏沉、起立时眼发黑', patterns: { qixueliangxu: 0.7, jingkui: 0.7, ganyang: 0.6, shizhu: 0.5 } },
    { id: 'quan_weileng', name: '畏寒怕冷', desc: '全身畏冷、四肢发凉', patterns: { shenyang: 0.9, yinyangliangxu: 0.7, qixueliangxu: 0.5 } },
    { id: 'quan_shouxiao', name: '形体消瘦', desc: '形体消瘦、口燥咽干', patterns: { yinxu: 0.7, weiyinxu: 0.6, ganyinxu: 0.5 } },
    { id: 'quan_shenzhong', name: '身体沉重', desc: '周身沉重、困倦乏力', patterns: { shizhu: 0.9, shushi: 0.7, piqixu: 0.6 } },
    { id: 'quan_jianwang', name: '健忘', desc: '记忆力减退、丢三落四', patterns: { jingkui: 0.8, xinpiliangxu: 0.7, qixueliangxu: 0.5 } },
    { id: 'quan_suantong', name: '周身酸痛', desc: '周身酸痛、困重乏力', patterns: { hanxie: 0.6, shizhu: 0.6, fengxie: 0.6 } },
    { id: 'quan_kouke', name: '口渴引饮', desc: '口渴欲饮、咽干少津', patterns: { weire: 0.7, yinxu: 0.7, shire: 0.5 } }
  ],
  daobian: [
    { id: 'daochang', name: '夜尿频多', desc: '夜间起夜小便较多', patterns: { shenyang: 0.9, jingkui: 0.7, piqixu: 0.5 } },
    { id: 'daodaobeishan', name: '大便黏滞', desc: '大便黏腻、排不尽感', patterns: { shire: 0.8, shizhu: 0.8 } },
    { id: 'daochengxia', name: '大便稀溏', desc: '大便不成形、次数多', patterns: { piqixu: 0.75, shizhu: 0.7, shenyang: 0.6, hanshi: 0.5 } },
    { id: 'daobian_shengduan', name: '小便短赤', desc: '尿少色黄赤、排尿灼热', patterns: { pangguangshire: 0.8, shirexiazhu: 0.7, shire: 0.6 } },
    { id: 'daobian_pinduo', name: '小便频数', desc: '白天小便次数多、量少', patterns: { shenqibugu: 0.8, piqixu: 0.6, shenyang: 0.6 } },
    { id: 'daobian_seetong', name: '小便涩痛', desc: '尿频尿急、涩痛淋漓', patterns: { pangguangshire: 0.9, shirexiazhu: 0.7 } },
    { id: 'daobian_shijian', name: '小便失禁', desc: '小便不能自控、遗溺不禁', patterns: { shenqibugu: 0.9, shenyang: 0.7, piqixu: 0.5 } },
    { id: 'daobian_bianxue', name: '大便带血', desc: '便血鲜红、多夹黏液', patterns: { dachangshire: 0.8, shire: 0.6, xueyu: 0.5 } }
  ],
  jingluo: [
    { id: 'jing_ci', name: '局部刺痛', desc: '痛处固定、刺痛拒按', patterns: { xueyu: 0.9 } },
    { id: 'jing_leng', name: '遇冷加重', desc: '疼痛发凉、遇寒加剧', patterns: { hanxie: 0.9, shenyang: 0.6 } },
    { id: 'jing_qingjin', name: '舌下络脉粗紫', desc: '舌下络脉紫暗粗胀', patterns: { xueyu: 0.9 } },
    { id: 'jing_youzou', name: '走窜作痛', desc: '疼痛走窜不定、位置游移', patterns: { ganyu: 0.7, xueyu: 0.5 } },
    { id: 'jing_zhuore', name: '灼热作痛', desc: '痛处灼热、喜凉恶热', patterns: { shire: 0.7, tanhuo: 0.5, yinxu: 0.5 } },
    { id: 'jing_zhangtong', name: '胀痛', desc: '局部胀痛、时轻时重', patterns: { ganyu: 0.7, xueyu: 0.7 } },
    { id: 'jing_suantong', name: '酸痛', desc: '肢体酸楚作痛、遇劳加重', patterns: { qixueliangxu: 0.6, shizhu: 0.6, hanxie: 0.6 } },
    { id: 'jing_mamu', name: '麻木不仁', desc: '局部麻木、触觉迟钝', patterns: { shiChan: 0.8, xueyu: 0.6, ganxuexu: 0.5 } },
    { id: 'jing_yintong', name: '隐痛绵绵', desc: '疼痛隐隐、绵绵不休', patterns: { qixueliangxu: 0.7, piqixu: 0.6, ganyinxu: 0.5 } }
  ],
  nvxing: [
    { id: 'nv_piqian', name: '经前乳房胀痛', desc: '月经前乳房胀痛、乳胁胀满', patterns: { ganyu: 0.9 } },
    { id: 'nv_tongjing', name: '痛经冷痛', desc: '行经小腹冷痛、得热则减', patterns: { gonghan: 0.85, hanxie: 0.8, xueyu: 0.7, shenyang: 0.6 } },
    { id: 'nv_liangshao', name: '经量少色淡', desc: '经量少、色淡质稀', patterns: { qixueliangxu: 0.9, ganxuexu: 0.7 } },
    { id: 'nv_an', name: '经色紫暗有块', desc: '经色紫暗、夹有血块', patterns: { xueyu: 0.9, hanxie: 0.7 } },
    { id: 'nv_daiqing', name: '带下清稀', desc: '带下清稀量多', patterns: { piqixu: 0.7, shenyang: 0.7, shizhu: 0.6, gonghan: 0.5 } },
    { id: 'nv_daihuang', name: '带下黄稠', desc: '带下色黄黏稠、有异味', patterns: { shire: 0.9 } },
    { id: 'nv_zhouqi', name: '月经推迟', desc: '经期错后、量少色淡', patterns: { shenyang: 0.7, qixueliangxu: 0.7, hanxie: 0.5 } },
    { id: 'nv_tiqian', name: '月经提前', desc: '经期提前、量多色深', patterns: { weire: 0.6, yinxu: 0.6, ganyang: 0.5 } },
    { id: 'nv_liangdu', name: '经量过多', desc: '经量过多、色淡质稀', patterns: { piqixu: 0.7, zhongqixiaxian: 0.6, shenyang: 0.5 } },
    { id: 'nv_ruzhang', name: '乳房胀结', desc: '乳房胀痛、触及结节', patterns: { ganyu: 0.8, tanqijiaozu: 0.6, xueyu: 0.5 } },
    { id: 'nv_yinyang', name: '阴部瘙痒', desc: '阴部瘙痒、带下黄稠', patterns: { shirexiazhu: 0.8, shire: 0.7, dachangshire: 0.4 } }
  ]
}

export const regionSymptoms = Object.fromEntries(
  Object.keys(knowledge).map((rid) => [
    rid,
    knowledge[rid].map((s) => ({ ...s, regionId: rid }))
  ])
)

export const symptomIndex = Object.keys(knowledge).reduce((acc, rid) => {
  for (const s of knowledge[rid]) {
    acc[s.id] = { ...s, regionId: rid }
  }
  return acc
}, {})