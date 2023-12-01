import { ClerkProvider } from "@clerk/clerk-react"
import { useTheme } from "@/src/app/providers/ThemeProvider.tsx"
import { dark } from "@clerk/themes"
import { ReactNode } from "react"

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
	throw new Error("Clerk Publishing key is missing")
}

export const WithThemeClerkProvider = ({ children }: { children: ReactNode }) => {
	const { theme } = useTheme()
	const isDark = theme === "dark"

	return (
		<ClerkProvider
			publishableKey={publishableKey}
			appearance={{
				baseTheme: isDark ? dark : undefined,
				variables: {
					colorPrimary: isDark ? "hsl(213,93%,67%)" : "hsl(218,91%,60%)",
					colorBackground: isDark ? "hsl(240, 10%, 3.9%)" : "hsl(0, 0%, 100%)",
					borderRadius: "0.5rem",
				},
				layout: {
					logoImageUrl: "/wardiere.svg",
					logoPlacement: "inside",
				},
				elements: {
					card: "border border-border",
					formFieldInput: "bg-background",
					logoBox: "flex justify-center items-center",
					logoImage: "hover:bg-accent rounded-md p-2 transition-colors",
				},
			}}
		>
			{children}
		</ClerkProvider>
	)
}
