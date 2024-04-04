/**
 * renderElement renders an HTML element to a string.
 */
export function renderElement(
  tag: string,
  props: { children?: unknown[] },
  isVoidElement = false,
): string {
  const attrs = renderAttrs(props as Record<string, string>);
  const openingTag = `<${tag}${attrs ? ` ${attrs}` : ""}>`;
  if (isVoidElement) {
    return openingTag;
  }

  return `${openingTag}${(props.children ?? []).join("")}</${tag}>`;
}

function renderAttrs(props: Record<string, string>): string {
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
