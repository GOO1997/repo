"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = __importStar(require("aws-cdk-lib"));
const assertions_1 = require("aws-cdk-lib/assertions");
const serverless_config_column_funds_stack_1 = require("./serverless-config-column-funds-stack");
const stackParams = {
    tags: {
        application_name: 'fee-foo',
        managed_by: 'serverless:cdk',
        portfolio: 'foo',
        repo: 'https://git.nmlv.nml.com/fee-foo',
        utan: 'XXXXX'
    }
};
describe('Marketing ODS Stack', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('exists', () => {
        // Arrange
        // Act
        const template = generateTemplate();
        // Assert
        template.hasResourceProperties('AWS::S3::Bucket', {
            BucketName: 'column-funds-int.cxnon.aws.nml.com'
        });
    });
});
function generateTemplate() {
    const app = new cdk.App();
    const stack = new serverless_config_column_funds_stack_1.ServerlessConfigColumnFundsStack(app, 'MyTestStack', stackParams);
    const template = assertions_1.Template.fromStack(stack);
    return template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzcy1jb25maWctY29sdW1uLWZ1bmRzLXN0YWNrLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2ZXJsZXNzLWNvbmZpZy1jb2x1bW4tZnVuZHMtc3RhY2sudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWtDO0FBQ2xDLHVEQUFpRDtBQUVqRCxpR0FBeUY7QUFFekYsTUFBTSxXQUFXLEdBQUc7SUFDbEIsSUFBSSxFQUFFO1FBQ0osZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLElBQUksRUFBRSxrQ0FBa0M7UUFDeEMsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNGLENBQUE7QUFFRCxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO0lBQ25DLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNoQixVQUFVO1FBRVYsTUFBTTtRQUNOLE1BQU0sUUFBUSxHQUFHLGdCQUFnQixFQUFFLENBQUE7UUFFbkMsU0FBUztRQUNULFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUNoRCxVQUFVLEVBQUUsb0NBQW9DO1NBQ2pELENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUE7QUFFRixTQUFTLGdCQUFnQjtJQUN2QixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN6QixNQUFNLEtBQUssR0FBRyxJQUFJLHVFQUFnQyxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDbkYsTUFBTSxRQUFRLEdBQUcscUJBQVEsQ0FBQyxTQUFTLENBQUMsS0FBNkIsQ0FBQyxDQUFBO0lBQ2xFLE9BQU8sUUFBUSxDQUFBO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ2F3cy1jZGstbGliL2Fzc2VydGlvbnMnXG5cbmltcG9ydCB7IFNlcnZlcmxlc3NDb25maWdDb2x1bW5GdW5kc1N0YWNrIH0gZnJvbSAnLi9zZXJ2ZXJsZXNzLWNvbmZpZy1jb2x1bW4tZnVuZHMtc3RhY2snXG5cbmNvbnN0IHN0YWNrUGFyYW1zID0ge1xuICB0YWdzOiB7XG4gICAgYXBwbGljYXRpb25fbmFtZTogJ2ZlZS1mb28nLFxuICAgIG1hbmFnZWRfYnk6ICdzZXJ2ZXJsZXNzOmNkaycsXG4gICAgcG9ydGZvbGlvOiAnZm9vJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXQubm1sdi5ubWwuY29tL2ZlZS1mb28nLFxuICAgIHV0YW46ICdYWFhYWCdcbiAgfVxufVxuXG5kZXNjcmliZSgnTWFya2V0aW5nIE9EUyBTdGFjaycsICgpID0+IHtcbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBqZXN0LmNsZWFyQWxsTW9ja3MoKVxuICB9KVxuICBpdCgnZXhpc3RzJywgKCkgPT4ge1xuICAgIC8vIEFycmFuZ2VcblxuICAgIC8vIEFjdFxuICAgIGNvbnN0IHRlbXBsYXRlID0gZ2VuZXJhdGVUZW1wbGF0ZSgpXG5cbiAgICAvLyBBc3NlcnRcbiAgICB0ZW1wbGF0ZS5oYXNSZXNvdXJjZVByb3BlcnRpZXMoJ0FXUzo6UzM6OkJ1Y2tldCcsIHtcbiAgICAgIEJ1Y2tldE5hbWU6ICdjb2x1bW4tZnVuZHMtaW50LmN4bm9uLmF3cy5ubWwuY29tJ1xuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRlbXBsYXRlICgpOiBjZGsuYXNzZXJ0aW9ucy5UZW1wbGF0ZSB7XG4gIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKClcbiAgY29uc3Qgc3RhY2sgPSBuZXcgU2VydmVybGVzc0NvbmZpZ0NvbHVtbkZ1bmRzU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snLCBzdGFja1BhcmFtcylcbiAgY29uc3QgdGVtcGxhdGUgPSBUZW1wbGF0ZS5mcm9tU3RhY2soc3RhY2sgYXMgdW5rbm93biBhcyBjZGsuU3RhY2spXG4gIHJldHVybiB0ZW1wbGF0ZVxufVxuIl19