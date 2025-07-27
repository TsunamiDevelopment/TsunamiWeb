"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	// { name: "Projects", href: "/projects" }, // Uncomment if projects page is available
	{ name: "Legal", href: "/legal" },
	{ name: "Contact", href: "/contact" },
]

export default function Navbar() {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center space-x-2">
						<div className="h-10 w-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
							<img
								src="assets/img/Tsunami.png"
								alt="Tsunami Logo"
								className="h-full w-full object-cover"
							/>
						</div>
						<span className="font-bold text-xl">Tsunami Development</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-sm font-medium transition-colors hover:text-blue-600 ${
									pathname === item.href ? "text-blue-600" : "text-slate-600"
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Mobile Navigation */}
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden rounded-full hover:bg-slate-100"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[300px] sm:w-[400px] rounded-l-3xl"
						>
							<div className="flex flex-col space-y-4 mt-8">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`text-lg font-medium transition-colors hover:text-blue-600 ${
											pathname === item.href ? "text-blue-600" : "text-slate-600"
										}`}
									>
										{item.name}
									</Link>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
