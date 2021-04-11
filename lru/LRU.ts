class LRUCache {
  private cache: { [key: number]: number } = {};
  private size: number;
  private accessSet: Set<number>;
  
  constructor(capacity: number) {
      this.size = capacity;
      this.accessSet = new Set();
  }

  get(key: number): number {
    const value = this.cache[key];
    if (value != undefined) {
      this.updateAccessList(key);
      return value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    // Key exists, update key
    if (this.cache[key]) {
      this.updateAccessList(key);
      this.cache[key] = value;
      return;
    }

    const lruKey = this.updateAccessList(key)

    if (lruKey >= 0) {
      // Evict LRU from cache
      delete this.cache[lruKey];
    }

    this.cache[key] = value;
  }

  private updateAccessList = (key: number) => {
    // Refresh key
    if (this.accessSet.has(key)) {
      this.accessSet.delete(key)
      this.accessSet.add(key)
    }


    // Push value into set
    this.accessSet.add(key)

    // Evict least recently used from ACL
    if (this.accessSet.size > this.size) {
      const lru = this.accessSet.keys().next().value;
      console.log('LRU',lru)
      this.accessSet.delete(lru);

      // Evicted, should also kick key from cache if pushing new value
      return lru;
    }

    return -1;

  }
}

export { LRUCache }