import type { ChildrenProps } from "./children_props.ts";

/**
 * renderElement renders an HTML element to a string.
 */
export function renderElement(
  tag: string,
  props?: ChildrenProps,
  isVoidElement = false,
): string {
  const attrs = renderAttrs(props as Record<string, string>);
  const openingTag = `<${tag}${attrs ? ` ${attrs}` : ""}>`;
  if (isVoidElement) {
    return openingTag;
  }

  return `${openingTag}${(props?.children ?? []).join("")}</${tag}>`;
}

/**
 * renderAttrs renders HTML attributes to a string.
 */
export function renderAttrs(props: Record<string, string>): string {
  let attrs = "";
  for (const key in props) {
    if (key === "children") {
      continue;
    }

    const value = props[key];
    attrs += `${key}="${value}" `;
  }

  return attrs;
}

/**
 * renderStyle renders CSS styles to a string.
 */
export function renderStyle(props: Record<string, string>): string {
  let styles = "";
  for (const key in props) {
    const value = props[key];
    styles += `${key}:${value};`;
  }

  return styles;
}
