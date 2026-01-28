import { assertEquals } from "@std/assert";
import { MATH, MI, MO, MSUP } from "./mathml.ts";

Deno.test("MATHML renders valid html", () => {
  assertEquals(
    <MATH>
      <MSUP>
        <MI>x</MI>
        <MI>2</MI>
      </MSUP>
      <MO>+</MO>
      <MI>y</MI>
    </MATH>,
    `<math><msup><mi>x</mi><mi>2</mi></msup><mo>+</mo><mi>y</mi></math>`,
  );
});
