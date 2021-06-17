import { useLocation } from "react-router"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useURLQuery() {
  return new URLSearchParams(useLocation().search)
}
