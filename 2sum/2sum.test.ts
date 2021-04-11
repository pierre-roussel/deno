import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { twoSum } from "./2sum.ts";

Deno.test("The target was matched with 2 inputs", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum([3, 2, 4], 6), [1, 2]);
  assertEquals(twoSum([3, 3], 6), [0, 1]);
});
