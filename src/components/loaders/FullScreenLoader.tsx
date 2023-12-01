import { Loader } from "lucide-react"

export const FullScreenLoader = () => {
	return (
		<div className={"grid h-screen place-items-center"}>
			<Loader className={"h-10 w-10 animate-spin"} />
		</div>
	)
}
