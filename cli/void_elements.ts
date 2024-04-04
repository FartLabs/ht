/**
 * isVoid returns true if the given tag is a void element.
 */
export function isVoid(tag: string): boolean {
  return voidElementSet.has(tag);
}

/**
 * voidElements is a list of all void elements in HTML.
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
 */
export const voidElements = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

const voidElementSet = new Set(voidElements);
