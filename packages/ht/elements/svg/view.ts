/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ViewElementProps are the props for the [`view`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view>
 */
export interface ViewElementProps extends GlobalAttributes {
  /**
   * `preserveAspectRatio` is an attribute of the [`view`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view#preserveAspectRatio>
   */
  preserveAspectRatio?: string | undefined;
  /**
   * `viewBox` is an attribute of the [`view`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view#viewBox>
   */
  viewBox?: string | undefined;
  /**
   * `zoomAndPan` is an attribute of the [`view`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view#zoomAndPan>
   * @deprecated
   */
  zoomAndPan?: string | undefined;
}

/**
 * view renders the [`view`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view>
 */
export function view(props?: ViewElementProps, ...children: string[]): string {
  return renderElement("view", props as AnyProps, false, children);
}
