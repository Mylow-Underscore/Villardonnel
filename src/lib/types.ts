export type ActionResult<T = unknown, E = string> = {
  ok: boolean;
  data?: T;
  error?: E;
};
