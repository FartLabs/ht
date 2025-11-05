/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * TemplateElementProps are the props for the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template>
 */
export interface TemplateElementProps extends GlobalAttributes {
  /**
   * `shadowrootclonable` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootclonable>
   */
  shadowrootclonable?: string | undefined;
  /**
   * `shadowrootdelegatesfocus` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus>
   */
  shadowrootdelegatesfocus?: string | undefined;
  /**
   * `shadowrootmode` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootmode>
   */
  shadowrootmode?: string | undefined;
  /**
   * `shadowrootserializable` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootserializable>
   * @experimental
   */
  shadowrootserializable?: string | undefined;
}

/**
 * template renders the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template>
 */
export function template(
  props?: TemplateElementProps,
  ...children: string[]
): string {
  return renderElement("template", props as AnyProps, false, children);
}
