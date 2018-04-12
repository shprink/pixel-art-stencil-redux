// inspired by this post: https://css-tricks.com/fun-times-css-pixel-art/

const r = '#f00';
const w = '#fff';
const k = '#000';
const o = 'transparent';
const t = '#83401f';
const p = '#ffbc77';
const b = '#06f';
const y = '#ff0';
const n = '#ff8000';
const g = '#5ac528';
const i = '#fefe00';
const a = '#823e00';
const c = '#fe4100';
const m = '#f0c3aa';
const h = '#f7f7f7';

export function getMushroom() {
  return [
    [o, o, o, o, o, k, k, k, k, k, k, o, o, o, o, o],
    [o, o, o, k, k, r, r, r, r, w, w, k, k, o, o, o],
    [o, o, k, w, w, r, r, r, r, w, w, w, w, k, o, o],
    [o, k, w, w, r, r, r, r, r, r, w, w, w, w, k, o],
    [o, k, w, r, r, w, w, w, w, r, r, w, w, w, k, o],
    [k, r, r, r, w, w, w, w, w, w, r, r, r, r, r, k],
    [k, r, r, r, w, w, w, w, w, w, r, r, w, w, r, k],
    [k, w, r, r, w, w, w, w, w, w, r, w, w, w, w, k],
    [k, w, w, r, r, w, w, w, w, r, r, w, w, w, w, k],
    [k, w, w, r, r, r, r, r, r, r, r, r, w, w, r, k],
    [k, w, r, r, k, k, k, k, k, k, k, k, r, r, r, k],
    [o, k, k, k, w, w, k, w, w, k, w, w, k, k, k, o],
    [o, o, k, w, w, w, k, w, w, k, w, w, w, k, o, o],
    [o, o, k, w, w, w, w, w, w, w, w, w, w, k, o, o],
    [o, o, o, k, w, w, w, w, w, w, w, w, k, o, o, o],
    [o, o, o, o, k, k, k, k, k, k, k, k, o, o, o, o],
  ];
}

export function getMario() {
  return [
    [o, o, o, o, r, r, r, r, r, r, o, o, o, o, o, o],
    [o, o, o, r, r, r, r, r, r, r, r, r, r, o, o, o],
    [o, o, o, t, t, t, p, p, p, k, p, o, o, o, o, o],
    [o, o, t, p, t, p, p, p, p, k, p, p, p, o, o, o],
    [o, o, t, p, t, t, p, p, p, p, k, p, p, p, o, o],
    [o, o, t, t, p, p, p, p, p, k, k, k, k, o, o, o],
    [o, o, o, o, p, p, p, p, p, p, p, p, o, o, o, o],
    [o, o, o, r, r, b, r, r, r, r, o, o, o, o, o, o],
    [o, o, r, r, r, b, r, r, b, r, r, r, r, o, o, o],
    [o, r, r, r, r, b, b, b, b, r, r, r, r, o, o, o],
    [o, p, p, r, b, y, b, b, y, b, r, p, p, o, o, o],
    [o, p, p, p, b, b, b, b, b, b, p, p, p, o, o, o],
    [o, p, p, b, b, b, b, b, b, b, b, p, p, o, o, o],
    [o, o, o, b, b, b, o, o, b, b, b, o, o, o, o, o],
    [o, o, t, t, t, o, o, o, o, t, t, t, o, o, o, o],
    [o, t, t, t, t, o, o, o, o, t, t, t, t, o, o, o],
  ];
}

export function getStar() {
  return [
    [o, o, o, o, o, o, o, k, k, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, k, y, y, k, o, o, o, o, o, o],
    [o, o, o, o, o, o, k, y, y, k, o, o, o, o, o, o],
    [o, o, o, o, o, k, y, y, y, y, k, o, o, o, o, o],
    [k, k, k, k, k, k, y, y, y, y, k, k, k, k, k, k],
    [k, y, y, y, y, y, y, y, y, y, y, y, y, y, y, k],
    [o, k, y, y, y, y, k, y, y, k, y, y, y, y, k, o],
    [o, o, k, y, y, y, k, y, y, k, y, y, y, k, o, o],
    [o, o, o, k, y, y, k, y, y, k, y, y, k, o, o, o],
    [o, o, o, k, y, y, y, y, y, y, y, y, k, o, o, o],
    [o, o, k, y, y, y, y, y, y, y, y, y, y, k, o, o],
    [o, o, k, y, y, y, y, y, y, y, y, y, y, k, o, o],
    [o, k, y, y, y, y, y, k, k, y, y, y, y, y, k, o],
    [o, k, y, y, y, k, k, o, o, k, k, y, y, y, k, o],
    [k, y, y, k, k, o, o, o, o, o, o, k, k, y, y, k],
    [k, k, k, o, o, o, o, o, o, o, o, o, o, k, k, k],
  ];
}

