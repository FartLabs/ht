/**
 * renderElement renders an HTML element to a string.
 */
export function renderElement<T>(
  tag: string,
  props: T & { children?: unknown[] },
  isVoidElement = false,
): string {
  const attrs = renderAttrs(props);
  const openingTag = `<${tag}${attrs ? ` ${attrs}` : ""}>`;
  if (isVoidElement) {
    return openingTag;
  }

  return `${openingTag}${(props.children ?? []).join("")}</${tag}>`;
}

function renderAttrs<T>(props: T): string {
  let attrs = "";
  for (const key in props) {
    if (key === "children") {
      continue;
    }

    const value = props[key];
    switch (typeof value) {
      case "string":
      case "number": {
        attrs += `${key}="${value}" `;
        break;
      }

      case "boolean": {
        if (value) {
          attrs += `${key} `;
        }

        break;
      }

      case "function": {
        if (value.name === "") {
          continue;
        }

        attrs += `${key}="${value.name}"`;
        break;
      }

      default: {
        throw new Error(
          `Invalid prop type ${typeof value} for prop ${key}`,
        );
      }
    }
  }

  return attrs;
}
