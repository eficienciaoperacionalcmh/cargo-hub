'use client'

import Navbar from '@/components/navbar'
import React, { Fragment } from 'react'

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <Fragment>
            <Navbar />
            <main className="w-full flex-1 flex flex-col">
                {children}
            </main>
        </Fragment>
    )
}

export default Layout