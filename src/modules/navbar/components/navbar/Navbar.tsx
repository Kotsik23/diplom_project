import { Link, NavLink } from "react-router-dom"
import { SignUpButton } from "@clerk/clerk-react"
import { Authenticated, Unauthenticated } from "convex/react"

import LogoLight from "@/src/assets/logo_light.svg"
import LogoDark from "@/src/assets/logo_dark.svg"

import { navbarData } from "@/src/modules/navbar/constants/navbar-data.ts"

import { UserButton } from "@/src/components/user-button/UserButton"
import { Button } from "@/src/components/ui/button.tsx"

import { ROUTE } from "@/src/lib/routes.ts"
import { cn } from "@/src/lib/utils.ts"
import { MobileMenu } from "@/src/modules/navbar/components/mobile-menu/MobileMenu.tsx"

export const Navbar = () => {
	return (
		<header className={"border-b border-border bg-background shadow-sm"}>
			<div className={"container flex items-center justify-between"}>
				<div className={"block md:hidden"}>
					<MobileMenu />
				</div>
				<Link to={ROUTE.HOME}>
					<img alt={"logo"} src={LogoLight} className={"block w-48 dark:hidden"} />
					<img alt={"logo"} src={LogoDark} className={"hidden w-48 dark:block"} />
				</Link>
				<nav className={"hidden md:block"}>
					<ul className={"flex items-center gap-16"}>
						{navbarData.map(link => (
							<li
								key={link.href}
								className={"text-xl font-semibold transition-colors hover:text-primary"}
							>
								<NavLink
									to={link.href}
									className={({ isActive }) => cn(isActive && "text-primary")}
								>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<Authenticated>
					<UserButton />
				</Authenticated>
				<Unauthenticated>
					<SignUpButton mode={"modal"}>
						<Button className={"ml-8 text-base font-semibold"}>Get Started</Button>
					</SignUpButton>
				</Unauthenticated>
			</div>
		</header>
	)
}
