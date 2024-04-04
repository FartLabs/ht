import { renderElement } from "./shared/mod.ts";

/**
 * ScriptProps are the props for the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/script
 */
export interface ScriptProps {
  children: unknown[] | undefined;
  async: string | undefined;
  attributionsrc: string | undefined;
  blocking: string | undefined;
  crossorigin: string | undefined;
  defer: string | undefined;
  fetchpriority: string | undefined;
  integrity: string | undefined;
  nomodule: string | undefined;
  referrerpolicy: string | undefined;
  src: string | undefined;
  type: string | undefined;
}

/** script renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element. */
export function script(props: ScriptProps): string {
  return renderElement("script", props);
}
