import { Link, NavLink } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { SignUpButton } from "@clerk/clerk-react"
import { Authenticated, Unauthenticated } from "convex/react"

import LogoBig from "@/src/assets/logo.svg"
import LogoMini from "@/src/assets/logo_mini.svg"

import { navbarData } from "@/src/modules/navbar/constants/navbar-data.ts"

import { UserButton } from "@/src/components/user-button/UserButton"
import { Button } from "@/src/components/ui/button.tsx"

import { ROUTE } from "@/src/lib/routes.ts"
import { cn } from "@/src/lib/utils.ts"
import { MobileMenu } from "@/src/modules/navbar/components/mobile-menu/MobileMenu.tsx"

export const Navbar = () => {
	const isDesktop = useMediaQuery("(min-width: 768px)")

	return (
		<header className={"border-border border-b bg-white/80 shadow-sm"}>
			<div className={"container flex items-center justify-between py-2"}>
				<div className={"block md:hidden"}>
					<MobileMenu />
				</div>
				<Link to={ROUTE.HOME}>
					<img alt={"logo"} src={isDesktop ? LogoBig : LogoMini} className={"w-12 md:w-52"} />
				</Link>
				<nav className={"hidden md:block"}>
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
