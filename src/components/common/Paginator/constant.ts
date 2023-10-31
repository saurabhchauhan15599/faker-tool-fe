export const DOTS = "...";

export const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const dropDownOptions = [
  { id: 1, label: "10/page", value: 10 },
  { id: 2, label: "20/page", value: 20 },
  { id: 3, label: "30/page", value: 30 },
];
