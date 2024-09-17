const cache = new Map();

export function setCache(key: string, value: any) {
  cache.set(key, { value, timestamp: Date.now() });
}

export function getCache(key: string, maxAge: number) {
  const cached = cache.get(key);
  if (!cached) return null;

  const isExpired = Date.now() - cached.timestamp > maxAge;
  if (isExpired) {
    cache.delete(key);
    return null;
  }
  return cached.value;
}
