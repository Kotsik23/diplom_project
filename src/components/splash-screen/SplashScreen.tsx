import LogoLight from "@/src/assets/logo_light.svg"

export const SplashScreen = () => {
	return (
		<main className={"fixed inset-0 grid h-screen w-screen place-items-center"}>
			<img
				alt={"splash-logo"}
				src={LogoLight}
				className={
					"animate-splash-ping w-full max-w-lg duration-500 animate-in fade-in-0 zoom-in-95"
				}
			/>
		</main>
	)
}
