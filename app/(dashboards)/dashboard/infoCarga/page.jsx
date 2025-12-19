'use client'

import { Fragment, useState } from 'react'
import ViewRefresh from '@/app/(dashboards)/refreshView'
import ViewTableau from '@/app/(dashboards)/tableauView'

export default function Home() {
    const [autoUpdate, setAutoUpdate] = useState(false);
    const url_tableau = "https://i2trekviz.somoscopa.com/t/CopaVizHub/views/Infocarga-CM/Infocapacidaddecarga"
    const refresh_time_ms = 30000
    return (
        <Fragment>
            <ViewTableau
                autoUpdate={autoUpdate}
                url_tableau={url_tableau}
                refresh_time_ms={refresh_time_ms}
            />
        </Fragment>
    )
}
