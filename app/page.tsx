"use client"
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowsLeftRightIcon,
	ArrowUpIcon,
	ArrowUpRightIcon,
	CaretLeftIcon,
	CaretRightIcon,
	ChartLineUpIcon,
	CheckIcon,
	DotsThreeOutlineIcon,
	FacebookLogoIcon,
	FileTextIcon,
	GearIcon,
	HamburgerIcon,
	InstagramLogoIcon,
	LightningIcon,
	LinkedinLogoIcon,
	ListIcon,
	ListMagnifyingGlassIcon,
	PencilIcon,
	StarIcon,
	TelegramLogoIcon,
	TiktokLogoIcon,
	TrendUpIcon,
	X,
	XIcon,
	YoutubeLogoIcon,
} from "@phosphor-icons/react"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import useHomeAnimations from "./animations"
import pricing from "@/resources/json/pricing.json"
import Head from "next/head"
import testimonials from "@/resources/json/testimonials.json"
import faqs from "@/resources/json/faqs.json"
import { hoz_scroll } from "@/utils/hoz_scroll"
export default function Home() {
	const container = useRef<any>(null)
	useHomeAnimations(container)
	const [CurrentFAQ, setCurrentFAQ] = useState(-1)
	const AbsRef = useRef<any>(null)
	const Tst1Ref = useRef<any>(null)
	const Tst2Ref = useRef<any>(null)

	useEffect(() => {
		if (Tst2Ref.current) {
			Tst2Ref.current.scrollLeft = Tst2Ref.current.scrollWidth
		}
	}, [])

	return (
		<section ref={container} className="w-full">
			<Head>
				<link rel="preload" as="image" href="/images/zora_3d_asset.png" />
			</Head>
			<section className="w-full h-svh p-2 fl-tl fl-c gap-2 pt-[56px] md:pt-[72px]">
				<div className="w-full h-full relative flex-grow rounded-[20px] bg-[url('/images/hero_bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden md:fl-tl p-2 md:p-5">
					<div className="absolute -right-[140px] top-[140px] md:-right-[280px] md:-top-[204px] fl-cc size-[400px] md:size-[800px] z-10">
						<div className="relative w-full h-full overflow-hidden fl-cc">
							<Image
								src="/images/zora_3d_asset.png"
								alt="hero"
								fill
								loading="eager"
								className="object-center object-cover"
							/>
						</div>
					</div>
					<div className="size-full relative z-20 fl-tl fl-c">
						<div className="w-full fl-tl fl-c">
							<h1 className="text-[50px] lg:text-[84px] leading-12 font-medium text-primary max-w-[921px] md:leading-[1] tracking-[-0.1em] aniheroheading opacity-0">
								Sell Better with
								<br />
								<b className="font-serif font-normal tracking-tighter">
									the Right Data
								</b>
							</h1>
							<p className="text-sm max-w-[300px] md:max-w-[480px] md:text-base mt-4 aniherosubheading invisible overflow-hidden">
								Elevate Your Sales Performance: Unleashing the Strategic Power
								of Data to Achieve Unrivaled Success in Your Business
							</p>
							<button className="fl-cl gap-8 pl-3 pr-0.5 py-0.5 text-background rounded-full bg-primary mt-4 lg:hidden hfade">
								<span className="text-sm font-semibold">Get Started</span>
								<span className="size-[32px] rounded-full bg-alt fl-cc text-background">
									<ArrowRightIcon className="size-5" />
								</span>
							</button>
						</div>

						<div className="mt-auto md:fl-bl md:gap-10 md:w-full aniherosec [&>*]:invisible">
							<p className="text-[10px] max-w-[50%] md:hidden">
								Empower Your Sales Performance to Its Fullest Potential:
								Unleashing the Strategic Power of Data for Unrivaled Success
							</p>
							<div className="w-full md:w-[60%] p-2 bg-background fl-tl fl-c rounded-[16px] mt-4 max-w-[504px]">
								<div className="w-full fl-cl fl-sb gap-2">
									<span className="flex-grow p-1 rounded-full border border-secondary fl-cl gap-2 self-stretch">
										<LightningIcon weight="fill" />
										<span className="text-sm">Revenue Last Quarter</span>
										<PencilIcon className="ml-auto" />
									</span>
									<span className="aspect-square rounded-full relative overflow-hidden fl-cc size-8">
										<Image src="/images/r2.jpg" alt="avatar" fill />
									</span>
								</div>
								<div className="mt-4 w-full fl-cl fl-sb gap-2">
									<h2 className="text-[32px] font-medium">+370%</h2>
									<span className="font-medium">$4.5m</span>
								</div>
								<div className="w-full mt-4 fl-tl fl-c gap-1">
									<div className="w-full fl-bl gap-2 fl-sb overflow-hidden">
										{Array.from(new Array(5)).map((_, i) => (
											<div
												key={i}
												className="w-[20%] rounded-[16px] bg-alt-alpha fl-bc h-[84px] overflow-hidden"
											>
												<div
													className="w-full rounded-[16px] bg-alt"
													style={{ height: `${((i + 4) / 10) * 100}%` }}
												></div>
											</div>
										))}
									</div>
									<div className="w-full fl-cl fl-sb gap-px text-[10px] text-secondary px-2">
										<span>0.45</span>
										<span className="border border-secondary border-dashed h-px flex-grow"></span>
										<span>0.45</span>
										<span className="border border-secondary border-dashed h-px flex-grow"></span>
										<span>0.45</span>
									</div>
								</div>
							</div>

							<div className="hidden lg:fl-tl md:fl-c md:gap-2">
								<button className="fl-cl gap-16 pl-3 pr-0.5 py-0.5 text-background rounded-full bg-primary mt-4 hfade">
									<span className="text-sm font-semibold md:text-base">
										Get Started
									</span>
									<span className="size-[32px] md:size-[48px] rounded-full bg-alt fl-cc text-background">
										<ArrowRightIcon className="size-5 md:size-8" />
									</span>
								</button>

								<p className="text-[10px] max-w-[50%] md:text-sm md:max-w-[80%]">
									Empower Your Sales Performance to Its Fullest Potential:
									Unleashing the Strategic Power of Data for Unrivaled Success
								</p>
							</div>
						</div>
					</div>

					<div className="h-full relative z-50 max-w-[271px] hidden md:fl-br md:fl-c gap-2">
						<div className="w-full p-4 bg-background fl-tl fl-c rounded-[16px] aniherospec invisible">
							<div className="w-full fl-cl fl-sb gap-2">
								<h5 className="font-medium">User Growth</h5>
								<DotsThreeOutlineIcon weight="fill" />
							</div>

							<div className="w-full mt-4 fl-cl fl-sb gap-2">
								<span className="px-2 py-0.5 text-[10px] font-medium border border-primary rounded-full flex-grow text-center">
									12h
								</span>
								<span className="px-2 py-0.5 text-[10px] font-medium border border-primary rounded-full flex-grow text-center">
									24h
								</span>
								<span className="px-2 py-0.5 text-[10px] font-medium border border-primary rounded-full flex-grow text-center">
									A Week
								</span>
								<span className="px-2 py-0.5 text-[10px] font-medium border border-primary rounded-full flex-grow text-center">
									A Month
								</span>
							</div>

							<div className="mt-8 fl-tl fl-c gap-2 w-full">
								<div className="w-full fl-bl gap-2 fl-sb">
									<span className="font-medium text-2xl">200,000</span>
									<span className="px-2 py-0.5 text-sm font-semibold text-alt-cyan bg-alt-cyan-alpha rounded-full fl-cc gap-0.5 text-[10px]">
										<TrendUpIcon className="size-3" /> <span>+20%</span>
									</span>
								</div>
								<div className="w-full h-5 rounded-full bg-alt-cyan-alpha">
									<div className="w-1/2 h-full bg-alt-cyan rounded-full"></div>
								</div>
								<div className="fl-cl fl-sb w-full text-[10px] font-medium">
									<span>Total Onboarded</span>
									<span>+140% Today</span>
								</div>
							</div>
						</div>

						<div className="w-full p-4 bg-background fl-tl fl-c rounded-[16px] aniherospec invisible">
							<div className="w-full fl-cl fl-sb gap-2">
								<span className="rounded-full size-[40px] fl-cc bg-primary text-background">
									<GearIcon className="size-6" />
								</span>
								<span className="text-2xl font-medium">+85%</span>
							</div>

							<div className="mt-5 fl-tl fl-sb w-full">
								<div className="fl-tl fl-c gap-5">
									<span className="text-[10px] w-[80%]">
										Utilizing Cutting-Edge Strategies to Achieve Unparalleled
										Results
									</span>
									<button className="px-3 py-1 text-sm font-medium text-primary bg-alt-purple rounded-full fl-cc gap-0.5">
										Learn More
									</button>
								</div>

								<div className="fl-bl fl-c fl-sb gap-4 self-stretch">
									<span className="rounded-full p-1 bg-secondary"></span>
									<div className="fl-bl fl-c gap-1">
										{Array.from(new Array(4)).map((_, i) => (
											<div
												key={i}
												className="rounded-full p-1 bg-secondary"
											></div>
										))}
									</div>
								</div>
							</div>
						</div>

						<div className="w-full p-4 bg-background fl-tl fl-c rounded-[16px] aniherospec invisible">
							<h3 className="font-medium text-xl">
								Track Your Business Metrics Easily
							</h3>
							<div className="my-4 h-px w-full bg-secondary"></div>
							<div className="w-full fl-tl gap-2 flex-wrap">
								{[
									"Waitlist",
									"Newsletter Subscribers",
									"Paying Users",
									"Active Users",
								].map((metric, i) => (
									<span
										key={i}
										className="px-2 py-0.5 text-[10px] font-medium border border-primary rounded-full flex-grow text-center"
									>
										{metric}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full mt-[70px] px-2">
				{/* mobile */}
				<div className="w-full fl-tl fl-c gap-4 md:hidden">
					<div className="w-full fl-tl fl-c gap-4">
						<h2 className="text-[32px] font-medium text-primary leading-[1.1] tracking-tighter aniabsheading">
							An Innovative Approach to
							<br />
							<i className="not-italic text-secondary">
								Fuel your Sales Success
							</i>
						</h2>
						<p className="text-sm max-w-[300px]">
							Innovative Approaches to Propel Sales Success: Utilizing
							Cutting-Edge Strategies to Achieve Unparalleled Results
						</p>
						<div className="w-full fl-cl fl-sb gap-4">
							<div className="fl-cl">
								<button className="px-4 py-2 rounded-full font-medium text-background text-sm hfade self-stretch bg-primary">
									Learn More
								</button>
								<span className="size-[36px] rounded-full fl-cc bg-alt text-background hfade">
									<ArrowRightIcon className="size-5" />
								</span>
							</div>

							<div className="fl-cr gap-2">
								<span
									className="w-[72px] fl-cc py-1 rounded-full border border-secondary hfade"
									onClick={() => hoz_scroll(AbsRef, "left")}
								>
									<ArrowLeftIcon className="size-5 text-secondary" />
								</span>
								<span
									className="w-[72px] fl-cc py-1 border border-alt rounded-full bg-alt hfade"
									onClick={() => hoz_scroll(AbsRef, "right")}
								>
									<ArrowRightIcon className="size-5" />
								</span>
							</div>
						</div>

						<div
							className="w-full grid grid-cols-[repeat(3,80vw)] overflow-x-auto no-scroll gap-4 mt-4 scroll-smooth"
							ref={AbsRef}
						>
							<div className="w-full fl-tl fl-c gap-2 fl-sb self-stretch">
								<div className="w-full rounded-[16px] p-3 bg-foreground fl-tl fl-c gap-10 min-h-[162px] fl-sb">
									<p className="font-medium text-sm">
										Connect with the tools you’re already familiar with.
									</p>
									<div className="grid grid-cols-6 w-full gap-2">
										{[
											"/images/google_ad_icon.svg",
											"/images/google_doc_icon.svg",
											"/images/google_drive_icon.svg",
											"/images/notion_icon.svg",
											"/images/slack_icon.svg",
											"/images/zapier_icon.svg",
										].map((image, i) => (
											<div
												key={i}
												className="w-full aspect-square relative fl-cc overflow-hidden"
											>
												<Image alt="app" src={image} fill />
											</div>
										))}
									</div>
								</div>

								<p className="text-[10px] font-medium w-[70%]">
									Empower Your Sales Performance to Its Fullest Potential:
									Unleashing the Strategic Power of Data for Unrivaled Success
								</p>
							</div>

							<div className="w-full fl-tl fl-c gap-2 fl-sb self-stretch">
								<div className="w-full rounded-[16px] p-3 bg-primary fl-tl fl-c min-h-[162px] fl-sb">
									<div className="w-full fl-tl fl-sb gap-4">
										<div className="flex-grow flex-wrap fl-tl gap-2">
											{[
												"Customer Satisfaction",
												"Visitor Insight",
												"Conversion Optimization",
												"Active Users",
											].map((item, i) => (
												<span
													key={item}
													className="px-3 py-1 rounded-full text-[10px] border border-background whitespace-nowrap text-background"
												>
													{item}
												</span>
											))}
										</div>
										<span className="size-[36px] fl-cc bg-alt rounded-full text-background flex-shrink-0">
											<ArrowUpRightIcon className="size-5" />
										</span>
									</div>
									<div className="w-full fl-bl gap-2 fl-sb mt-4">
										{Array.from(new Array(5)).map((_, i) => (
											<div
												key={i}
												className="w-[20%] rounded-[16px] bg-alt-alpha fl-bc h-[64px] overflow-hidden"
											>
												<div
													className="w-full rounded-[16px] bg-alt"
													style={{ height: `${((i + 3) / 10) * 100}%` }}
												></div>
											</div>
										))}
									</div>
								</div>

								<div className="w-full rounded-full bg-foreground p-2 fl-cl">
									<div className="fl-cl">
										{["/images/r3.jpg", "/images/r4.jpg", "/images/r5.jpg"].map(
											(pfp, i) => (
												<img
													key={i}
													src={pfp}
													alt="pfp"
													className="size-[28px] rounded-full object-cover object-center overflow-hidden relative"
													style={{ zIndex: i + 1, right: `${i * 10}px` }}
												/>
											)
										)}
									</div>

									<span className="text-[10px] font-medium w-[60%]">
										Unleashing the Strategic Power of Data for Unrivaled Success
									</span>
								</div>
							</div>

							<div className="w-full fl-tl fl-c gap-2 fl-sb self-stretch">
								<div className="w-full rounded-[16px] p-3 bg-foreground fl-tl fl-c min-h-[162px] self-stretch fl-sb">
									<p className="font-semibold text-sm">Aggregate Revenue</p>
									<small className="text-[10px] font-medium">Apr 1-31</small>

									<div className="mt-5 fl-tl fl-c gap-3 w-full">
										<div className="fl-bl fl-sb gap-2 w-full">
											<h4 className="font-medium text-[28px]">
												$29.<i className="not-italic text-body">00</i>
											</h4>
											<span className="text-sm">+20%</span>
										</div>

										<div className="overflow-hidden bg-background w-full rounded-md h-3 fl-cl">
											<div className="w-[40%] h-full bg-alt rounded-md"></div>
										</div>
									</div>
								</div>
								<p className="text-[10px] font-medium w-[70%]">
									Empower Your Sales Performance to Its Fullest Potential:
									Unleashing the Strategic Power of Data for Unrivaled Success
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* desktop */}
				<div className="hidden md:fl-tl md:fl-c md:gap-4">
					<div className="w-full pl-5 fl-tl fl-c gap-4">
						<div className="fl-bl fl-sb gap-2 w-full pr-5">
							<h2 className="text-[32px] font-medium text-primary leading-[1.1] md:text-[48px] tracking-tighter aniabsheading">
								An Innovative Approach to
								<br />
								<i className="not-italic text-secondary">
									Fuel your Sales Success
								</i>
							</h2>

							<div className="fl-cr gap-2">
								<span
									className="w-[72px] fl-cc py-1 rounded-full border border-secondary hfade"
									onClick={() => {
										hoz_scroll(AbsRef, "left")
									}}
								>
									<ArrowLeftIcon className="size-5 text-secondary" />
								</span>
								<span
									className="w-[72px] fl-cc py-1 border border-alt rounded-full bg-alt hfade"
									onClick={() => {
										hoz_scroll(AbsRef, "right")
									}}
								>
									<ArrowRightIcon className="size-5" />
								</span>
							</div>
						</div>

						<div className="w-full fl-tl gap-4 fl-sb ">
							<div className="fl-tl fl-c self-stretch gap-4 fl-sb">
								<p className="text-sm max-w-[350px]">
									Innovative Approaches to Propel Sales Success: Utilizing
									Cutting-Edge Strategies to Achieve Unparalleled Results
								</p>
								<div className="fl-cl">
									<button className="px-4 py-2 rounded-full font-medium text-background text-sm hfade self-stretch bg-primary">
										Learn More
									</button>
									<span className="size-[36px] rounded-full fl-cc bg-alt text-background hfade">
										<ArrowRightIcon className="size-5" />
									</span>
								</div>
							</div>

							<div
								className="max-w-[980px] flex-grow grid grid-cols-[repeat(3,336px)] gap-4 overflow-x-auto no-scroll scroll-smooth aniabsitems"
								ref={AbsRef}
							>
								<div className="w-full fl-tl fl-c gap-2 fl-sb self-stretch">
									<div className="w-full rounded-[16px] p-3 bg-foreground fl-tl fl-c gap-10 min-h-[162px] fl-sb">
										<p className="font-medium text-sm">
											Connect with the tools you’re already familiar with.
										</p>
										<div className="grid grid-cols-6 w-full gap-2">
											{[
												"/images/google_ad_icon.svg",
												"/images/google_doc_icon.svg",
												"/images/google_drive_icon.svg",
												"/images/notion_icon.svg",
												"/images/slack_icon.svg",
												"/images/zapier_icon.svg",
											].map((image, i) => (
												<div
													key={i}
													className="w-full aspect-square relative fl-cc overflow-hidden"
												>
													<Image alt="app" src={image} fill />
												</div>
											))}
										</div>
									</div>

									<p className="text-[10px] font-medium w-[70%]">
										Empower Your Sales Performance to Its Fullest Potential:
										Unleashing the Strategic Power of Data for Unrivaled Success
									</p>
								</div>

								<div className="w-full fl-tl fl-c gap-2 fl-sb self-stretch">
									<div className="w-full rounded-[16px] p-3 bg-primary fl-tl fl-c min-h-[162px] fl-sb">
										<div className="w-full fl-tl fl-sb gap-4">
											<div className="flex-grow flex-wrap fl-tl gap-2">
												{[
													"Customer Satisfaction",
													"Visitor Insight",
													"Conversion Optimization",
													"Active Users",
												].map((item, i) => (
													<span
														key={item}
														className="px-3 py-1 rounded-full text-[10px] border border-background whitespace-nowrap text-background"
													>
														{item}
													</span>
												))}
											</div>
											<span className="size-[36px] fl-cc bg-alt rounded-full text-background flex-shrink-0">
												<ArrowUpRightIcon className="size-5" />
											</span>
										</div>
										<div className="w-full fl-bl gap-2 fl-sb mt-4">
											{Array.from(new Array(5)).map((_, i) => (
												<div
													key={i}
													className="w-[20%] rounded-[16px] bg-alt-alpha fl-bc h-[64px] overflow-hidden"
												>
													<div
														className="w-full rounded-[16px] bg-alt"
														style={{ height: `${((i + 3) / 10) * 100}%` }}
													></div>
												</div>
											))}
										</div>
									</div>

									<div className="w-full rounded-full bg-foreground p-2 fl-cl">
										<div className="fl-cl">
											{[
												"/images/r3.jpg",
												"/images/r4.jpg",
												"/images/r5.jpg",
											].map((pfp, i) => (
												<img
													key={i}
													src={pfp}
													alt="pfp"
													className="size-[28px] rounded-full object-cover object-center overflow-hidden relative"
													style={{ zIndex: i + 1, right: `${i * 10}px` }}
												/>
											))}
										</div>

										<span className="text-[10px] font-medium w-[60%]">
											Unleashing the Strategic Power of Data for Unrivaled
											Success
										</span>
									</div>
								</div>

								<div className="w-full fl-tl fl-c gap-2 fl-sb self-stretch">
									<div className="w-full rounded-[16px] p-3 bg-foreground fl-tl fl-c min-h-[162px] self-stretch fl-sb">
										<p className="font-semibold text-sm">Aggregate Revenue</p>
										<small className="text-[10px] font-medium">Apr 1-31</small>

										<div className="mt-5 fl-tl fl-c gap-3 w-full">
											<div className="fl-bl fl-sb gap-2 w-full">
												<h4 className="font-medium text-[28px]">
													$29.<i className="not-italic text-body">00</i>
												</h4>
												<span className="text-sm">+20%</span>
											</div>

											<div className="overflow-hidden bg-background w-full rounded-md h-3 fl-cl">
												<div className="w-[40%] h-full bg-alt rounded-md"></div>
											</div>
										</div>
									</div>
									<p className="text-[10px] font-medium w-[70%]">
										Empower Your Sales Performance to Its Fullest Potential:
										Unleashing the Strategic Power of Data for Unrivaled Success
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full mt-[72px] p-2">
				<div className="w-full rounded-[30px] bg-foreground p-5 md:px-5 fl-tl fl-c gap-5 md:fl-r md:fl-sb md:fl-bl">
					<div className="w-full fl-tl fl-c gap-4 md:max-w-[50%]">
						<h2 className="text-[32px] font-medium text-primary leading-[1.1] md:text-[48px] tracking-tighter aniabsheading">
							Track Every Metric
							<br />
							<i className="not-italic text-secondary">Observe Every Trend.</i>
						</h2>
						<p className="text-[10px] max-w-[70%] md:text-sm">
							Innovative Approaches to Propel Sales Success: Utilizing
							Cutting-Edge Strategies to Achieve Unparalleled Results Innovative
							Approaches to Propel Saccess: Utilizing Cutting-Edge Strategies to
							Achieve Unparalleled Results
						</p>
						<div className="fl-cl gap-2 aniupwrd">
							<span className="size-[40px] md:size-[80px] rounded-full border border-secondary fl-cc">
								<ChartLineUpIcon className="size-5 md:size-10" />
							</span>
							<span className="size-[40px] md:size-[80px] rounded-full border border-secondary fl-cc">
								<ListMagnifyingGlassIcon className="size-5 md:size-10" />
							</span>
							<span className="size-[40px] md:size-[80px] rounded-full border border-secondary fl-cc">
								<FileTextIcon className="size-5 md:size-10" />
							</span>
						</div>
					</div>

					<div className="w-full md:w-1/2 md:flex-grow fl-tl fl-c md:fl-r md:fl-br gap-4">
						<span className="hidden md:fl-cl bg-alt rounded-[16px] p-1 gap-2 pr-3">
							<span className="px-1 py-3 bg-background rounded-[12px]">
								<span className="text-2xl font-semibold">$120</span>
							</span>

							<span className="fl-tl fl-c gap-1 text-sm text-background">
								<p>Total Sales</p>
								<span className="fl-cl gap-0.5">
									<ArrowUpIcon className="size-2 text-alt-cyan" />
									<span className="text-alt-cyan">
										37.8%{" "}
										<i className="not-italic text-background">this week</i>
									</span>
								</span>
							</span>
						</span>

						<div className="w-full aspect-[0.68/1] rounded-[16px] overflow-hidden fl-cc relative md:max-w-[361px]">
							<Image
								src="/images/r6.jpg"
								alt="hero"
								fill
								className="object-cover object-right anifeatureillr"
							/>
							<div className="absolute z-[30] bottom-4 left-4 fl-tl fl-c gap-3 bg-background p-3 rounded-[16px] md:pr-5 anifeatureillr">
								<div className="size-[30px] md:size-[48px] rounded-full fl-cc bg-alt-purple">
									<ArrowsLeftRightIcon className="size-4 md:size-8" />
								</div>
								<p className="text-sm font-semibold">Engagement</p>
								<h2 className="font-semibold md:text-[48px] text-[28px]">
									20k
								</h2>
								<span className="fl-cl  text-alt-green">
									<ArrowUpIcon className="size-2" />
									<span className="text-[10px]">
										37.8% <i className="not-italic text-secondary">this week</i>
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full mt-[72px] p-2 fl-tl fl-c md:fl-cl">
				<h2 className="text-[32px] font-medium text-primary leading-[1.1] md:text-center md:text-[48px] tracking-tighter aniabsheading">
					Our Pricing is Tailored
					<br />
					<i className="not-italic text-secondary">To fit your needs.</i>
				</h2>

				<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-[32px] max-w-[1158px] aniconupwrd">
					{pricing.map((option, i) => (
						<div
							className={clsx(
								"w-full rounded-[20px] relative",
								option.popular ? "mt-8 md:mt-0" : "md:mt-4"
							)}
							key={option.price}
						>
							{option.popular && (
								<div className="absolute -top-5 left-0 right-0 fl-cc z-30">
									<div className="px-5 py-4 rounded-full text-primary bg-alt-purple border-4 border-background z-10 text-sm font-medium">
										<span>MOST POPULAR</span>
									</div>
								</div>
							)}
							<div
								className={clsx(
									"fl-tl fl-c gap-8 p-5 w-full relative overflow-hidden rounded-[20px] z-20",
									option.popular ? "bg-alt text-background" : "bg-foreground"
								)}
							>
								{option.popular && (
									<div className="absolute -right-[300px] -top-[120px] md:-right-[480px] md:-top-[304px] fl-cc size-[500px] md:size-[800px] z-10 opacity-50">
										<div className="relative w-full h-full overflow-hidden fl-cc">
											<Image
												src="/images/zora_3d_asset.png"
												alt="hero"
												fill
												className="object-center object-cover"
											/>
										</div>
									</div>
								)}
								<div className="fl-tl fl-c gap-8 p-5 w-full relative ovherflow-hidden z-30">
									<div
										className={clsx(
											"fl-tl fl-c gap-2 pb-6 border-b w-full",
											option.popular ? "border-background" : "border-secondary"
										)}
									>
										<p
											className="text-sm text-secondary font-medium uppercase"
											style={
												option.popular ? { color: "var(--col-background)" } : {}
											}
										>
											{option.title}
										</p>
										<div className="fl-bl">
											<h3 className="text-[32px] font-semibold leading-[1]">
												${option.price}
											</h3>
											<small className="font-medium leading-[1]">/month</small>
										</div>
									</div>
									<div className="w-full fl-tl fl-c gap-4">
										{option.features.map((feature, ii) => (
											<div key={feature} className="fl-cl gap-2">
												<span className="size-[20px] rounded-full bg-alt-green text-primary fl-cc">
													<CheckIcon className="size-2" />
												</span>
												<span className="text-sm">{feature}</span>
											</div>
										))}
									</div>
									<Link
										href={option.buttonLink}
										className="w-full rounded-full py-2 hover:text-primary hover:bg-background duraion-300 cursor-pointer text-center text-background bg-primary font-medium fl-cc duration-300"
									>
										{option.buttonText}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="w-full mt-[72px] p-2">
				<section className="w-full fl-tl fl-c md:fl-cl bg-foreground rounded-[32px] px-2 py-5">
					<h2 className="text-[32px] font-medium text-primary leading-[1.1] md:text-center md:text-[48px] tracking-tighter aniabsheading">
						Our Users Acknowledge
						<br />
						<i className="not-italic text-secondary">The Value We Deliver.</i>
					</h2>
					<p className="mt-4 text-sm md:mx-auto md:text-center max-w-[500px] aniupwrd">
						Acknowledged by Our Clients: The Superior Value and Expertise We
						Offer in Every Engagement
					</p>
					<div className="grid w-full grid-cols gap-2 overflow-hidden no-scroll mt-[60px]">
						<div
							className="grid grid-cols-[repeat(4,280px)] md:grid-cols-[repeat(4,471px)] gap-2 overflow-x-auto no-scroll scroll-smooth"
							ref={Tst1Ref}
						>
							{testimonials.slice(0, 4).map((testimonial, i) => (
								<div
									key={testimonial.image + i}
									className="w-full bg-background rounded-[16px] p-4 md:p-8"
								>
									<div className="fl-tl fl-c">
										<div className="fl-cl gap-2">
											<span className="size-[32px] relative overflow-hidden fl-cc rounded-full aspect-square self-stretch">
												<Image
													src={testimonial.image}
													alt="pfp"
													fill
													className="object-cover object-center"
												/>
											</span>
											<div className="fl-tl fl-c">
												<p className="font-medium text-sm">
													{testimonial.name}
												</p>
												<span className="text-secondary text-[10px]">
													{testimonial.position}
												</span>
											</div>
										</div>
										<p className="w-full my-4 text-sm">{testimonial.body}</p>
										<div className="w-full fl-cl gap-1">
											{Array.from(new Array(5)).map((_, i) => (
												<span key={i}>
													<StarIcon
														className={clsx(
															i + 1 <= testimonial.rating
																? "text-yellow-300"
																: "text-secondary"
														)}
														weight="fill"
													/>
												</span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>

						<div
							className="grid grid-cols-[repeat(3,280px)] md:grid-cols-[repeat(3,471px)] gap-2 overflow-x-auto no-scroll scroll-smooth"
							ref={Tst2Ref}
						>
							{testimonials.slice(-3).map((testimonial, i) => (
								<div
									key={testimonial.image + i}
									className="w-full bg-background rounded-[16px] p-4 md:p-8"
								>
									<div className="fl-tl fl-c">
										<div className="fl-cl gap-2">
											<span className="size-[32px] relative overflow-hidden fl-cc rounded-full aspect-square self-stretch">
												<Image
													src={testimonial.image}
													alt="pfp"
													fill
													className="object-cover object-center"
												/>
											</span>
											<div className="fl-tl fl-c">
												<p className="font-medium text-sm">
													{testimonial.name}
												</p>
												<span className="text-secondary text-[10px]">
													{testimonial.position}
												</span>
											</div>
										</div>
										<p className="w-full my-4 text-sm">{testimonial.body}</p>
										<div className="w-full fl-cl gap-1">
											{Array.from(new Array(5)).map((_, i) => (
												<span key={i}>
													<StarIcon
														className={clsx(
															i + 1 <= testimonial.rating
																? "text-yellow-300"
																: "text-secondary"
														)}
														weight="fill"
													/>
												</span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-full fl-cc gap-2 mt-[50px]">
						<span
							className="bg-primary text-background rounded-full size-[40px]  fl-cc hfade"
							onClick={() => {
								hoz_scroll(Tst1Ref, "left")
								hoz_scroll(Tst2Ref, "right")
							}}
						>
							<CaretLeftIcon className="size-6 " />
						</span>
						<span
							className="bg-alt text-background rounded-full size-[40px]  fl-cc hfade"
							onClick={() => {
								hoz_scroll(Tst1Ref, "right")
								hoz_scroll(Tst2Ref, "left")
							}}
						>
							<CaretRightIcon className="size-6" />
						</span>
					</div>
				</section>
			</section>

			<section className="w-full fl-tl fl-c gap-2 mt-[72px] def-pdg">
				<div className="fl-tl fl-c gap-2 md:fl-bl md:fl-sb w-full md:fl-r">
					<h2 className="text-[32px] font-medium text-primary leading-[1.1] md:text-center md:text-[48px]">
						FAQs
					</h2>
					<p className="text-sm md:text-base">
						Got Questions?, We've got answers
					</p>
				</div>

				<div className="w-full fl-tl fl-c gap-2 mt-8 anifaq">
					{faqs.map((faq, i) => (
						<div
							key={i}
							className={clsx(
								"w-full fl-cl gap-2 p-4 border duration-300 rounded-[32px]",
								CurrentFAQ == i
									? "border-foreground bg-foreground"
									: "border-secondary"
							)}
						>
							<span className="text-2xl font-medium text-secondary">
								{(i + 1).toString().padStart(2, "0")}.
							</span>
							<div className="flex-grow fl-tl fl-c">
								<h3 className="font-medium">{faq.question}</h3>
								<div
									className={clsx(
										"w-full grid overflow-hidden transtion-all duration-300",
										CurrentFAQ == i ? "grid-rows-1 mt-2" : "grid-rows-[0fr]"
									)}
								>
									<div className="w-full fl-tl fl-c overflow-hidden text-sm ">
										<p className="leading-[1.5] w-[90%]">{faq.answer}</p>
									</div>
								</div>
							</div>
							<div className="fl-tl self-stretch">
								<span
									className={clsx(
										"size-[40px] hfade fl-cc rounded-full text-primary",
										CurrentFAQ == i ? "bg-background" : "bg-foreground"
									)}
									onClick={() => setCurrentFAQ((prev) => (prev == i ? -1 : i))}
								>
									<ArrowUpRightIcon
										className={clsx(
											"size-5 transition-all duration-300",
											CurrentFAQ == i && "rotate-90"
										)}
									/>
								</span>
							</div>
						</div>
					))}
				</div>
			</section>

			<footer className="w-full mt-[72px] p-2">
				<div className="w-full px-2 py-5 rounded-[32px] bg-foreground md:px-5 lg:px-10">
					<div className="w-full fl-bl fl-sb gap-2 pb-8 border-b border-secondary/30">
						<div className="hidden md:fl-cl">
							{["Home", "Features", "About Us", "Services"].map((link, i) => {
								return (
									<Link
										href={"#"}
										key={i}
										className="px-4 py-1 rounded-full cursor-pointer duration-300 border border-transparent hover:border-primary"
									>
										{link}
									</Link>
								)
							})}
						</div>
						<Link
							href={`mailto:${process.env.NEXT_PUBLIC_EMAIL!}`}
							className="font-medium text-4xl md:text-6xl hfade hover:underline"
						>
							hello@zora.com
						</Link>
					</div>

					<div className="fl-tl fl-c gap-5 md:fl-r md:fl-sb mt-8 mb-[84px] md:gap-12">
						<div className="fl-tl fl-c gap-4">
							<div className="fl-tl fl-c text-xs gap-2">
								<div className="fl-cl gap-1">
									<Link
										href={"/"}
										className="relative w-[40px] aspect-[1.92/1] md:w-[56px]"
									>
										<Image src="/images/logo_black.svg" alt="logo" fill />
									</Link>
									<h4 className="font-bold text-3xl">ZORA</h4>
								</div>
								<p>475 Cherry Dr, Troy, Michigan 48083 United States</p>
								<p>(248) 823-3200</p>
							</div>

							<div className="fl-cl gap-2">
								<Link
									href={process.env.NEXT_PUBLIC_SOCIAL_LINK_YOUTUBE!}
									target="_blank"
									className="size-[40px] rounded-full border border-secondary fl-cc text-primary hfade"
								>
									<YoutubeLogoIcon className="size-6" weight="fill" />
								</Link>
								<Link
									href={process.env.NEXT_PUBLIC_SOCIAL_LINK_INSTAGRAM!}
									target="_blank"
									className="size-[40px] rounded-full border border-secondary fl-cc text-primary hfade"
								>
									<InstagramLogoIcon className="size-6" weight="fill" />
								</Link>
								<Link
									href={process.env.NEXT_PUBLIC_SOCIAL_LINK_LINKEDIN!}
									target="_blank"
									className="size-[40px] rounded-full border border-secondary fl-cc text-primary hfade"
								>
									<LinkedinLogoIcon className="size-5" weight="fill" />
								</Link>
								<Link
									href={process.env.NEXT_PUBLIC_SOCIAL_LINK_TIKTOK!}
									target="_blank"
									className="size-[40px] rounded-full border border-secondary fl-cc text-primary hfade"
								>
									<TiktokLogoIcon className="size-6" weight="fill" />
								</Link>
								<Link
									href={process.env.NEXT_PUBLIC_SOCIAL_LINK_TELEGRAM!}
									target="_blank"
									className="size-[40px] rounded-full border border-secondary fl-cc text-primary hfade"
								>
									<TelegramLogoIcon className="size-6" weight="fill" />
								</Link>
								<Link
									href={process.env.NEXT_PUBLIC_SOCIAL_LINK_FACEBOOK!}
									target="_blank"
									className="size-[40px] rounded-full border border-secondary fl-cc text-primary hfade"
								>
									<FacebookLogoIcon className="size-6" weight="fill" />
								</Link>
							</div>
						</div>

						<div className="md:flex-grow grid grid-cols-1 md:grid-cols-4 justify-between gap-4 max-w-[700px]">
							<div className="w-full fl-tl fl-c gap-3">
								<p className="font-medium">Company</p>
								<div className="w-full fl-tl fl-c gap-2">
									{["Features", "Pricing", "About Us", "Contact"].map(
										(link, i) => (
											<Link
												href={"#"}
												key={i}
												className="hfade hover:underline"
											>
												{link}
											</Link>
										)
									)}
								</div>
							</div>

							<div className="w-full fl-tl fl-c gap-3">
								<p className="font-medium">Resources</p>
								<div className="w-full fl-tl fl-c gap-2">
									{["Blog", "Help Center", "Legal", "Payments"].map(
										(link, i) => (
											<Link
												href={"#"}
												key={i}
												className="hfade hover:underline"
											>
												{link}
											</Link>
										)
									)}
								</div>
							</div>

							<div className="w-full fl-tl fl-c gap-3">
								<p className="font-medium">Career</p>
								<div className="w-full fl-tl fl-c gap-2">
									{["Jobs", "Team", "Hiring", "News"].map((link, i) => (
										<Link href={"#"} key={i} className="hfade hover:underline">
											{link}
										</Link>
									))}
								</div>
							</div>

							<div className="w-full fl-tl fl-c gap-3">
								<p className="font-medium">Help</p>
								<div className="w-full fl-tl fl-c gap-2">
									{["Support", "FAQ", "Help Center"].map((link, i) => (
										<Link href={"#"} key={i} className="hfade hover:underline">
											{link}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="hidden lg:fl-br border-b border-secondary opacity-10 mt-[60px] mb-5">
						<h1 className="text-[84px] font-extrabold leading-[64px]">ZORA</h1>
					</div>

					<div className="text-[10px] fl-bl fl-sb w-full md:text-sm">
						<span>© Copyright 2024, Zora All Rights Reserved</span>

						<div className="fl-cr gap-2">
							<Link href={"#"} target="_blank">
								Terms of Service
							</Link>
							<Link href={"#"} target="_blank">
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</section>
	)
}
