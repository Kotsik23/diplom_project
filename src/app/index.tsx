import { ConvexProviderWithClerk } from "convex/react-clerk"
import { ConvexReactClient } from "convex/react"
import { ClerkProvider, useAuth } from "@clerk/clerk-react"

import { Routing } from "@/src/pages"

import "./globals.css"
import { Toaster } from "sonner"

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
	throw new Error("Clerk Publishing key is missing")
}

const client = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

export const App = () => {
	return (
		<ClerkProvider publishableKey={publishableKey}>
			<ConvexProviderWithClerk client={client} useAuth={useAuth}>
				<Routing />
				<Toaster position={"bottom-center"} closeButton richColors duration={4000} />
			</ConvexProviderWithClerk>
		</ClerkProvider>
	)
}
