'use client'

import { trackAppRouter } from '@socialgouv/matomo-next'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function MatomoAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    trackAppRouter({
      url: 'https://matomo.bornholm.se/',
      siteId: '2',
      pathname,
      searchParams,
    })
  }, [pathname, searchParams])

  return null
}
