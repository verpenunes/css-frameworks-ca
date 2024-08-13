import { load } from "../storage/index.mjs";

export function headers() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIzMywibmFtZSI6InJpY2FyZG8iLCJlbWFpbCI6InJpY2FyZG9Ac3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNzE5NjY3NjQ4fQ.eUdRklIYBVDiQxyD3-nA_7R_kVzyXmDJAqD1xmplz8Y`,
  };
}

export async function authFetch(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
