import { useState } from 'react';

const _cache = new Map();

// @see https://dev.to/charlesstover/react-suspense-with-the-fetch-api-374j
export function useResource(_keys, promiseFn, cache = _cache) {
  const [invalidateKey, setInvalidateKey] = useState();
  const keys = [..._keys, invalidateKey];

  const { rejected, resolved, promised } = cache.get(String(keys)) || {};

  if (rejected != null) {
    throw rejected;
  }

  if (resolved != null) {
    return {
      data: resolved,
      invalidate: key => {
        setInvalidateKey(key ?? Date.now());
      },
    };
  }

  if (promised != null) {
    throw promised;
  }

  const fetchCache = createFetchCache(keys, promiseFn);

  cache.set(String(keys), fetchCache);

  throw fetchCache.promised;
}

function createFetchCache(keys, promiseFn) {
  const fetchCache = {
    keys,
    promised: promiseFn()
      .then(r => (fetchCache.resolved = r))
      .catch(e => (fetchCache.rejected = e)),
  };

  return fetchCache;
}
