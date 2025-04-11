import Hero from '@/app/components/Hero';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ExternalLink } from './components/ExternalLink';

export default function Home() {
	return (
		<div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Hero />
			</main>
			<footer className="px-0 py-5 text-center z-50 sticky -m-28 w-full ">
				<div className="flex gap-5 justify-center">
					<ExternalLink
						href="https://wa.me/message/S34MCDTW3AQXI1"
						aria-label="WhatsApp"
					>
						<FaWhatsapp size={24} />
					</ExternalLink>
					<ExternalLink
						href="https://www.instagram.com/lagomorenozen?igsh=MzRlODBiNWFlZA=="
						aria-label="Instagram"
					>
						<FaInstagram size={24} />
					</ExternalLink>
				</div>
				<p className="mt-4 text-sm md:text-base md:font-medium">
					© 2025 Todos los derechos reservados
				</p>
			</footer>
		</div>
	);
}
