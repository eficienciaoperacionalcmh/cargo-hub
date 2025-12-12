"use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
import LogoNavbar from "@/components/logo"

// const navigation = [
//     // { name: "Mensajería", href: "/dashboard/OPTView" },
//     // { name: "Drive", href: "/dashboard/Mensajeria" },
// ]

export default function Navbar() {
    // const pathname = usePathname()

    return (
        <div className="border-b h-14">
            <div className="flex h-14 items-center px-4 md:px-6">
                <LogoNavbar />
                <div className="ml-8 flex items-center gap-6">
                    {/* {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={pathname === item.href
                                ? "text-xs font-medium text-primary border-b-2 border-primary"
                                : "text-xs font-medium text-muted-foreground hover:text-primary hover:border-b-2 hover:border-primary"}
                        >
                            {item.name}
                        </Link>
                    ))} */}
                </div>
            </div>
        </div>
    )
}