export function getFlower() {
  return [
    [o, o, o, k, k, k, k, k, k, k, k, k, k, o, o, o],
    [o, k, k, k, n, n, n, n, n, n, n, n, k, k, k, o],
    [k, k, n, n, n, y, y, y, y, y, y, n, n, n, k, k],
    [k, n, n, y, y, y, k, w, w, k, y, y, y, n, n, k],
    [k, n, n, y, y, y, k, y, y, k, y, y, y, n, n, k],
    [k, n, n, n, n, y, y, y, y, y, y, n, n, n, n, k],
    [k, k, n, n, n, n, n, n, n, n, n, n, n, n, k, k],
    [o, k, k, k, n, n, n, n, n, n, n, n, k, k, k, o],
    [o, o, o, k, k, k, k, k, k, k, k, k, k, o, o, o],
    [o, k, k, o, o, o, k, g, g, k, o, o, o, k, k, o],
    [k, g, g, k, k, o, k, g, g, k, o, k, k, g, g, k],
    [k, g, g, g, g, k, k, g, g, k, k, g, g, g, g, k],
    [k, g, g, g, g, g, k, g, g, k, g, g, g, g, g, k],
    [o, k, g, g, g, g, k, g, g, k, g, g, g, g, k, o],
    [o, o, k, k, g, g, g, g, g, g, g, g, k, k, o, o],
    [o, o, o, o, k, k, k, k, k, k, k, k, o, o, o, o],
  ];
}

export function getChance() {
  return [
    [o, t, t, t, t, t, t, t, t, t, t, t, t, t, t, o],
    [t, p, p, p, p, p, p, p, p, p, p, p, p, p, p, k],
    [t, p, k, p, p, p, p, p, p, p, p, p, p, k, p, k],
    [t, p, p, p, p, t, t, t, t, t, p, p, p, p, p, k],
    [t, p, p, p, t, t, k, k, k, t, t, p, p, p, p, k],
    [t, p, p, p, t, t, k, p, p, t, t, k, p, p, p, k],
    [t, p, p, p, t, t, k, p, p, t, t, k, p, p, p, k],
    [t, p, p, p, p, k, k, p, t, t, t, k, p, p, p, k],
    [t, p, p, p, p, p, p, t, t, k, k, k, p, p, p, k],
    [t, p, p, p, p, p, p, t, t, k, p, p, p, p, p, k],
    [t, p, p, p, p, p, p, p, k, k, p, p, p, p, p, k],
    [t, p, p, p, p, p, p, t, t, p, p, p, p, p, p, k],
    [t, p, p, p, p, p, p, t, t, k, p, p, p, p, p, k],
    [t, p, k, p, p, p, p, p, k, k, p, p, p, k, p, k],
    [t, p, p, p, p, p, p, p, p, p, p, p, p, p, p, k],
    [k, k, k, k, k, k, k, k, k, k, k, k, k, k, k, k],
  ];
}

export function getBoo() {
  return [
    [o, o, o, o, o, k, k, k, k, k, o, o, o, o, o, o],
    [o, o, o, k, k, w, w, w, w, w, k, k, o, o, o, o],
    [o, o, k, w, w, w, w, w, w, w, w, w, k, o, o, o],
    [o, k, w, w, w, w, w, w, w, w, w, w, w, k, o, o],
    [o, k, w, k, w, k, w, w, w, w, w, w, w, w, k, o],
    [k, w, w, k, w, k, w, w, w, w, k, k, k, w, w, k],
    [k, w, w, k, w, k, w, w, w, k, w, w, k, w, w, k],
    [k, w, w, w, w, w, w, w, w, w, w, w, k, w, k, o],
    [k, w, r, w, r, w, r, w, w, w, w, k, w, w, w, k],
    [k, w, r, r, r, r, r, w, w, w, w, w, w, w, w, k],
    [k, w, r, r, r, r, r, w, w, w, w, w, w, w, w, k],
    [o, k, w, r, r, r, r, r, w, w, w, w, w, w, w, k],
    [o, k, w, r, w, r, w, r, w, w, w, w, w, w, k, o],
    [o, o, k, w, w, w, w, w, w, w, w, w, w, k, o, o],
    [o, o, o, k, k, w, w, w, w, w, w, k, k, o, o, o],
    [o, o, o, o, o, k, k, k, k, k, k, o, o, o, o, o],
  ];
}

