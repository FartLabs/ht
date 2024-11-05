/**
 * GlobalAttributes are the global attributes for HTML elements.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes>
 */
export interface GlobalAttributes extends DataAttributes {
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey> */
  accesskey?: string | undefined;
  /**
   * @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/anchor>
   * @experimental
   */
  anchor?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize> */
  autocapitalize?: string | undefined;
  /**
   * @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocorrect>
   * @experimental
   */
  autocorrect?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autofocus> */
  autofocus?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class> */
  class?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable> */
  contenteditable?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir> */
  dir?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable> */
  draggable?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/enterkeyhint> */
  enterkeyhint?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts> */
  exportparts?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden> */
  hidden?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id> */
  id?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inert> */
  inert?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode> */
  inputmode?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is> */
  is?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang> */
  lang?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/nonce> */
  nonce?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part> */
  part?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/popover> */
  popover?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot> */
  slot?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck> */
  spellcheck?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style> */
  style?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex> */
  tabindex?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title> */
  title?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate> */
  translate?: string | undefined;
  /**
   * @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy>
   * @experimental
   */
  virtualkeyboardpolicy?: string | undefined;
  /** @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes/writingsuggestions> */
  writingsuggestions?: string | undefined;
}

/**
 * DataAttributes are the attributes that start with `data-` for HTML elements.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Global_attributes#data-*>
 */
export interface DataAttributes {
  [attr: `data-${string}`]: string | undefined;
}
