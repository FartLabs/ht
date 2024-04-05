import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ScriptElementProps are the props for the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script>
 */
export interface ScriptElementProps extends GlobalAttributes {
  /** `async` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
  async?: string | undefined;
  /**
   * `attributionsrc` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `blocking` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
   * @experimental
   */
  blocking?: string | undefined;
  /** `crossorigin` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
  crossorigin?: string | undefined;
  /** `defer` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
  defer?: string | undefined;
  /** `fetchpriority` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
  fetchpriority?: string | undefined;
  /** `integrity` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
  integrity?: string | undefined;
  /** `nomodule` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
  nomodule?: string | undefined;
  /** `referrerpolicy` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
  referrerpolicy?: string | undefined;
  /** `src` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
  src?: string | undefined;
  /** `type` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
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
