import { useGSAP } from "@gsap/react"
import { RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

export default function useHomeAnimations(scope: RefObject<any>) {
	gsap.registerPlugin(useGSAP)
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(SplitText)
	useGSAP(
		() => {
			gsap.from(".aniherospec", {
				x: 200,
				opacity: 0,
				ease: "power4.inOut",
				duration: 0.8,
				stagger: { amount: 0.08 },
				autoAlpha: 0,
			})
			gsap.from(".aniherosec > *", {
				opacity: 0,
				y: 500,
				ease: "back(1.7)",
				duration: 0.8,
				stagger: 0.08,
				autoAlpha: 0,
			})
			gsap.from(".aniherosubheading", {
				opacity: 0,
				y: 30,
				ease: "back(1.7)",
				duration: 0.7,
				autoAlpha: 0,
			})
			SplitText.create(".aniheroheading", {
				type: "words, chars",
				onSplit(splitText) {
					gsap.fromTo(
						splitText.chars,
						{
							duration: 0.6,
							y: 20,
							opacity: 0,
							stagger: 0.02,
							ease: "power4.inOut",
						},
						{
							y: 0,
							opacity: 1,
							stagger: 0.02,
							ease: "power4.inOut",
						}
					)
				},
			})
			gsap.to(".aniheroheading", {
				opacity: 1,
				duration: 0.7,
				ease: "power4.inOut",
			})
			gsap.utils.toArray(".aniabsheading").forEach((el: any) => {
				SplitText.create(el, {
					type: "words, chars",
					onSplit(splitText) {
						gsap.from(splitText.chars, {
							scrollTrigger: el,
							opacity: 0,
							y: 40,
							ease: "back(1.7)",
							stagger: 0.01,
							duration: 0.4,
						})
					},
				})
			})
			gsap.from(".aniabsitems > div", {
				scrollTrigger: {
					trigger: ".aniabsitems",
					start: "top center",
				},
				opacity: 0,
				y: 500,
				ease: "back(1.7)",
				duration: 0.8,
				stagger: 0.08,
			})
			gsap.from(".anifeatureillr", {
				scrollTrigger: {
					trigger: ".aniabsitems",
					start: "top center",
				},
				x: 200,
				opacity: 0,
				ease: "power4.inOut",
				duration: 0.8,
				stagger: { amount: 0.08 },
				autoAlpha: 0,
			})
			gsap.utils.toArray(".aniupwrd").forEach((el: any) => {
				gsap.from(el, {
					scrollTrigger: {
						trigger: el,
					},
					opacity: 0,
					y: 30,
					ease: "back(1.7)",
					duration: 0.5,
				})
			})
			gsap.from(".aniconupwrd > div", {
				scrollTrigger: {
					trigger: ".aniconupwrd",
					start: "top 80%",
				},
				opacity: 0,
				y: 30,
				ease: "back(1.7)",
				duration: 0.5,
				stagger: 0.09,
			})
			gsap.from(".anifaq", {
				scrollTrigger: {
					trigger: ".anifaq",
					start: "top 80%",
				},
				y: 30,
				opacity: 0,
				ease: "back(1.7)",
				duration: 0.9,
			})
		},
		{ scope }
	)
}
