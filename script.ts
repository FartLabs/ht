import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ScriptProps are the props for the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script>
 */
export interface ScriptProps extends GlobalAttributes {
  async?: string | undefined;
  attributionsrc?: string | undefined;
  blocking?: string | undefined;
  crossorigin?: string | undefined;
  defer?: string | undefined;
  fetchpriority?: string | undefined;
  integrity?: string | undefined;
  nomodule?: string | undefined;
  referrerpolicy?: string | undefined;
  src?: string | undefined;
  type?: string | undefined;
}

/**
 * script renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script>
 */
export function script(props?: ScriptProps, ...children: string[]): string {
  return renderElement("script", props as AnyProps, false, children);
}
