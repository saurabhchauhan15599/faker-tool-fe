const SVG_COLOR_BLACK = "#111111";
const SVG_COLOR_WHITE = "#ffffff";
const SVG_COLOR_BLUE = "#0078d4";
const SVG_COLOR_GREEN = "#107c10";
const SVG_COLOR_ORANGE = "#ca5010";
const SVG_COLOR_PURPLE = "#5c2d91";
const SVG_ERROR = "#DC362E";
const SVG_INFO = "#555555";
const SVG_COLOR_GREY = "#777777";
const SVG_COLOR_YELLOW = "#ffb900";
const SVG_COLOR_PINK = "#e3008c";
const SVG_COLOR_TEAL = "#00aba9";
const SVG_COLOR_SKY = "#2E63FA";
const SVG_COLOR_GRASS = "#498205";

export {
  SVG_COLOR_BLACK,
  SVG_COLOR_BLUE,
  SVG_COLOR_GRASS,
  SVG_COLOR_GREEN,
  SVG_COLOR_GREY,
  SVG_COLOR_ORANGE,
  SVG_COLOR_PINK,
  SVG_COLOR_PURPLE,
  SVG_COLOR_SKY,
  SVG_COLOR_TEAL,
  SVG_COLOR_WHITE,
  SVG_COLOR_YELLOW,
  SVG_ERROR,
  SVG_INFO,
};

export const randomColorGenerator = () => {
  const colorArray = [
    "#111111",
    "#0078d4",
    "#107c10",
    "#ca5010",
    "#5c2d91",
    "#DC362E",
    "#555555",
    "#777777",
    "#ffb900",
    "#e3008c",
    "#00aba9",
    "#2E63FA",
    "#498205",
  ];
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  const randomColor = colorArray[randomIndex];
  return randomColor;
};

export function getCommaSeparatedValue(value: string) {
  if (value) {
    value = Number(value).toFixed(2).toString();
    const parts = value.split(".");
    return Number(parts[0]).toLocaleString() + "." + parts[1];
  } else {
    return null;
  }
}

export function validateLimit(limit: string) {
  const numberRegex = /^\d+$/;
  return numberRegex.test(limit);
}

export function paginate(currentPage: number, limit: number) {
  return (currentPage - 1) * limit;
}
