
import { useState, useEffect } from 'react';

const Input = ({ id, value, onChange, type = 'text', min, max, placeholder }) => (
  <input
    id={id}
    className="form-control"
    value={value}
    onChange={onChange}
    type={type}
    min={min}
    max={max}
    placeholder={placeholder}
  />
);

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="form-label">
    {children}
  </label>
);

const Card = ({ children }) => (
  <div className="card shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="card-header">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="card-title">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-muted">{children}</p>
);

const CardContent = ({ children }) => (
  <div className="card-body">{children}</div>
);

export default function Component() {
  const [hex, setHex] = useState('#000000');
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
  const [hsl, setHsl] = useState({ h: 0, s: 0, l: 0 });
  const [error, setError] = useState('');

  useEffect(() => {
    updateFromHex(hex);
  }, []);

  const updateFromHex = (hexValue) => {
    if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
      setHex(hexValue);
      setError('');
      const rgbValue = hexToRgb(hexValue);
      setRgb(rgbValue);
      setHsl(rgbToHsl(rgbValue.r, rgbValue.g, rgbValue.b));
    } else {
      setError('Invalid HEX color');
    }
  };

  const updateFromRgb = (r, g, b) => {
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      setRgb({ r, g, b });
      setError('');
      setHex(rgbToHex(r, g, b));
      setHsl(rgbToHsl(r, g, b));
    } else {
      setError('Invalid RGB color');
    }
  };

  const updateFromHsl = (h, s, l) => {
    if (h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100) {
      setHsl({ h, s, l });
      setError('');
      const rgbValue = hslToRgb(h, s, l);
      setRgb(rgbValue);
      setHex(rgbToHex(rgbValue.r, rgbValue.g, rgbValue.b));
    } else {
      setError('Invalid HSL color');
    }
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const rgbToHex = (r, g, b) => {
    return (
      '#' +
      ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
  };

  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const hslToRgb = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return {
      r: Math.round(255 * f(0)),
      g: Math.round(255 * f(8)),
      b: Math.round(255 * f(4)),
    };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>CSS Color Converter</CardTitle>
        <CardDescription>
          Convert between HEX, RGB, and HSL color formats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <Label htmlFor="hex">HEX</Label>
          <Input
            id="hex"
            value={hex}
            onChange={(e) => updateFromHex(e.target.value)}
            placeholder="#000000"
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <Label htmlFor="r">R</Label>
            <Input
              id="r"
              type="number"
              value={rgb.r}
              onChange={(e) =>
                updateFromRgb(Number(e.target.value), rgb.g, rgb.b)
              }
              min="0"
              max="255"
            />
          </div>
          <div className="col">
            <Label htmlFor="g">G</Label>
            <Input
              id="g"
              type="number"
              value={rgb.g}
              onChange={(e) =>
                updateFromRgb(rgb.r, Number(e.target.value), rgb.b)
              }
              min="0"
              max="255"
            />
          </div>
          <div className="col">
            <Label htmlFor="b">B</Label>
            <Input
              id="b"
              type="number"
              value={rgb.b}
              onChange={(e) =>
                updateFromRgb(rgb.r, rgb.g, Number(e.target.value))
              }
              min="0"
              max="255"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <Label htmlFor="h">H</Label>
            <Input
              id="h"
              type="number"
              value={hsl.h}
              onChange={(e) =>
                updateFromHsl(Number(e.target.value), hsl.s, hsl.l)
              }
              min="0"
              max="360"
            />
          </div>
          <div className="col">
            <Label htmlFor="s">S</Label>
            <Input
              id="s"
              type="number"
              value={hsl.s}
              onChange={(e) =>
                updateFromHsl(hsl.h, Number(e.target.value), hsl.l)
              }
              min="0"
              max="100"
            />
          </div>
          <div className="col">
            <Label htmlFor="l">L</Label>
            <Input
              id="l"
              type="number"
              value={hsl.l}
              onChange={(e) =>
                updateFromHsl(hsl.h, hsl.s, Number(e.target.value))
              }
              min="0"
              max="100"
            />
          </div>
        </div>
        {error && <p className="text-danger">{error}</p>}
      </CardContent>
    </Card>
  );
}
