import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TextareaProps are the props for the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea>
 */
export interface TextareaProps extends GlobalAttributes {
  autocomplete?: string | undefined;
  cols?: string | undefined;
  dirname?: string | undefined;
  disabled?: string | undefined;
  form?: string | undefined;
  maxlength?: string | undefined;
  minlength?: string | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  readonly?: string | undefined;
  required?: string | undefined;
  rows?: string | undefined;
  spellcheck?: string | undefined;
  wrap?: string | undefined;
}

/**
 * textarea renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea>
 */
export function textarea(props?: TextareaProps & ChildrenProps): string {
  return renderElement("textarea", props);
}
