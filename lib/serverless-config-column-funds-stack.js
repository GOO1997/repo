"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerlessConfigColumnFundsStack = void 0;
/* eslint-disable no-new */
// NODE_APP_INSTANCE MUST be set before config is imported, else sadness
const env = process.env.env ?? 'dev';
const aws_cloudfront_1 = require("aws-cdk-lib/aws-cloudfront");
const nwm_stack_1 = require("@nwm-cdk-core/nwm-stack");
const serverless_static_site_1 = require("@nwm-cdk-pattern/serverless-static-site");
const nwm_wafv2_1 = require("@nwm-cdk-service/nwm-wafv2");
const nwm_sns_1 = require("@nwm-cdk-service/nwm-sns");
const config_1 = __importDefault(require("config"));
class ServerlessConfigColumnFundsStack extends nwm_stack_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const alerts = new nwm_sns_1.Topic(this, `column-funds-${env}-topic`, {
            topicName: `serverless-config-column-funds-${env}`,
            emailAddress: 'DL-MSA-DYNO-BOTS@northwesternmutual.com'
        });
        new serverless_static_site_1.StaticSite(this, `column-funds-site-bucket-${env}`, {
            domainName: config_1.default.get('domainName'),
            siteSubDomain: config_1.default.get('siteSubDomain'),
            bucketName: config_1.default.get('bucketName'),
            assetSourcePath: '.next/',
            alerts,
            privateZone: true,
            hasReplicaBucket: false,
            errorResponsePagePath: '/index.html',
            minimumProtocolVersion: aws_cloudfront_1.SecurityPolicyProtocol.TLS_V1_2_2021,
            webACLId: nwm_wafv2_1.Waf.getWAFarn(this, { webACLAction: nwm_wafv2_1.WAFAction.BLOCK, webACLType: nwm_wafv2_1.WAFType.NM }) // Associate the DSO-managed WAF with all rules in block mode
        });
    }
}
exports.ServerlessConfigColumnFundsStack = ServerlessConfigColumnFundsStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzcy1jb25maWctY29sdW1uLWZ1bmRzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVybGVzcy1jb25maWctY29sdW1uLWZ1bmRzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJCQUEyQjtBQUMzQix3RUFBd0U7QUFDeEUsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFBO0FBSXBDLCtEQUFtRTtBQUNuRSx1REFBZ0U7QUFDaEUsb0ZBQW9FO0FBQ3BFLDBEQUFvRTtBQUNwRSxzREFBZ0Q7QUFDaEQsb0RBQTJCO0FBRTNCLE1BQWEsZ0NBQWlDLFNBQVEsaUJBQUs7SUFDekQsWUFBYSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMzRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUV2QixNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQUssQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEdBQUcsUUFBUSxFQUFFO1lBQzFELFNBQVMsRUFBRSxrQ0FBa0MsR0FBRyxFQUFFO1lBQ2xELFlBQVksRUFBRSx5Q0FBeUM7U0FDeEQsQ0FBQyxDQUFBO1FBRUYsSUFBSSxtQ0FBVSxDQUFDLElBQUksRUFBRSw0QkFBNEIsR0FBRyxFQUFFLEVBQUU7WUFDdEQsVUFBVSxFQUFFLGdCQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUNwQyxhQUFhLEVBQUUsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1lBQzFDLFVBQVUsRUFBRSxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDcEMsZUFBZSxFQUFFLFFBQVE7WUFDekIsTUFBTTtZQUNOLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIscUJBQXFCLEVBQUUsYUFBYTtZQUNwQyxzQkFBc0IsRUFBRSx1Q0FBc0IsQ0FBQyxhQUFhO1lBQzVELFFBQVEsRUFBRSxlQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxxQkFBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsbUJBQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLDZEQUE2RDtTQUN2SixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUF0QkQsNEVBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG4vLyBOT0RFX0FQUF9JTlNUQU5DRSBNVVNUIGJlIHNldCBiZWZvcmUgY29uZmlnIGlzIGltcG9ydGVkLCBlbHNlIHNhZG5lc3NcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52LmVudiA/PyAnZGV2J1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZmlyc3QgKi9cbmltcG9ydCB7IHR5cGUgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cydcbmltcG9ydCB7IFNlY3VyaXR5UG9saWN5UHJvdG9jb2wgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWRmcm9udCdcbmltcG9ydCB7IFN0YWNrLCB0eXBlIFN0YWNrUHJvcHMgfSBmcm9tICdAbndtLWNkay1jb3JlL253bS1zdGFjaydcbmltcG9ydCB7IFN0YXRpY1NpdGUgfSBmcm9tICdAbndtLWNkay1wYXR0ZXJuL3NlcnZlcmxlc3Mtc3RhdGljLXNpdGUnXG5pbXBvcnQgeyBXYWYsIFdBRkFjdGlvbiwgV0FGVHlwZSB9IGZyb20gJ0Bud20tY2RrLXNlcnZpY2UvbndtLXdhZnYyJ1xuaW1wb3J0IHsgVG9waWMgfSBmcm9tICdAbndtLWNkay1zZXJ2aWNlL253bS1zbnMnXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcblxuZXhwb3J0IGNsYXNzIFNlcnZlcmxlc3NDb25maWdDb2x1bW5GdW5kc1N0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvciAoc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcylcblxuICAgIGNvbnN0IGFsZXJ0cyA9IG5ldyBUb3BpYyh0aGlzLCBgY29sdW1uLWZ1bmRzLSR7ZW52fS10b3BpY2AsIHtcbiAgICAgIHRvcGljTmFtZTogYHNlcnZlcmxlc3MtY29uZmlnLWNvbHVtbi1mdW5kcy0ke2Vudn1gLFxuICAgICAgZW1haWxBZGRyZXNzOiAnREwtTVNBLURZTk8tQk9UU0Bub3J0aHdlc3Rlcm5tdXR1YWwuY29tJ1xuICAgIH0pXG5cbiAgICBuZXcgU3RhdGljU2l0ZSh0aGlzLCBgY29sdW1uLWZ1bmRzLXNpdGUtYnVja2V0LSR7ZW52fWAsIHtcbiAgICAgIGRvbWFpbk5hbWU6IGNvbmZpZy5nZXQoJ2RvbWFpbk5hbWUnKSxcbiAgICAgIHNpdGVTdWJEb21haW46IGNvbmZpZy5nZXQoJ3NpdGVTdWJEb21haW4nKSxcbiAgICAgIGJ1Y2tldE5hbWU6IGNvbmZpZy5nZXQoJ2J1Y2tldE5hbWUnKSxcbiAgICAgIGFzc2V0U291cmNlUGF0aDogJy5uZXh0LycsXG4gICAgICBhbGVydHMsXG4gICAgICBwcml2YXRlWm9uZTogdHJ1ZSxcbiAgICAgIGhhc1JlcGxpY2FCdWNrZXQ6IGZhbHNlLFxuICAgICAgZXJyb3JSZXNwb25zZVBhZ2VQYXRoOiAnL2luZGV4Lmh0bWwnLFxuICAgICAgbWluaW11bVByb3RvY29sVmVyc2lvbjogU2VjdXJpdHlQb2xpY3lQcm90b2NvbC5UTFNfVjFfMl8yMDIxLFxuICAgICAgd2ViQUNMSWQ6IFdhZi5nZXRXQUZhcm4odGhpcywgeyB3ZWJBQ0xBY3Rpb246IFdBRkFjdGlvbi5CTE9DSywgd2ViQUNMVHlwZTogV0FGVHlwZS5OTSB9KSAvLyBBc3NvY2lhdGUgdGhlIERTTy1tYW5hZ2VkIFdBRiB3aXRoIGFsbCBydWxlcyBpbiBibG9jayBtb2RlXG4gICAgfSlcbiAgfVxufVxuIl19