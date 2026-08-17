/**
 * 2D 图鉴专用标定（本项目唯一权威坐标源）
 *
 * 坐标系与 HumanSilhouette2D 画布严格一致：
 *   - 画布 300 × 520，体中线 x = 150
 *   - x2：相对体中线的像素偏移（右 +，左 -；双侧穴仅标注画幅右侧示意，医籍惯例）
 *   - y2：自头顶向足的绝对像素（头顶 ≈ 16，足底 ≈ 483）
 *   - side：穴归属视图 'front'（正面）| 'back'（背面）
 *
 * 依据：穴『location』解剖描述 + 骨度分寸推演，参考《针灸学》教材定位。
 * 比例基准：头 16–86、肩线 132、腰 206、髋 254、会阴 321、肘 242、腕 298、
 *           指尖 320、膝 358、踝 446、足底 483。
 * 勿与旧 pos（3D 模型标系）混用。
 */
export const atlas2d = {
  // ── 头面（front） ──────────────────────────────────────────────
  baihui:       { x2: 0,   y2: 20,  side: 'front' }, // 百会：巅顶
  yintang:      { x2: 0,   y2: 46,  side: 'front' }, // 印堂：两眉间中点
  zanzhu:       { x2: 11,  y2: 50,  side: 'front' }, // 攒竹：眉头凹陷
  jingming:     { x2: 7,   y2: 56,  side: 'front' }, // 睛明：目内眦
  chengqi:      { x2: 8,   y2: 62,  side: 'front' }, // 承泣：瞳孔直下
  yingxiang:    { x2: 2,   y2: 65,  side: 'front' }, // 迎香：鼻翼旁
  yiming:       { x2: 4,   y2: 47,  side: 'front' }, // 印明：目内眦上
  tshang:       { x2: 28,  y2: 54,  side: 'front' }, // 太阳：眉梢后
  taiyang_extra:{ x2: 24,  y2: 58,  side: 'front' }, // 太阳穴（经外）
  qubin:        { x2: 33,  y2: 50,  side: 'front' }, // 曲鬓：耳尖前
  yifeng:       { x2: 33,  y2: 72,  side: 'front' }, // 翳风：耳垂后
  tinggong:     { x2: 27,  y2: 64,  side: 'front' }, // 听宫：耳屏前

  // ── 颈胸（front） ─────────────────────────────────────────────
  tiantu:       { x2: 0,   y2: 96,  side: 'front' }, // 天突：胸骨上窝
  tf_xiang:     { x2: -12, y2: 100, side: 'front' }, // 缺盆：锁骨上窝
  q_que:        { x2: 0,   y2: 142, side: 'front' }, // 膻中：两乳间
  zhongfu:      { x2: -15, y2: 118, side: 'front' }, // 中府：胸外上
  qimen:        { x2: -24, y2: 184, side: 'front' }, // 期门：乳下肋
  zhongwan:     { x2: 0,   y2: 190, side: 'front' }, // 中脘：脐上4寸
  liangmen:     { x2: -15, y2: 190, side: 'front' }, // 梁门：脐上旁2寸
  shenque:      { x2: 0,   y2: 222, side: 'front' }, // 神阙：脐中
  tianshu:      { x2: -14, y2: 222, side: 'front' }, // 天枢：脐旁2寸
  qihai:        { x2: 0,   y2: 235, side: 'front' }, // 气海：脐下1.5寸
  guanyuan:     { x2: 0,   y2: 248, side: 'front' }, // 关元：脐下3寸
  zhangmen:     { x2: -32, y2: 205, side: 'front' }, // 章门：第11肋游端
  jingmen:      { x2: -36, y2: 212, side: 'front' }, // 京门：第12肋游端
  jianyu:       { x2: 48,  y2: 126, side: 'front' }, // 肩髃：肩峰前缘

  // ── 背项（back） ──────────────────────────────────────────────
  fengchi:      { x2: 22,  y2: 78,  side: 'back'  }, // 风池：枕骨下陷
  jianjing:     { x2: 26,  y2: 130, side: 'back'  }, // 肩井：肩斜线中段
  dazhui:       { x2: 0,   y2: 108, side: 'back'  }, // 大椎：C7
  tianzong:     { x2: 44,  y2: 176, side: 'back'  }, // 天宗：肩胛中央
  feiyuan:      { x2: 10,  y2: 158, side: 'back'  }, // 肺俞：T3
  xinshu:       { x2: 10,  y2: 172, side: 'back'  }, // 心俞：T5
  geshu:        { x2: 10,  y2: 182, side: 'back'  }, // 膈俞：T7
  ganshu:       { x2: 10,  y2: 196, side: 'back'  }, // 肝俞：T9
  pishu:        { x2: 10,  y2: 202, side: 'back'  }, // 脾俞：T11
  weishu:       { x2: 10,  y2: 208, side: 'back'  }, // 胃俞：T12
  sanjiaoshu:   { x2: 10,  y2: 224, side: 'back'  }, // 三焦俞：L1
  shenshu:      { x2: 10,  y2: 232, side: 'back'  }, // 肾俞：L2
  mingmen:      { x2: 0,   y2: 232, side: 'back'  }, // 命门：L2棘下
  dachangshu:   { x2: 8,   y2: 258, side: 'back'  }, // 大肠俞：L4
  xiaochangshu: { x2: 8,   y2: 268, side: 'back'  }, // 小肠俞：S1
  huantiao:     { x2: 42,  y2: 296, side: 'back'  }, // 环跳：臀股间

  // ── 上肢（front，示右臂） ─────────────────────────────────────
  quchi:        { x2: 62,  y2: 238, side: 'front' }, // 曲池：肘横纹外
  chize:        { x2: 44,  y2: 236, side: 'front' }, // 尺泽：肘横纹中
  quze:         { x2: 40,  y2: 234, side: 'front' }, // 曲泽：肘内
  shousanli:    { x2: 58,  y2: 262, side: 'front' }, // 手三里：前臂桡侧
  zhigou:       { x2: 56,  y2: 286, side: 'front' }, // 支沟：腕上3寸
  waiguan:      { x2: 56,  y2: 293, side: 'front' }, // 外关：腕上2寸
  ximen:        { x2: 42,  y2: 272, side: 'front' }, // 郄门：腕上5寸
  neiguan:      { x2: 41,  y2: 293, side: 'front' }, // 内关：腕上2寸
  lieque:       { x2: 57,  y2: 305, side: 'front' }, // 列缺：桡骨茎突
  taiyuan:      { x2: 55,  y2: 298, side: 'front' }, // 太渊：腕横纹桡
  yangchi:      { x2: 49,  y2: 298, side: 'front' }, // 阳池：腕背中
  yangxi:       { x2: 59,  y2: 300, side: 'front' }, // 阳溪：腕背桡
  tongli:       { x2: 41,  y2: 307, side: 'front' }, // 通里：腕上1寸
  shenmen:      { x2: 41,  y2: 298, side: 'front' }, // 神门：腕横纹尺
  yuji:         { x2: 57,  y2: 318, side: 'front' }, // 鱼际：大鱼际
  laogong:      { x2: 47,  y2: 316, side: 'front' }, // 劳宫：掌中
  hegu:         { x2: 54,  y2: 313, side: 'front' }, // 合谷：掌骨间
  houxi:        { x2: 41,  y2: 318, side: 'front' }, // 后溪：第5掌骨
  shangyang:    { x2: 56,  y2: 323, side: 'front' }, // 商阳：食指桡
  shaoshang:    { x2: 59,  y2: 312, side: 'front' }, // 少商：拇指桡
  zhongchong:   { x2: 47,  y2: 320, side: 'front' }, // 中冲：中指尖

  // ── 下肢（front，示右腿） ─────────────────────────────────────
  fengshi:      { x2: 38,  y2: 330, side: 'front' }, // 风市：大腿外侧
  xuehai:       { x2: 12,  y2: 350, side: 'front' }, // 血海：髌骨内上
  xiyan:        { x2: 28,  y2: 358, side: 'front' }, // 犊鼻：膝前凹陷
  yanglingquan: { x2: 33,  y2: 368, side: 'front' }, // 阳陵泉：腓骨小头
  yinlingquan:  { x2: 13,  y2: 368, side: 'front' }, // 阴陵泉：胫骨内髁
  zusanli:      { x2: 31,  y2: 378, side: 'front' }, // 足三里：犊鼻下3寸
  fenglong:     { x2: 31,  y2: 408, side: 'front' }, // 丰隆：外踝上8寸
  sanyinjiao:   { x2: 15,  y2: 420, side: 'front' }, // 三阴交：内踝上3寸
  fuliu:        { x2: 15,  y2: 434, side: 'front' }, // 复溜：太溪上2寸
  taixi:        { x2: 15,  y2: 446, side: 'front' }, // 太溪：内踝后
  zhaohai:      { x2: 15,  y2: 458, side: 'front' }, // 照海：内踝下
  shuiquan:     { x2: 15,  y2: 463, side: 'front' }, // 水泉：太溪下1寸
  taichong:     { x2: 22,  y2: 470, side: 'front' }, // 太冲：足背跖间
  neiting:      { x2: 28,  y2: 475, side: 'front' }, // 内庭：足背趾蹼
  lidui:        { x2: 34,  y2: 478, side: 'front' }, // 厉兑：次趾外甲
  yongquan:     { x2: 22,  y2: 476, side: 'front' }, // 涌泉：足底前1/3
  qiuxu:        { x2: 34,  y2: 460, side: 'front' }, // 丘墟：外踝前下方
  zulinqi:      { x2: 30,  y2: 470, side: 'front' }, // 足临泣：足背第4、5跖骨间

  // ── 下肢（back，示右腿） ─────────────────────────────────────
  weizhong:     { x2: 26,  y2: 358, side: 'back'  }, // 委中：腘横纹
  chenshan:     { x2: 25,  y2: 410, side: 'back'  }, // 承山：腓肠肌下
  kunlun:       { x2: 31,  y2: 446, side: 'back'  }, // 昆仑：外踝后
  shenmai:      { x2: 31,  y2: 458, side: 'back'  }, // 申脉：外踝下
}

export const atlas2dList = Object.keys(atlas2d)
