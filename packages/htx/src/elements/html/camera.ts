/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CameraElementProps } from "@fartlabs/ht/html/camera";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { CameraElementProps };

/**
 * CAMERA renders the [`camera`](undefined) element.
 * @experimental
 */
export function CAMERA(
  props?: CameraElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "camera",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
