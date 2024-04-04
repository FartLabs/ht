import { renderElement } from "./shared/mod.ts";

/**
 * TextareaProps are the props for the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/textarea
 */
export interface TextareaProps {
  children: unknown[] | undefined;
  autocomplete: string | undefined;
  cols: string | undefined;
  dirname: string | undefined;
  disabled: string | undefined;
  form: string | undefined;
  maxlength: string | undefined;
  minlength: string | undefined;
  name: string | undefined;
  placeholder: string | undefined;
  readonly: string | undefined;
  required: string | undefined;
  rows: string | undefined;
  spellcheck: string | undefined;
  wrap: string | undefined;
}

/** textarea renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element. */
export function textarea(props: TextareaProps): string {
  return renderElement("textarea", props);
}
