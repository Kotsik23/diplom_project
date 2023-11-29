import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { useConvexAuth } from "convex/react"

import { Navbar } from "@/src/modules/navbar"

import { SplashScreen } from "@/src/components/splash-screen/SplashScreen.tsx"

export const MainLayout = () => {
	const { isLoading } = useConvexAuth()

	if (isLoading) {
		return <SplashScreen />
	}

	return (
		<>
			<Navbar />
			<Suspense>
				<Outlet />
			</Suspense>
		</>
	)
}
