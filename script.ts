/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ScriptElementProps are the props for the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script>
 */
export interface ScriptElementProps extends GlobalAttributes {
  /**
   * `async` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#async>
   */
  async?: string | undefined;
  /**
   * `attributionsrc` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#attributionsrc>
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `blocking` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#blocking>
   * @experimental
   */
  blocking?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `defer` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#defer>
   */
  defer?: string | undefined;
  /**
   * `fetchpriority` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#fetchpriority>
   */
  fetchpriority?: string | undefined;
  /**
   * `integrity` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#integrity>
   */
  integrity?: string | undefined;
  /**
   * `nomodule` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#nomodule>
   */
  nomodule?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `src` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#src>
   */
  src?: string | undefined;
  /**
   * `type` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script#type>
   */
  type?: string | undefined;
}

/**
 * script renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script>
 */
export function script(
  props?: ScriptElementProps,
  ...children: string[]
): string {
  return renderElement("script", props as AnyProps, false, children);
}
