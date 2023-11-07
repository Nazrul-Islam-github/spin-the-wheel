

const medievalCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "𝖆",
  b: "𝖇",
  c: "𝖈",
  d: "𝖉",
  e: "𝖊",
  f: "𝖋",
  g: "𝖌",
  h: "𝖍",
  i: "𝖎",
  j: "𝖏",
  k: "𝖐",
  l: "𝖑",
  m: "𝖒",
  n: "𝖓",
  o: "𝖔",
  p: "𝖕",
  q: "𝖖",
  r: "𝖗",
  s: "𝖘",
  t: "𝖙",
  u: "𝖚",
  v: "𝖛",
  w: "𝖜",
  x: "𝖝",
  y: "𝖞",
  z: "𝖟",
  A: "𝕬",
  B: "𝕭",
  C: "𝕮",
  D: "𝕯",
  E: "𝕰",
  F: "𝕱",
  G: "𝕲",
  H: "𝕳",
  I: "𝕴",
  J: "𝕵",
  K: "𝕶",
  L: "𝕷",
  M: "𝕸",
  N: "𝕹",
  O: "𝕺",
  P: "𝕻",
  Q: "𝕼",
  R: "𝕽",
  S: "𝕾",
  T: "𝕿",
  U: "𝖀",
  V: "𝖁",
  W: "𝖂",
  X: "𝖃",
  Y: "𝖄",
  Z: "𝖅",
};



const cursiveBold = {
  A: "𝓐",
  B: "𝓑",
  C: "𝓒",
  D: "𝓓",
  E: "𝓔",
  F: "𝓕",
  G: "𝓖",
  H: "𝓗",
  I: "𝓘",
  J: "𝓙",
  K: "𝓚",
  L: "𝓛",
  M: "𝓜",
  N: "𝓝",
  O: "𝓞",
  P: "𝓟",
  Q: "𝓠",
  R: "𝓡",
  S: "𝓢",
  T: "𝓣",
  U: "𝓤",
  V: "𝓥",
  W: "𝓦",
  X: "𝓧",
  Y: "𝓨",
  Z: "𝓩",
  a: "𝓪",
  b: "𝓫",
  c: "𝓬",
  d: "𝓭",
  e: "𝓮",
  f: "𝓯",
  g: "𝓰",
  h: "𝓱",
  i: "𝓲",
  j: "𝓳",
  k: "𝓴",
  l: "𝓵",
  m: "𝓶",
  n: "𝓷",
  o: "𝓸",
  p: "𝓹",
  q: "𝓺",
  r: "𝓻",
  s: "𝓼",
  t: "𝓽",
  u: "𝓾",
  w: "𝔀",
  x: "𝔁",
  y: "𝔂",
  z: "𝔃",
};

function createMap(chars) {
  const alphanum = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let i = 0;
  const map = {};
  for (const c of chars) {
    map[alphanum[i]] = c;
    i++;
  }
  return map;
}

const map1 = createMap("𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕");

const map2 = createMap("𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵");

const map3 = createMap("𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡");

const map4  = createMap("𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝑿")

const FlowrishArrarray = [
  "(人◕‿◕)[[text]](•◡•)",
  "(◍•ᴗ•◍) [[text]] 💖彡",
  "꧁•⊹٭[[text]]⊹•꧂",
  "ᕚ([[text]]ᕘ",
  "𒆜[[text]]𒆜",
];

export const _boldtextgen = (text) => {
  const cursive = newFontsFunc(text);
  const decoText = JoinInsideText(text, FlowrishArrarray);
  const boldItalic = boldItalicFunc(text);

  const obj = [{ cursive: [...cursive, ...decoText],boldItalic }];
  return obj;
};


function boldItalicFunc (text){
  let finalText = "";
 finalText += applyCharMap(map1,text) + "\n\n";
 finalText += applyCharMap(map4,text) + "\n\n";


 return finalText.trim().split("\n\n");
}

// --------------new fonts--------
const newFontsFunc = (text) => {
  let finalText = "";
  finalText += applyCharMap(map3,text) + "\n\n";
  finalText += applyCharMap(map1, text) + "\n\n";
  finalText += scriptify(text) + "\n\n";
  finalText += applyCharMap(map2, text) + "\n\n";
  finalText += applyCharMap(cursiveBold, text) + "\n\n";
  // finalText += applyCharMap(roundchar, text) + "\n\n";
  // finalText += applyCharMap(invertedSquaresCharMap, text) + "\n\n";
  finalText += applyCharMap(medievalCharMap, text) + "\n\n";

  return finalText.trim().split("\n\n");
};
// --------------new fonts End--------

// ------cool fonts

// ---------------Apply Char Map------------
function applyCharMap(map, text) {
  let out = "";
  for (let c of text.split("")) {
    if (map[c] !== undefined) {
      out += map[c];
    } else if (map[c.toLowerCase()] !== undefined) {
      out += map[c.toLowerCase()];
    } else {
      out += c;
    }
  }
  return out;
}

// ---------------

function scriptify(text) {
  const map = {
    0: "𝟢",
    1: "𝟣",
    2: "𝟤",
    3: "𝟥",
    4: "𝟦",
    5: "𝟧",
    6: "𝟨",
    7: "𝟩",
    8: "𝟪",
    9: "𝟫",
    a: "𝒶",
    b: "𝒷",
    c: "𝒸",
    d: "𝒹",
    e: "𝑒",
    f: "𝒻",
    g: "𝑔",
    h: "𝒽",
    i: "𝒾",
    j: "𝒿",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "𝓃",
    o: "𝑜",
    p: "𝓅",
    q: "𝓆",
    r: "𝓇",
    s: "𝓈",
    t: "𝓉",
    u: "𝓊",
    v: "𝓋",
    w: "𝓌",
    x: "𝓍",
    y: "𝓎",
    z: "𝓏",
    A: "𝒜",
    B: "𝐵",
    C: "𝒞",
    D: "𝒟",
    E: "𝐸",
    F: "𝐹",
    G: "𝒢",
    H: "𝐻",
    I: "𝐼",
    J: "𝒥",
    K: "𝒦",
    L: "𝐿",
    M: "𝑀",
    N: "𝒩",
    O: "𝒪",
    P: "𝒫",
    Q: "𝒬",
    R: "𝑅",
    S: "𝒮",
    T: "𝒯",
    U: "𝒰",
    V: "𝒱",
    W: "𝒲",
    X: "𝒳",
    Y: "𝒴",
    Z: "𝒵",
  };
  const charArray = text.split("");
  for (let i = 0; i < charArray.length; i++) {
    if (map[charArray[i].toLowerCase()]) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}

const FontsObj = {
  0: cursiveBold,
  1: map1,
  2: map2,
  3: medievalCharMap,
};

const joinTextwithFlow = (text, florish) => {
  return florish.replace("[[text]]", text);
};

const JoinInsideText = (text, array) => {
  const arr = [];
  let strText = text;
  for (let i = 0; i < array.length; i++) {
    if (FontsObj[i]) {
      strText = applyCharMap(FontsObj[i], text);
      arr.push(joinTextwithFlow(strText, array[i]));
    }

    else{
      strText = applyCharMap(cursiveBold, text);
      arr.push(joinTextwithFlow(strText, array[i]));
    }
  }

  return arr;
};
