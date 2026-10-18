const tagColorMap = {
  "новости": "tag-color-1",
  "интервью": "tag-color-2",
  "ISCRA STORAGE": "tag-color-3"
};

export const getTagColorClass = (tag) => tagColorMap[tag] || "accent-color accent-border";