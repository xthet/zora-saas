import { ListIcon, XIcon } from "@phosphor-icons/react"
import clsx from "clsx"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

const menuLinks = ["Home", "Features", "About Us", "Services"]

export default function Navbar() {
	const [ShowDropdown, setShowDropdown] = useState(false)
	const hamburgerRef = useRef<any>(null)

	return (
		<nav className="fixed top-0 z-[999] left-0 right-0 p-2">
			<div className="w-full p-2 bg-primary fl-tl fl-c overflow-hidden text-background text-sm aninav rounded-[9999px]">
				<div className="fl-cl gap-4 fl-sb w-full">
					<div className="fl-cl gap-[84px]">
						<Link
							href={"/"}
							className="relative w-[40px] aspect-[1.92/1] md:w-[77px]"
						>
							<Image src="/images/logo.svg" alt="logo" fill />
						</Link>
						<div className="hidden lg:fl-cl">
							{menuLinks.map((link, i) => {
								return (
									<Link
										href={"#"}
										key={i}
										className="px-4 py-1 rounded-full cursor-pointer duration-300 border border-transparent hover:border-background"
									>
										{link}
									</Link>
								)
							})}
						</div>
					</div>
					<div className="hidden lg:fl-cr gap-2.5 font-medium self-stretch">
						<Link href={"#"}>Login</Link>
						<span className="w-px h-3 opacity-80 bg-background" />
						<Link
							href={"#"}
							className="bg-alt px-5 py-2 rounded-full cursor-pointer hover:bg-background hover:text-primary duration-300  h-full fl-cc"
						>
							Register
						</Link>
					</div>
					<button
						ref={hamburgerRef}
						onClick={() => {
							hamburgerRef.current!.disabled = true
							setShowDropdown((prev) => {
								const stl = gsap.timeline({
									onComplete: () => {
										hamburgerRef.current!.disabled = false
									},
								})
								if (prev) {
									stl
										.to(".aninavgrid", {
											gridTemplateRows: "0fr",
											duration: 0.4,
											ease: "power4.inOut",
										})
										.to(".aninav", {
											borderRadius: "9999px 9999px 9999px 9999px",
											duration: 0.9,
											ease: "power4.inOut",
										})

									return false
								} else {
									stl
										.to(".aninav", {
											borderRadius: "20px 20px 20px 20px",
											duration: 0.19,
											ease: "power4.inOut",
										})
										.to(
											".aninavgrid",
											{
												gridTemplateRows: "1fr",
												duration: 0.4,
												ease: "power4.inOut",
											},
											"<"
										)
									return true
								}
							})
						}}
						className={clsx(
							`lg:hidden h-full cursor-pointer hfade transition-all duration-300
							${ShowDropdown ? "p-0" : "pr-1.5"}`
						)}
					>
						{ShowDropdown ? <XIcon size={24} /> : <ListIcon size={24} />}
					</button>
				</div>
				<div className="w-full grid aninavgrid grid-rows-[0fr]">
					<div className="fl-tl fl-c overflow-hidden w-full">
						{menuLinks.map((link, i) => {
							return (
								<Link
									href={"#"}
									key={i}
									className="p-2 rounded-md cursor-pointer duration-300 border border-transparent hover:border-background hover:bg-background hover:text-primary w-full"
								>
									{link}
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		</nav>
	)
}
