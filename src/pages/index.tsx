import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"
import { ROUTE } from "@/src/lib/routes.ts"
import { HomePage } from "@/src/pages/Home.tsx"

export const Routing = () => {
	return (
		<BrowserRouter>
			<QueryParamProvider adapter={ReactRouter6Adapter}>
				<Routes>
					<Route path={ROUTE.HOME} element={<HomePage />} />
				</Routes>
			</QueryParamProvider>
		</BrowserRouter>
	)
}
