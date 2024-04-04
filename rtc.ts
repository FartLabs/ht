import { renderElement } from "./shared/mod.ts";

/**
 * RtcProps are the props for the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/rtc
 */
export interface RtcProps {
  children: unknown[] | undefined;
}

/** rtc renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element. */
export function rtc(props: RtcProps): string {
  return renderElement("rtc", props);
}
