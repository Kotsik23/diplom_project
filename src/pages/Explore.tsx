import { FiltersSidebar } from "@/src/modules/filters"
import { useAction } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"
import { ConvexError } from "convex/values"
import { Button } from "@/src/components/ui/button.tsx"
import { useState } from "react"
import { useTheme } from "@/src/app/providers/ThemeProvider.tsx"

export default function ExplorePage() {
	const [completion, setCompletion] = useState<string | undefined | null>(null)
	const startCompletion = useAction(api.openai.aboutYourselfCompletion)

	const handleCompletion = async () => {
		const promise = startCompletion()
		toast.promise<{ about_text: string }>(promise, {
			loading: "Completion was started. Please wait...",
			success: data => {
				setCompletion(data.about_text)
				return "Completion is done"
			},
			error: e => {
				return e instanceof ConvexError ? e.data : "Unexpected error occurred"
			},
		})
	}

	const { setTheme } = useTheme()

	return (
		<main className={"container mt-10 flex gap-14"}>
			<FiltersSidebar />
			<Button onClick={handleCompletion}>Start completion</Button>
			<Button onClick={() => setTheme("dark")}>Dark</Button>
			<Button onClick={() => setTheme("light")}>Light</Button>
			{completion && <p className={"p-4 text-left text-base"}>{completion}</p>}
		</main>
	)
}
