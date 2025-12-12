import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const LogoNavbar = () => {
    return (
        <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/logoDespachoHub.png" alt="Logo" width={40} height={40} />
            </Link>
            <span className="text-xs text-muted-foreground">/</span>
            <span className="text-xs font-medium">CargoMon</span>
        </div>
    )
}

export default LogoNavbar
