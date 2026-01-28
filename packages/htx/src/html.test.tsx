import { assertEquals } from "@std/assert";
import { A, INPUT, LABEL, P } from "./mod.ts";

Deno.test("INPUT renders valid html", () => {
  assertEquals(<INPUT name="test" />, `<input name="test">`);
  assertEquals(
    <INPUT type="button" name="test" />,
    `<input type="button" name="test">`,
  );
  assertEquals(
    <INPUT type="checkbox" name="test" checked />,
    `<input type="checkbox" name="test" checked>`,
  );
  assertEquals(
    <INPUT type="color" name="test" />,
    `<input type="color" name="test">`,
  );
  assertEquals(
    <INPUT type="date" name="test" />,
    `<input type="date" name="test">`,
  );
  assertEquals(
    <INPUT type="datetime-local" name="test" />,
    `<input type="datetime-local" name="test">`,
  );
  assertEquals(
    <INPUT type="email" name="test" />,
    `<input type="email" name="test">`,
  );
  assertEquals(
    <INPUT type="file" name="test" />,
    `<input type="file" name="test">`,
  );
  assertEquals(
    <INPUT type="hidden" name="test" />,
    `<input type="hidden" name="test">`,
  );
  assertEquals(
    <INPUT type="image" name="test" />,
    `<input type="image" name="test">`,
  );
  assertEquals(
    <INPUT type="month" name="test" />,
    `<input type="month" name="test">`,
  );
  assertEquals(
    <INPUT type="number" name="test" />,
    `<input type="number" name="test">`,
  );
  assertEquals(
    <INPUT type="password" name="test" />,
    `<input type="password" name="test">`,
  );
  assertEquals(
    <INPUT type="radio" name="test" />,
    `<input type="radio" name="test">`,
  );
  assertEquals(
    <INPUT type="range" name="test" />,
    `<input type="range" name="test">`,
  );
  assertEquals(
    <INPUT type="reset" name="test" />,
    `<input type="reset" name="test">`,
  );
  assertEquals(
    <INPUT type="search" name="test" />,
    `<input type="search" name="test">`,
  );
  assertEquals(
    <INPUT type="submit" name="test" />,
    `<input type="submit" name="test">`,
  );
  assertEquals(
    <INPUT type="tel" name="test" />,
    `<input type="tel" name="test">`,
  );
  assertEquals(
    <INPUT type="text" name="test" />,
    `<input type="text" name="test">`,
  );
  assertEquals(
    <INPUT type="time" name="test" />,
    `<input type="time" name="test">`,
  );
  assertEquals(
    <INPUT type="url" name="test" />,
    `<input type="url" name="test">`,
  );
  assertEquals(
    <INPUT type="week" name="test" />,
    `<input type="week" name="test">`,
  );
});

Deno.test("LABEL renders valid html", () => {
  assertEquals(<LABEL>Test</LABEL>, `<label>Test</label>`);

  assertEquals(
    <LABEL>JSX</LABEL>,
    `<label>JSX</label>`,
  );
  assertEquals(
    LABEL({ children: "Prop " }, "Manual"),
    `<label>Prop Manual</label>`,
  );
});

Deno.test("Nested elements render valid html", () => {
  assertEquals(
    <P>
      This is a <A href="https://example.com">link</A>.
    </P>,
    `<p>This is a <a href="https://example.com">link</a>.</p>`,
  );
});
