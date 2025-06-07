import { RefObject } from "react"

export function hoz_scroll(
	ele: RefObject<HTMLElement | undefined>,
	dir: "left" | "right"
) {
	ele.current!.scrollBy(dir == "left" ? -50 : 50, 0)
}
