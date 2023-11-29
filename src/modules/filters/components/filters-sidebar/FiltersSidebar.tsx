import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/ui/card.tsx"

export const FiltersSidebar = () => {
	return (
		<Card className={"basis-80"}>
			<CardHeader className={"p-4"}>
				<CardTitle className={"text-xl"}>Filter By</CardTitle>
			</CardHeader>
			<CardContent className={"p-4"}></CardContent>
		</Card>
	)
}
