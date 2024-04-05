/**
 * AnyProps are the props for any HTML element.
 */
export type AnyProps = Record<string, string | undefined>;

/**
 * renderElement renders an HTML element to a string.
 */
export function renderElement(
  tag: string,
  props?: AnyProps,
  isVoid?: boolean,
  children?: string[],
): string {
  const attrs = renderAttrs(props);
  const openingTag = `<${tag}${attrs ? ` ${attrs}` : ""}>`;
  if (isVoid) {
    return openingTag;
  }

  return `${openingTag}${children?.join("")}</${tag}>`;
}

/**
 * renderAttrs renders HTML attributes to a string.
 */
export function renderAttrs(
  props?: AnyProps,
): string {
  let attrs = "";
  for (const key in props) {
    if (key === "children" || props[key] === undefined) {
      continue;
    }

    const value = props[key];
    if (attrs.length !== 0) {
      attrs += " ";
    }

    attrs += `${key}="${value}"`;
  }

  return attrs;
}

/**
 * renderStyle renders CSS styles to a string.
 */
export function renderStyle(props?: Record<string, string>): string {
  let styles = "";
  for (const key in props) {
    const value = props[key];
    styles += `${key}:${value};`;
  }

  return styles;
}
