import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Theme from '@nmx/template/dist/componentLibrary/Theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@nmx/template/dist/componentLibrary/foundations/GlobalStyles'

export const renderNMX = (children: any): any => {
  return render(
    <ThemeProvider
      theme={Theme.render(
        typeof window !== 'undefined' ? window.innerWidth : 480,
        typeof window !== 'undefined' ? window.innerHeight : 900
      )}
    >
      <GlobalStyles
        config={{
          nodeEnv: 'dev',
          appName: 'serverless-config-columns-fund',
          appVersion: '0.0.0',
          basePath: 'https://qa.new.northwesternmutual.com',
          nmxTemplateVersion: '3.1.29',
          adobeLaunchScript: '//assets.adobedtm.com/84f7e94eaa36/bb3bc880565f/launch-e98240bdad41-staging.min.js',
          heapAppId: 'test',
          newRelicApplicationId: 'test',
          newRelicLicenseKey: 'test',
          public: {
            googlePlacesApiKey: 'test',
            googleAnalyticsTrackingId: 'test',
            recaptchaV3: 'test'
          },
          services: {
            loginPageUrl: 'https://qa.login.northwesternmutual.com/login',
            loginPageUrlBase: 'https://qa.login.northwesternmutual.com',
            userLogoutUrls: 'https://qa.nmx.cxnon.apps.northwesternmutual.com/nmx-api-proxy/login/logouturls'
          }
        }} />
      {children}
    </ThemeProvider>
  )
}
