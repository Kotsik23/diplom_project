import { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"

import { HomePage } from "@/src/pages/Home.tsx"

import { MainLayout } from "@/src/components/layouts/MainLayout.tsx"

// Lazy Pages
const AboutUs = lazy(() => import("@/src/pages/AboutUs"))
const Explore = lazy(() => import("@/src/pages/Explore"))

import { ROUTE } from "@/src/lib/routes.ts"

export const Routing = () => {
	return (
		<BrowserRouter>
			<QueryParamProvider adapter={ReactRouter6Adapter}>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path={ROUTE.HOME} element={<HomePage />} />

						<Route path={ROUTE.ABOUT_US} element={<AboutUs />} />
						<Route path={ROUTE.EXPLORE} element={<Explore />} />
					</Route>
				</Routes>
			</QueryParamProvider>
		</BrowserRouter>
	)
}
