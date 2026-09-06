/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MicrophoneElementProps } from "@fartlabs/ht/html/microphone";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MicrophoneElementProps };

/**
 * MICROPHONE renders the [`microphone`](undefined) element.
 * @experimental
 */
export function MICROPHONE(
  props?: MicrophoneElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "microphone",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
