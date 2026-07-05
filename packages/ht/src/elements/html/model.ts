/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ModelElementProps are the props for the [`model`](undefined) element.
 * @experimental
 */
export interface ModelElementProps extends GlobalAttributes {
  /**
   * `autoplay` is an attribute of the [`model`](undefined) element.
   * @see <undefined#autoplay>
   * @experimental
   */
  autoplay?: string | boolean | undefined;
  /**
   * `height` is an attribute of the [`model`](undefined) element.
   * @see <undefined#height>
   * @experimental
   */
  height?: string | undefined;
  /**
   * `loop` is an attribute of the [`model`](undefined) element.
   * @see <undefined#loop>
   * @experimental
   */
  loop?: string | boolean | undefined;
  /**
   * `src` is an attribute of the [`model`](undefined) element.
   * @see <undefined#src>
   * @experimental
   */
  src?: string | undefined;
  /**
   * `stagemode` is an attribute of the [`model`](undefined) element.
   * @see <undefined#stagemode>
   * @experimental
   */
  stagemode?: string | undefined;
  /**
   * `width` is an attribute of the [`model`](undefined) element.
   * @see <undefined#width>
   * @experimental
   */
  width?: string | undefined;
}

/**
 * model renders the [`model`](undefined) element.
 * @experimental
 */
export function model(
  props?: ModelElementProps,
  ...children: string[]
): string {
  return renderElement("model", props as AnyProps, false, children);
}
