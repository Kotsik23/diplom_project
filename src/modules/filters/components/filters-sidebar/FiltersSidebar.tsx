import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card.tsx"
import { CategoriesFilter } from "@/src/modules/filters"

export const FiltersSidebar = () => {
	return (
		<Card className={"shrink-0 basis-80"}>
			<CardHeader className={"p-4"}>
				<CardTitle className={"text-xl"}>Filter By</CardTitle>
			</CardHeader>
			<CardContent className={"p-4"}>
				<CategoriesFilter />
			</CardContent>
		</Card>
	)
}
