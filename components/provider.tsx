'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { Theme } from '@radix-ui/themes'
import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer'
export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Theme grayColor="sage" accentColor="lime" radius="large">
        <ReactWrapBalancerProvider>{children}</ReactWrapBalancerProvider>
      </Theme>
    </NextThemesProvider>
  )
}
