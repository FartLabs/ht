import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TextareaElementProps are the props for the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea>
 */
export interface TextareaElementProps extends GlobalAttributes {
  /** `autocomplete` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  autocomplete?: string | undefined;
  /** `cols` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  cols?: string | undefined;
  /** `dirname` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  dirname?: string | undefined;
  /** `disabled` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  disabled?: string | undefined;
  /** `form` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  form?: string | undefined;
  /** `maxlength` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  maxlength?: string | undefined;
  /** `minlength` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  minlength?: string | undefined;
  /** `name` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  name?: string | undefined;
  /** `placeholder` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  placeholder?: string | undefined;
  /** `readonly` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  readonly?: string | undefined;
  /** `required` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  required?: string | undefined;
  /** `rows` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  rows?: string | undefined;
  /** `spellcheck` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  spellcheck?: string | undefined;
  /** `wrap` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
  wrap?: string | undefined;
}

/**
 * textarea renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea>
 */
export function textarea(
  props?: TextareaElementProps,
  ...children: string[]
): string {
  return renderElement("textarea", props as AnyProps, false, children);
}
