'use client';

import { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '@/app/data/properties';
import Image from 'next/image';
import { HeroSlide } from '../types';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const goToSlide = useCallback(
		(index: number) => {
			if (isTransitioning) return;

			setIsTransitioning(true);
			setCurrentSlide(index);

			setTimeout(() => {
				setIsTransitioning(false);
			}, 1000); // Match this with CSS transition time
		},
		[isTransitioning]
	);

	const nextSlide = useCallback(() => {
		const newIndex = (currentSlide + 1) % heroSlides.length;
		goToSlide(newIndex);
	}, [currentSlide, goToSlide]);

	// const prevSlide = useCallback(() => {
	// 	const newIndex =
	// 		(currentSlide - 1 + heroSlides.length) % heroSlides.length;
	// 	goToSlide(newIndex);
	// }, [currentSlide, goToSlide]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(intervalId);
	}, [nextSlide]);

	return (
		<section
			id="inicio"
			className="relative h-screen w-full overflow-hidden"
		>
			{/* Slides */}
			{heroSlides.map((slide: HeroSlide, index: number) => (
				<div
					key={slide.id}
					className={`hero-slide absolute inset-0 transition-opacity duration-1000 ease-out-expo ${
						index === currentSlide
							? 'opacity-100 active'
							: 'opacity-0'
					}`}
				>
					<Image
						fill
						src={slide.image}
						alt={slide.title}
						className="hero-slide-image"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

					<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
						<div
							className={`transition-all duration-1000 delay-200 transform ${
								index === currentSlide
									? 'translate-y-0 opacity-100'
									: 'translate-y-10 opacity-0'
							}`}
						>
							{/* <span className="inline-block px-3 py-1 text-xs md:text-sm font-medium bg-bariloche-100 text-bariloche-950 rounded-full mb-4">
								Bariloche, Argentina
							</span> */}
							{/* <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-light mb-4 max-w-4xl mx-auto">
								{slide.title}
							</h1>
							<p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
								{slide.subtitle}
							</p> */}
						</div>
					</div>
				</div>
			))}

			<div className="absolute z-50 my-auto flex flex-col gap-3 items-center justify-center text-center p-1 w-full h-full">
				<h1 className="text-white text-2xl md:text-5xl lg:text-7xl font-medium md:font-normal animate-fade animate-duration-[1500ms] animate-delay-200">
					LAGO MORENO ZEN
				</h1>
				<div className="animate-fade-up animate-duration-[1500ms] animate-delay-300">
					<h2 className="text-white/90 text-sm md:text-xl max-w-2xl mx-auto mb-8">
						Alquileres turísticos en Bariloche, Argentina
					</h2>
					<p>PRÓXIMAMENTE</p>
				</div>
			</div>

			{/* Navigation Arrows */}
			{/* <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-8 z-10">
				<button
					onClick={prevSlide}
					className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all duration-300 flex items-center justify-center text-white border border-white/30"
					aria-label="Previous slide"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<button
					onClick={nextSlide}
					className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all duration-300 flex items-center justify-center text-white border border-white/30"
					aria-label="Next slide"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div> */}

			{/* Slide Indicators */}
			{/* <div className="absolute bottom-32 left-0 right-0 flex justify-center space-x-2 z-10">
				{heroSlides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${
							index === currentSlide
								? 'bg-white w-10'
								: 'bg-white/40'
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div> */}
		</section>
	);
};

export default Hero;
