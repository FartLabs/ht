import { renderElement } from "./shared/mod.ts";

/**
 * RubyProps are the props for the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/ruby
 */
export interface RubyProps {
  children: unknown[] | undefined;
}

/** ruby renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) element. */
export function ruby(props: RubyProps): string {
  return renderElement("ruby", props);
}
