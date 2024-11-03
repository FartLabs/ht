/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TemplateElementProps are the props for the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/template>
 */
export interface TemplateElementProps extends GlobalAttributes {
  /** `shadowrootmode` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element. */
  shadowrootmode?: string | undefined;
}

/**
 * template renders the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/template>
 */
export function template(
  props?: TemplateElementProps,
  ...children: string[]
): string {
  return renderElement("template", props as AnyProps, false, children);
}
