declare class CacheBase {
  /**
   * @param prop Property name to use for the cache, or the object to initialize with.
   * @param cache An object to initialize with
   */
  constructor(prop?: string | any, cache?: any);
  /**
   * Assign value to key. Also emits set with the key and value.
   * @param key The name of the property to set. Dot-notation may be used to set nested properties.
   */
  set(key: string | any | any[], value?: any): CacheBase;

  /**
   * Return the value of key.
   * @param key The name of the property to get. Dot-notation may be used to set nested properties.
   */
  get(key: string | any[]): any;

  /**
   * Create a property on the cache with the given value only if it doesn't already exist.
   * @param key Property name or object path notation.
   */
  prime(key: string, value: any): CacheBase;

  /**
   * Set a default value to be used when .get() is called and the value is not defined on the cache. Returns a value from the defaults when only a key is passed.
   * @param key The name of the property to set. Dot-notation may be used to set nested properties.
   * @param value The value to set on the defaults object.
   */
  default(key: string | any[], value?: any): CacheBase;

  /**
   * Set an array of unique values on cache key.
   * @param key The name of the property to union. Dot-notation may be used to set nested properties.
   */
  union(key: string | any[], value: any): CacheBase;

  /**
   * Return true if the value of property key is not undefined.
   * @param key The name of the property to check. Dot-notation may be used to set nested properties.
   */
  has(key: string | any[]): boolean;

  /**
   * Returns true if the specified property is an own (not inherited) property. Similar to .has(), but returns true if the key exists, even if the value is undefined.
   */
  hasOwn(key: string): boolean;

  /**
   * Delete one or more properties from the instance.
   * @param key The name of the property to delete. Dot-notation may be used to set nested properties.
   */
  del(key: string | any): CacheBase;

  /**
   * Reset the entire cache to an empty object. Note that this does not also clear the defaults object, since you can manually do cache.defaults = {} if you want to reset that object as well.
   */
  clear(): void;

  /**
   * Gets an array of names of all enumerable properties on the cache.
   */
  keys: any[];

  /**
   * Gets the length of keys.
   */
  size: number;

  /**
   * Returns the current cache
   */
  cache: any;
}

export = CacheBase;
