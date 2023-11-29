import { Toaster } from "sonner"
import { useTheme } from "@/src/app/providers/ThemeProvider.tsx"

export const WithThemeToaster = () => {
	const { theme } = useTheme()

	return (
		<Toaster position={"bottom-center"} closeButton richColors duration={4000} theme={theme} />
	)
}
