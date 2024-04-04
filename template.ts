import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * TemplateProps are the props for the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
export interface TemplateProps extends GlobalAttributes {
  shadowrootmode?: string | undefined;
}

/** template renders the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element. */
export function template(props?: TemplateProps & ChildrenProps): string {
  return renderElement("template", props);
}
