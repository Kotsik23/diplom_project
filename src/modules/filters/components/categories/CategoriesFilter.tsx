import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Doc } from "@/convex/_generated/dataModel"

import { CheckedState } from "@radix-ui/react-checkbox"
import { ArrayParam, useQueryParam, withDefault } from "use-query-params"
import { ChevronDownIcon } from "lucide-react"
import { useToggle } from "usehooks-ts"

import { FilterHeading } from "@/src/modules/filters/components/heading/FilterHeading.tsx"

import { Skeleton } from "@/src/components/ui/skeleton.tsx"
import { Label } from "@/src/components/ui/label"
import { Checkbox } from "@/src/components/ui/checkbox.tsx"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/src/components/ui/collapsible.tsx"
import { Button } from "@/src/components/ui/button.tsx"

const MAX_VISIBLE = 4

export const CategoriesFilter = () => {
	const serverCategories = useQuery(api.categories.getCategoriesList)
	const [categories, setCategories] = useQueryParam("category", withDefault(ArrayParam, []))
	const [isOpen, , setOpen] = useToggle()

	const handleChange = (checked: CheckedState, value: string) => {
		setCategories(checked ? [...categories, value] : categories.filter(item => item !== value))
	}

	const handleClear = () => {
		setCategories([])
	}

	const renderItem = (category: Doc<"categories">) => {
		return (
			<div key={category._id} className={"flex items-center gap-2"}>
				<Checkbox
					id={category.value}
					className={"h-5 w-5"}
					checked={(categories as string[])?.includes(category.value)}
					onCheckedChange={checked => handleChange(checked, category.value)}
				/>
				<Label htmlFor={category.value} className={"text-base"}>
					{category.label}
				</Label>
			</div>
		)
	}

	return (
		<section className={"flex flex-col gap-4"}>
			<FilterHeading onClear={handleClear}>Categories</FilterHeading>
			{serverCategories ? (
				<Collapsible open={isOpen} onOpenChange={setOpen}>
					<div className={"flex flex-col gap-3"}>
						{serverCategories.slice(0, MAX_VISIBLE).map(category => renderItem(category))}
						{serverCategories.length > MAX_VISIBLE && (
							<div className={"flex flex-col-reverse"}>
								<CollapsibleTrigger asChild>
									<Button variant={"ghost"} size={"sm"} className={"group h-7 text-sm"}>
										{isOpen ? "Less" : "More"}
										<ChevronDownIcon
											className={
												"ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180"
											}
										/>
									</Button>
								</CollapsibleTrigger>
								<CollapsibleContent className={"flex flex-col gap-3"}>
									{serverCategories
										.slice(MAX_VISIBLE)
										.map(category => renderItem(category))}
								</CollapsibleContent>
							</div>
						)}
					</div>
				</Collapsible>
			) : (
				<CategoriesFilter.Skeleton />
			)}
		</section>
	)
}

CategoriesFilter.Skeleton = () => {
	return (
		<div className={"flex flex-col gap-3"}>
			{new Array(6).fill(null).map((_, index) => (
				<Skeleton key={`skeleton-category-${index}`} className={"h-8 w-full"} />
			))}
		</div>
	)
}
