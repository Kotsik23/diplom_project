import { MenuIcon } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

import LogoLight from "@/src/assets/logo_light.svg"

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/src/components/ui/sheet.tsx"
import { Button, buttonVariants } from "@/src/components/ui/button.tsx"

import { ROUTE } from "@/src/lib/routes.ts"
import { navbarData } from "@/src/modules/navbar/constants/navbar-data.ts"
import { useBoolean } from "usehooks-ts"

export const MobileMenu = () => {
	const { value: open, setValue: onOpenChange, toggle, setFalse: onClose } = useBoolean()

	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetTrigger asChild>
				<Button variant={"ghost"} size={"icon"} onClick={toggle}>
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"}>
				<SheetHeader>
					<Link to={ROUTE.HOME} className={"max-w-[12rem]"} onClick={onClose}>
						<img alt={"sheet-logo"} src={LogoLight} className={"w-full"} />
					</Link>
				</SheetHeader>
				<nav className={"mt-10"}>
					<ul className={"flex flex-col items-center gap-4"}>
						{navbarData.map(link => (
							<li key={link.href} className={"w-full"}>
								<NavLink
									onClick={onClose}
									to={link.href}
									className={({ isActive }) =>
										buttonVariants({
											variant: isActive ? "default" : "outline",
											className: "w-full justify-start",
										})
									}
								>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</SheetContent>
		</Sheet>
	)
}
