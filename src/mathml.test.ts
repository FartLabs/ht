import { assertEquals } from "@std/assert";
import { math, mi, mo, msup } from "./mathml.ts";

Deno.test("mathml renders valid html", () => {
  assertEquals(
    math({}, msup({}, mi({}, "x"), mi({}, "2")), mo({}, "+"), mi({}, "y")),
    `<math><msup><mi>x</mi><mi>2</mi></msup><mo>+</mo><mi>y</mi></math>`,
  );
});
