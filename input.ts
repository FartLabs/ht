/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * InputElementPropsBase are the base props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface InputElementPropsBase extends GlobalAttributes {
  /** `accept` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  accept?: string | undefined;
  /**
   * `align` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @deprecated
   */
  align?: string | undefined;
  /** `alt` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  alt?: string | undefined;
  /** `capture` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  capture?: string | undefined;
  /** `checked` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  checked?: string | undefined;
  /** `dirname` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  dirname?: string | undefined;
  /** `disabled` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  disabled?: string | undefined;
  /** `form` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  form?: string | undefined;
  /** `formaction` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formaction?: string | undefined;
  /** `formenctype` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formenctype?: string | undefined;
  /** `formmethod` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formmethod?: string | undefined;
  /** `formnovalidate` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formnovalidate?: string | undefined;
  /** `formtarget` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formtarget?: string | undefined;
  /** `list` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  list?: string | undefined;
  /** `max` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  max?: string | undefined;
  /** `maxlength` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  maxlength?: string | undefined;
  /** `min` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  min?: string | undefined;
  /** `minlength` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  minlength?: string | undefined;
  /**
   * `mozactionhint` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @deprecated
   */
  mozactionhint?: string | undefined;
  /** `multiple` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  multiple?: string | undefined;
  /** `name` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  name?: string | undefined;
  /** `pattern` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  pattern?: string | undefined;
  /** `placeholder` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  placeholder?: string | undefined;
  /** `popovertarget` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  popovertarget?: string | undefined;
  /** `popovertargetaction` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  popovertargetaction?: string | undefined;
  /** `readonly` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  readonly?: string | undefined;
  /** `src` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  src?: string | undefined;
  /** `step` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  step?: string | undefined;
  /**
   * `usemap` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @deprecated
   */
  usemap?: string | undefined;
  /**
   * `x-moz-errormessage` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @deprecated
   */
  "x-moz-errormessage"?: string | undefined;
}

/**
 * ButtonInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="button"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface ButtonInputElementProps extends InputElementPropsBase {
  type: "button";
}

/**
 * CheckboxInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="checkbox"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface CheckboxInputElementProps extends InputElementPropsBase {
  type: "checkbox";
}

/**
 * ColorInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="color"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface ColorInputElementProps extends InputElementPropsBase {
  type: "color";
}

/**
 * DateInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="date"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface DateInputElementProps extends InputElementPropsBase {
  type: "date";
}

/**
 * DatetimeLocalInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="datetime-local"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface DatetimeLocalInputElementProps extends InputElementPropsBase {
  type: "datetime-local";
}

/**
 * EmailInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="email"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface EmailInputElementProps extends InputElementPropsBase {
  type: "email";
}

/**
 * FileInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="file"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface FileInputElementProps extends InputElementPropsBase {
  type: "file";
}

/**
 * HiddenInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="hidden"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface HiddenInputElementProps extends InputElementPropsBase {
  type: "hidden";
}

/**
 * ImageInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="image"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface ImageInputElementProps extends InputElementPropsBase {
  type: "image";
}

/**
 * MonthInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="month"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface MonthInputElementProps extends InputElementPropsBase {
  type: "month";
}

/**
 * NumberInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="number"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface NumberInputElementProps extends InputElementPropsBase {
  type: "number";
}

/**
 * PasswordInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="password"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface PasswordInputElementProps extends InputElementPropsBase {
  type: "password";
}

/**
 * RadioInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="radio"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface RadioInputElementProps extends InputElementPropsBase {
  type: "radio";
}

/**
 * RangeInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="range"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface RangeInputElementProps extends InputElementPropsBase {
  type: "range";
}

/**
 * ResetInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="reset"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface ResetInputElementProps extends InputElementPropsBase {
  type: "reset";
}

/**
 * SearchInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="search"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface SearchInputElementProps extends InputElementPropsBase {
  type: "search";
}

/**
 * SubmitInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="submit"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface SubmitInputElementProps extends InputElementPropsBase {
  type: "submit";
}

/**
 * TelInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="tel"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface TelInputElementProps extends InputElementPropsBase {
  type: "tel";
}

/**
 * TextInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="text"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface TextInputElementProps extends InputElementPropsBase {
  type: "text";
}

/**
 * TimeInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="time"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface TimeInputElementProps extends InputElementPropsBase {
  type: "time";
}

/**
 * UrlInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="url"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface UrlInputElementProps extends InputElementPropsBase {
  type: "url";
}

/**
 * WeekInputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element with the `type="week"` attribute.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface WeekInputElementProps extends InputElementPropsBase {
  type: "week";
}

/**
 * InputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export type InputElementProps =
  | ButtonInputElementProps
  | CheckboxInputElementProps
  | ColorInputElementProps
  | DateInputElementProps
  | DatetimeLocalInputElementProps
  | EmailInputElementProps
  | FileInputElementProps
  | HiddenInputElementProps
  | ImageInputElementProps
  | MonthInputElementProps
  | NumberInputElementProps
  | PasswordInputElementProps
  | RadioInputElementProps
  | RangeInputElementProps
  | ResetInputElementProps
  | SearchInputElementProps
  | SubmitInputElementProps
  | TelInputElementProps
  | TextInputElementProps
  | TimeInputElementProps
  | UrlInputElementProps
  | WeekInputElementProps;

/**
 * input renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export function input(props?: InputElementProps): string {
  return renderElement("input", props as unknown as AnyProps, true);
}
