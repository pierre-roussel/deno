import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { LRUCache } from './LRU.ts';


Deno.test('LRU works as expected', () => {
  const lRUCache = new LRUCache(2);
  lRUCache.put(1, 0);
  lRUCache.put(2, 2);
  assertEquals(lRUCache.get(1), 0);
  lRUCache.put(3, 3);
  assertEquals(lRUCache.get(2), -1);
  lRUCache.put(4, 4);
  assertEquals(lRUCache.get(1), -1);
  assertEquals(lRUCache.get(3), 3);
  assertEquals(lRUCache.get(4), 4);
});