import { useMediaQuery } from "usehooks-ts"

import LogoBig from "@/src/assets/logo.svg"
import LogoMini from "@/src/assets/logo_mini.svg"

export const SplashScreen = () => {
	const isDesktop = useMediaQuery("(min-width: 768px)")

	return (
		<main className={"fixed inset-0 grid h-screen w-screen place-items-center"}>
			<img
				alt={"splash-logo"}
				src={isDesktop ? LogoBig : LogoMini}
				className={"animate-in fade-in-0 zoom-in-95 w-full max-w-lg duration-500"}
			/>
		</main>
	)
}
