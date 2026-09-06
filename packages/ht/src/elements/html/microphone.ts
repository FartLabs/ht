/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MicrophoneElementProps are the props for the [`microphone`](undefined) element.
 * @experimental
 */
export interface MicrophoneElementProps extends GlobalAttributes {
}

/**
 * microphone renders the [`microphone`](undefined) element.
 * @experimental
 */
export function microphone(
  props?: MicrophoneElementProps,
  ...children: string[]
): string {
  return renderElement("microphone", props as AnyProps, false, children);
}
