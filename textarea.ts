/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TextareaElementProps are the props for the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea>
 */
export interface TextareaElementProps extends GlobalAttributes {
  /**
   * `autocomplete` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#autocomplete>
   */
  autocomplete?: string | undefined;
  /**
   * `cols` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#cols>
   */
  cols?: string | undefined;
  /**
   * `dirname` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#dirname>
   */
  dirname?: string | undefined;
  /**
   * `disabled` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#disabled>
   */
  disabled?: string | undefined;
  /**
   * `form` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#form>
   */
  form?: string | undefined;
  /**
   * `maxlength` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#maxlength>
   */
  maxlength?: string | undefined;
  /**
   * `minlength` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#minlength>
   */
  minlength?: string | undefined;
  /**
   * `name` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#name>
   */
  name?: string | undefined;
  /**
   * `placeholder` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#placeholder>
   */
  placeholder?: string | undefined;
  /**
   * `readonly` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#readonly>
   */
  readonly?: string | undefined;
  /**
   * `required` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#required>
   */
  required?: string | undefined;
  /**
   * `rows` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#rows>
   */
  rows?: string | undefined;
  /**
   * `spellcheck` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#spellcheck>
   */
  spellcheck?: string | undefined;
  /**
   * `wrap` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea#wrap>
   */
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
