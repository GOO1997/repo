#!/usr/bin/env node

// NODE_APP_INSTANCE MUST be set before config is imported, else sadness
const env = process.env.env ?? 'dev'

/* eslint-disable no-new */
/* eslint-disable import/first */
import 'source-map-support/register'
import { App } from 'aws-cdk-lib'
import { ServerlessConfigColumnFundsStack } from '../lib/serverless-config-column-funds-stack'

const app = new App()
new ServerlessConfigColumnFundsStack(
  app,
  `ServerlessConfigColumnFunds-${env}`,
  {
    tags: {
      application_name: `serverless-config-column-funds-${env}`,
      managed_by: 'serverless:cdk',
      portfolio: 'CX',
      repo: 'https://git.nmlv.nml.com/nmx/static/serverless-config-column-funds',
      utan: '53119'
    }
  }
)
