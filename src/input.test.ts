import { assertEquals } from "@std/assert";
import { input } from "./mod.ts";

Deno.test("input renders valid html", () => {
  assertEquals(input({ name: "test" }), `<input name="test">`);
  assertEquals(
    input({ type: "button", name: "test" }),
    `<input type="button" name="test">`,
  );
  assertEquals(
    input({ type: "checkbox", name: "test" }),
    `<input type="checkbox" name="test">`,
  );
  assertEquals(
    input({ type: "color", name: "test" }),
    `<input type="color" name="test">`,
  );
  assertEquals(
    input({ type: "date", name: "test" }),
    `<input type="date" name="test">`,
  );
  assertEquals(
    input({ type: "datetime-local", name: "test" }),
    `<input type="datetime-local" name="test">`,
  );
  assertEquals(
    input({ type: "email", name: "test" }),
    `<input type="email" name="test">`,
  );
  assertEquals(
    input({ type: "file", name: "test" }),
    `<input type="file" name="test">`,
  );
  assertEquals(
    input({ type: "hidden", name: "test" }),
    `<input type="hidden" name="test">`,
  );
  assertEquals(
    input({ type: "image", name: "test" }),
    `<input type="image" name="test">`,
  );
  assertEquals(
    input({ type: "month", name: "test" }),
    `<input type="month" name="test">`,
  );
  assertEquals(
    input({ type: "number", name: "test" }),
    `<input type="number" name="test">`,
  );
  assertEquals(
    input({ type: "password", name: "test" }),
    `<input type="password" name="test">`,
  );
  assertEquals(
    input({ type: "radio", name: "test" }),
    `<input type="radio" name="test">`,
  );
  assertEquals(
    input({ type: "range", name: "test" }),
    `<input type="range" name="test">`,
  );
  assertEquals(
    input({ type: "reset", name: "test" }),
    `<input type="reset" name="test">`,
  );
  assertEquals(
    input({ type: "search", name: "test" }),
    `<input type="search" name="test">`,
  );
  assertEquals(
    input({ type: "submit", name: "test" }),
    `<input type="submit" name="test">`,
  );
  assertEquals(
    input({ type: "tel", name: "test" }),
    `<input type="tel" name="test">`,
  );
  assertEquals(
    input({ type: "text", name: "test" }),
    `<input type="text" name="test">`,
  );
  assertEquals(
    input({ type: "time", name: "test" }),
    `<input type="time" name="test">`,
  );
  assertEquals(
    input({ type: "url", name: "test" }),
    `<input type="url" name="test">`,
  );
  assertEquals(
    input({ type: "week", name: "test" }),
    `<input type="week" name="test">`,
  );
});
