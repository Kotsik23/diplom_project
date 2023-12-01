import LogoLight from "/logo_light.svg"
import LogoDark from "/logo_dark.svg"
import { cn } from "@/src/lib/utils.ts"

export const SplashScreen = () => {
	const imgClassName =
		"animate-splash-ping w-full max-w-lg duration-500 animate-in fade-in-0 zoom-in-95"

	return (
		<main className={"fixed inset-0 grid h-screen w-screen place-items-center"}>
			<img
				alt={"splash-logo-light"}
				src={LogoLight}
				className={cn(imgClassName, "block dark:hidden")}
			/>
			<img
				alt={"splash-logo-dark"}
				src={LogoDark}
				className={cn(imgClassName, "hidden dark:block")}
			/>
		</main>
	)
}
