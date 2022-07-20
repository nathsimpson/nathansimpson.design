export const getTintColor = (input, tint) => {
  const hsl = rgbMapToHslMap(hexToRgbMap(input));
  hsl.L -= tint;

  const { R, G, B } = hslMapToRgbMap(hsl);

  return `rgb(${R},${G},${B})`;
};

export const hexToRgbMap = input => {
  const inputColor = input.replace('#', '').toLowerCase();

  if (inputColor.length === 3) {
    return {
      R: `0x${inputColor.slice(0, 1)}`,
      G: `0x${inputColor.slice(1, 2)}`,
      B: `0x${inputColor.slice(2, 3)}`
    };
  } else if (inputColor.length === 6) {
    return {
      R: `0x${inputColor.slice(0, 2)}`, // parses hexadecimal as decimal
      G: `0x${inputColor.slice(2, 4)}`,
      B: `0x${inputColor.slice(4, 6)}`
    };
  } else {
    return new Error('whoops! Incorrect length');
  }
};

export const rgbMapToHslMap = input => {
  const R = input.R / 255;
  const G = input.G / 255;
  const B = input.B / 255;

  const min = Math.min(R, G, B);
  const max = Math.max(R, G, B);

  // chroma
  const C = max - min;

  // Lightness
  const L = (max + min) / 2;

  // Saturation
  const S = (() => {
    if (C === 0) {
      return 0;
    } else {
      const s = L < 0.5 ? C / (max + min) : C / (2 - max - min);
      return s;
    }
  })();

  // Hue
  const H = (() => {
    if (C === 0) {
      return 0;
    } else {
      let a;

      switch (max) {
        case R:
          a = (G - B) / C;
          break;

        case G:
          a = 2 + (B - R) / C;
          break;

        case B:
          a = 4 + (R - G) / C;
          break;

        default:
          a = 0;
          break;
      }
      a *= 60;
      a < 0 && (a += 360);
      return a;
    }
  })();

  return {
    H: Math.round(H),
    S: Math.round(S * 100),
    L: Math.round(L * 100)
  };
};

export const hslMapToRgbMap = ({ H, S, L }) => {
  let r, g, b;
  const h = H / 360;
  const s = S / 100;
  const l = L / 100;

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    R: Math.round(r * 255),
    G: Math.round(g * 255),
    B: Math.round(b * 255)
  };
};
