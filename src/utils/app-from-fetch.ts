import { fromFetch } from 'rxjs/fetch';

// TODO: Hunter - Create custom operator
export function appFromFetch<T>(url: string, opts?: RequestInit) {
  const defaultOpts: RequestInit = {};
  return fromFetch(url, { ...defaultOpts, ...opts });
}
