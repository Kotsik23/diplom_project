import { LightbulbIcon, LogOutIcon, SettingsIcon } from "lucide-react"
import { useAuth, useClerk, useUser } from "@clerk/clerk-react"
import { toast } from "sonner"

import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/src/components/ui/dropdown-menu.tsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar.tsx"

export const UserButton = () => {
	const { user, isSignedIn } = useUser()
	const { signOut } = useAuth()
	const { openUserProfile } = useClerk()

	const handleSignOut = async () => {
		const promise = signOut()
		toast.promise(promise, {
			loading: "Signing out...",
			success: "You have been signed out",
			error: "Error while signing out",
		})
	}

	if (!isSignedIn || !user) {
		return null
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar
					className={
						"hover:ring-ring cursor-pointer transition-shadow hover:ring-2 hover:ring-offset-2"
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
				<DropdownMenuItem>
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
