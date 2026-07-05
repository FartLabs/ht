/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ModelElementProps } from "@fartlabs/ht/html/model";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ModelElementProps };

/**
 * MODEL renders the [`model`](undefined) element.
 * @experimental
 */
export function MODEL(
  props?: ModelElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "model",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
