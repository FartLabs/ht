/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * CameraElementProps are the props for the [`camera`](undefined) element.
 * @experimental
 */
export interface CameraElementProps extends GlobalAttributes {
}

/**
 * camera renders the [`camera`](undefined) element.
 * @experimental
 */
export function camera(
  props?: CameraElementProps,
  ...children: string[]
): string {
  return renderElement("camera", props as AnyProps, false, children);
}