export function getPika(): string[][][] {
  return [
    [
      [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
      [o, o, o, o, k, k, o, o, o, o, o, o, o, o, o, o],
      [k, k, k, k, k, k, k, k, k, o, o, o, o, o, o, o],
      [k, i, i, i, k, k, k, i, i, k, k, k, o, o, o, o],
      [o, k, i, i, i, k, i, i, i, i, i, i, k, o, o, o],
      [o, o, k, i, i, k, k, i, i, i, i, i, i, k, o, o],
      [o, o, o, k, i, i, k, i, i, i, i, i, i, k, o, o],
      [o, k, k, k, i, k, i, i, i, i, i, k, i, i, k, o],
      [o, k, i, i, k, k, i, i, i, c, i, i, i, i, k, o],
      [o, o, k, a, k, a, a, a, i, i, i, i, i, k, o, o],
      [o, k, a, a, k, i, i, i, i, i, i, k, i, k, o, o],
      [o, o, k, a, k, a, a, a, i, i, k, k, i, k, o, o],
      [o, o, o, k, k, k, i, i, i, i, i, i, k, k, o, o],
      [o, o, o, k, i, k, k, i, i, i, i, k, i, i, k, o],
      [o, o, o, o, k, i, i, k, k, k, k, o, k, k, o, o],
      [o, o, o, o, o, k, k, o, o, o, o, o, o, o, o, o],
    ],
    [
      [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
      [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
      [o, o, o, o, k, k, o, o, o, o, o, o, o, o, o, o],
      [k, k, k, k, k, k, k, k, k, o, o, o, o, o, o, o],
      [k, i, i, i, k, k, k, i, i, k, k, k, o, o, o, o],
      [o, k, i, i, i, k, i, i, i, i, i, i, k, o, o, o],
      [o, o, k, i, i, k, k, i, i, i, i, i, i, k, o, o],
      [o, o, o, k, i, i, k, i, i, i, i, i, i, k, o, o],
      [o, k, k, k, i, k, i, i, i, i, i, k, i, i, k, o],
      [o, k, i, i, i, k, i, i, i, c, i, i, i, i, k, o],
      [o, o, k, a, k, a, a, a, i, i, i, i, i, k, o, o],
      [o, k, a, a, k, i, i, i, i, i, i, k, i, k, o, o],
      [o, o, k, a, k, a, a, a, i, i, k, k, i, k, o, o],
      [o, o, o, k, k, k, i, i, i, i, i, i, i, k, o, o],
      [o, o, o, o, o, o, k, k, i, i, i, k, k, o, o, o],
      [o, o, o, o, o, o, o, o, k, k, k, o, o, o, o, o],
    ]
  ];
}

export function getAsh(): string[][][] {
  return [
    [
      [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
      [o, o, o, o, k, k, k, k, k, k, o, o, o, o, o, o],
      [o, o, o, k, r, r, r, r, r, r, k, o, o, o, o, o],
      [o, o, k, r, r, r, r, r, r, r, r, k, o, o, o, o],
      [o, o, k, r, r, r, r, r, r, r, h, k, k, o, o, o],
      [o, k, k, k, r, r, r, r, r, h, h, h, h, k, o, o],
      [o, k, k, k, k, k, k, k, r, r, r, k, k, o, o, o],
      [o, k, k, k, k, k, k, p, p, k, p, k, o, o, o, o],
      [o, o, k, k, p, p, k, p, p, k, p, k, o, o, o, o],
      [o, o, o, k, p, p, p, p, p, p, p, k, o, o, o, o],
      [o, o, k, b, k, k, p, p, p, m, k, o, o, o, o, o],
      [o, o, k, b, k, k, k, k, k, k, o, o, o, o, o, o],
      [o, o, k, k, p, p, k, k, k, k, k, k, o, o, o, o],
      [o, k, w, k, p, p, k, w, w, k, w, w, k, o, o, o],
      [o, k, w, w, k, k, k, k, k, w, w, k, o, o, o, o],
      [o, o, k, k, o, o, o, o, k, k, k, o, o, o, o, o],
    ],
    [
      [o, o, o, o, k, k, k, k, k, k, o, o, o, o, o, o],
      [o, o, o, k, r, r, r, r, r, r, k, o, o, o, o, o],
      [o, o, k, r, r, r, r, r, r, r, r, k, o, o, o, o],
      [o, o, k, r, r, r, r, r, r, r, h, k, k, o, o, o],
      [o, k, k, k, r, r, r, r, r, h, h, h, h, k, o, o],
      [o, k, k, k, k, k, k, k, r, r, r, k, k, o, o, o],
      [o, k, k, k, k, k, k, p, p, k, p, k, o, o, o, o],
      [o, o, k, k, p, p, k, p, p, k, p, k, o, o, o, o],
      [o, o, o, k, p, p, p, p, p, p, p, k, o, o, o, o],
      [o, o, k, b, k, k, p, p, p, m, k, o, o, o, o, o],
      [o, o, k, b, b, k, k, k, k, k, o, o, o, o, o, o],
      [o, o, k, b, k, p, p, k, k, o, o, o, o, o, o, o],
      [o, o, k, b, k, p, p, k, k, o, o, o, o, o, o, o],
      [o, o, o, k, k, k, k, w, w, k, o, o, o, o, o, o],
      [o, o, o, o, k, w, w, w, w, k, o, o, o, o, o, o],
      [o, o, o, o, o, k, k, k, k, o, o, o, o, o, o, o],
    ]
  ];
}
