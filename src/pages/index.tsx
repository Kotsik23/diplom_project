import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"

import { HomePage } from "@/src/pages/Home.tsx"

import { MainLayout } from "@/src/components/layouts/MainLayout.tsx"

import { ROUTE } from "@/src/lib/routes.ts"

export const Routing = () => {
	return (
		<BrowserRouter>
			<QueryParamProvider adapter={ReactRouter6Adapter}>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path={ROUTE.HOME} element={<HomePage />} />
					</Route>
				</Routes>
			</QueryParamProvider>
		</BrowserRouter>
	)
}
