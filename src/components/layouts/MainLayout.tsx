import { Navbar } from "@/src/modules/navbar"
import { Outlet } from "react-router-dom"
import { useConvexAuth } from "convex/react"
import { SplashScreen } from "@/src/components/splash-screen/SplashScreen.tsx"

export const MainLayout = () => {
	const { isLoading } = useConvexAuth()

	if (isLoading) {
		return <SplashScreen />
	}

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}
