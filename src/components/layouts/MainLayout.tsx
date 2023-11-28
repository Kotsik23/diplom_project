import { Navbar } from "@/src/modules/navbar"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}
