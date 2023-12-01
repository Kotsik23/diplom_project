import { LightbulbIcon, LogOutIcon, SettingsIcon } from "lucide-react"
import { useAuth, useClerk, useUser } from "@clerk/clerk-react"
import { toast } from "sonner"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu.tsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar.tsx"
import { useConvex } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useNavigate } from "react-router-dom"
import { ConvexError } from "convex/values"
import { ROUTE } from "@/src/lib/routes.ts"

export const UserButton = () => {
	const convex = useConvex()
	const { user, isSignedIn } = useUser()
	const { signOut } = useAuth()
	const { openUserProfile } = useClerk()

	const navigate = useNavigate()

	const handleSignOut = async () => {
		const promise = signOut()
		toast.promise(promise, {
			loading: "Signing out...",
			success: "You have been signed out",
			error: "Error while signing out",
		})
	}

	const handleAuthorCreate = async () => {
		if (!user) {
			toast.warning("Unauthenticated")
			return
		}
		const authorExists = await convex.query(api.author.getByUserId, { userId: user.id })
		if (!authorExists) {
			const newAuthorPromise = convex.mutation(api.author.create, { userId: user.id })
			toast.promise(newAuthorPromise, {
				loading: "Creating author for you...",
				success: data => {
					navigate(ROUTE.AUTHOR + `/${data}`)
					return "Now you are a author :)"
				},
				error: e => {
					return e instanceof ConvexError ? e.data : "Unexpected error occurred"
				},
			})
		} else {
			navigate(ROUTE.AUTHOR + `/${authorExists._id}`)
		}
	}

	if (!isSignedIn || !user) {
		return null
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar
					className={
						"cursor-pointer ring-offset-background transition-shadow hover:ring-2 hover:ring-ring hover:ring-offset-2"
					}
				>
					<AvatarImage src={user.imageUrl} alt={user.emailAddresses[0].emailAddress} />
					<AvatarFallback>
						{`${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className={"w-52"} align={"end"}>
				<DropdownMenuLabel className={"capitalize"}>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleAuthorCreate}>
					<LightbulbIcon className={"mr-2 h-5 w-5"} />
					<span>Author</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => openUserProfile()}>
					<SettingsIcon className={"mr-2 h-5 w-5"} />
					<span>Settings</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={handleSignOut}
					className={"text-destructive focus:bg-destructive/10 focus:text-destructive"}
				>
					<LogOutIcon className={"mr-2 h-5 w-5"} />
					<span>Logout</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
