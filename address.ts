import { renderElement } from "./shared/mod.ts";

/**
 * AddressProps are the props for the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/address
 */
export interface AddressProps {
  children: unknown[] | undefined;
}

/** address renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element. */
export function address(props: AddressProps): string {
  return renderElement("address", props);
}
