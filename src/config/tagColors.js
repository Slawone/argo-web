const tagColorMap = {
  "новости": "tag-color-1",
  "интервью": "tag-color-2",
};

export const getTagColorClass = (tag) => tagColorMap[tag] || "accent-color accent-border";