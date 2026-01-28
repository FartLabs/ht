import { assertEquals } from "@std/assert";
import { CIRCLE, SVG } from "./svg.ts";

Deno.test("SVG renders valid html", () => {
  assertEquals(
    <SVG width="100" height="100">
      <CIRCLE
        cx="50"
        cy="50"
        r="40"
        stroke="green"
        stroke-width="4"
        fill="yellow"
      />
    </SVG>,
    `<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle></svg>`,
  );
});
