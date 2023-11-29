import { Button } from "@/src/components/ui/button.tsx"
import { ReactNode } from "react"

type FilterHeadingProps = {
	children: ReactNode
	onClear: () => void
}

export const FilterHeading = ({ children, onClear }: FilterHeadingProps) => {
	return (
		<div className={"flex items-center justify-between"}>
			<h2 className={"text-lg font-medium"}>{children}</h2>
			<Button
				variant={"outline"}
				size={"sm"}
				onClick={onClear}
				className={"h-fit rounded-full px-4 py-1 font-normal"}
			>
				Clear Filter
			</Button>
		</div>
	)
}
