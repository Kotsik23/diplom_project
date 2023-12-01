import { ConvexProviderWithClerk } from "convex/react-clerk"
import { ConvexReactClient } from "convex/react"
import { useAuth } from "@clerk/clerk-react"

import { Routing } from "@/src/pages"

import "./globals.css"
import { ThemeProvider } from "@/src/app/providers/ThemeProvider.tsx"
import { WithThemeToaster } from "@/src/app/providers/WithThemeToaster.tsx"
import { WithThemeClerkProvider } from "@/src/app/providers/WithThemeClerkProvider.tsx"

const client = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

export const App = () => {
	return (
		<ThemeProvider>
			<WithThemeClerkProvider>
				<ConvexProviderWithClerk client={client} useAuth={useAuth}>
					<Routing />
					<WithThemeToaster />
				</ConvexProviderWithClerk>
			</WithThemeClerkProvider>
		</ThemeProvider>
	)
}
