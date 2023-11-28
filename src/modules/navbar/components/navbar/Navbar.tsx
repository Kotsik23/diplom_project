import { Link, NavLink } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { SignUpButton, UserButton } from "@clerk/clerk-react"
import { Authenticated, Unauthenticated } from "convex/react"

import LogoBig from "@/src/assets/logo.svg"
import LogoMini from "@/src/assets/logo_mini.svg"

import { navbarData } from "@/src/modules/navbar/constants/navbar-data.ts"

import { Button } from "@/src/components/ui/button.tsx"

import { ROUTE } from "@/src/lib/routes.ts"
import { cn } from "@/src/lib/utils.ts"

export const Navbar = () => {
	const isDesktop = useMediaQuery("(min-width: 768px)")

	return (
		<header className={"border-border border-b bg-white/80 shadow-sm"}>
			<div className={"container flex items-center justify-between py-2"}>
				<Link to={ROUTE.HOME}>
					<img alt={"logo"} src={isDesktop ? LogoBig : LogoMini} className={"w-12 md:w-52"} />
				</Link>
				<nav>
					<ul className={"flex items-center gap-16"}>
						{navbarData.map(link => (
							<li
								key={link.href}
								className={"hover:text-primary text-xl font-semibold transition-colors"}
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
