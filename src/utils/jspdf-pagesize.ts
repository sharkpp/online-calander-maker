// jsPDF用のページサイズの定数定義

export type PageSizeType = [number, number];

// ページサイズ(単位はmm)
export const PageSize: { [key:  string]: PageSizeType } = {

  // A判 比率：1.41379310345
  A0:  [ 841, 1189 ],
  A1:  [ 594,  841 ],
  A2:  [ 420,  594 ],
  A3:  [ 297,  420 ],
  A4:  [ 210,  297 ],
  A5:  [ 148,  210 ],
  A6:  [ 105,  148 ],
  A7:  [  74,  105 ],
  A8:  [  52,   74 ],
  A9:  [  52,   37 ],
  A10: [  37,   26 ],

  // JIS B判 比率：1.41359223301
  B0JIS: [ 1030, 1456 ],
  B1JIS: [  728, 1030 ],
  B2JIS: [  515,  728 ],
  B3JIS: [  364,  515 ],
  B4JIS: [  257,  364 ],
  B5JIS: [  182,  257 ],
  B6JIS: [  128,  182 ],
  B7JIS: [   91,  128 ],
  B8JIS: [   64,   91 ],
  B9JIS: [   45,   64 ],
  B10JIS:[   32,   45 ],

  // L判 比率：1.42696629213
  '2L':  [  127,  178 ], // 2L判
  L:     [   89,  127 ], // L判

  // はがき 比率：1.48
  POSTCARD:[  100,  148 ],

  // 名刺
  BUSINESS_CARD_4:[ 55, 91 ], // 名刺４号サイズ

} as const;
