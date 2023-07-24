import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'

import { ServerlessConfigColumnFundsStack } from './serverless-config-column-funds-stack'

const stackParams = {
  tags: {
    application_name: 'fee-foo',
    managed_by: 'serverless:cdk',
    portfolio: 'foo',
    repo: 'https://git.nmlv.nml.com/fee-foo',
    utan: 'XXXXX'
  }
}

describe('Marketing ODS Stack', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('exists', () => {
    // Arrange

    // Act
    const template = generateTemplate()

    // Assert
    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'column-funds-int.cxnon.aws.nml.com'
    })
  })
})

function generateTemplate (): cdk.assertions.Template {
  const app = new cdk.App()
  const stack = new ServerlessConfigColumnFundsStack(app, 'MyTestStack', stackParams)
  const template = Template.fromStack(stack as unknown as cdk.Stack)
  return template
}
