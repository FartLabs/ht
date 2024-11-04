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
  /**
   * `shadowrootclonable` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/template#shadowrootclonable>
   */
  shadowrootclonable?: string | undefined;
  /**
   * `shadowrootdelegatesfocus` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/template#shadowrootdelegatesfocus>
   */
  shadowrootdelegatesfocus?: string | undefined;
  /**
   * `shadowrootmode` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/template#shadowrootmode>
   */
  shadowrootmode?: string | undefined;
  /**
   * `shadowrootserializable` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/template#shadowrootserializable>
   * @experimental
   */
  shadowrootserializable?: string | undefined;
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
