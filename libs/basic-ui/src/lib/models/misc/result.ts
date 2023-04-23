import { Error } from './error';
export type Result<T> = {
  value: T | null;
  error: Error | null;
  loading: boolean;
};
