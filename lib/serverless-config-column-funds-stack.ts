/* eslint-disable no-new */
// NODE_APP_INSTANCE MUST be set before config is imported, else sadness
const env = process.env.env ?? 'dev'

/* eslint-disable import/first */
import { type Construct } from 'constructs'
import { SecurityPolicyProtocol } from 'aws-cdk-lib/aws-cloudfront'
import { Stack, type StackProps } from '@nwm-cdk-core/nwm-stack'
import { StaticSite } from '@nwm-cdk-pattern/serverless-static-site'
import { Waf, WAFAction, WAFType } from '@nwm-cdk-service/nwm-wafv2'
import { Topic } from '@nwm-cdk-service/nwm-sns'
import config from 'config'

export class ServerlessConfigColumnFundsStack extends Stack {
  constructor (scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const alerts = new Topic(this, `column-funds-${env}-topic`, {
      topicName: `serverless-config-column-funds-${env}`,
      emailAddress: 'DL-MSA-DYNO-BOTS@northwesternmutual.com'
    })

    new StaticSite(this, `column-funds-site-bucket-${env}`, {
      domainName: config.get('domainName'),
      siteSubDomain: config.get('siteSubDomain'),
      bucketName: config.get('bucketName'),
      assetSourcePath: '.next/',
      alerts,
      privateZone: true,
      hasReplicaBucket: false,
      errorResponsePagePath: '/index.html',
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      webACLId: Waf.getWAFarn(this, { webACLAction: WAFAction.BLOCK, webACLType: WAFType.NM }) // Associate the DSO-managed WAF with all rules in block mode
    })
  }
}
