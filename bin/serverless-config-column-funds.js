#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NODE_APP_INSTANCE MUST be set before config is imported, else sadness
const env = process.env.env ?? 'dev';
/* eslint-disable no-new */
/* eslint-disable import/first */
require("source-map-support/register");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const serverless_config_column_funds_stack_1 = require("../lib/serverless-config-column-funds-stack");
const app = new aws_cdk_lib_1.App();
new serverless_config_column_funds_stack_1.ServerlessConfigColumnFundsStack(app, `ServerlessConfigColumnFunds-${env}`, {
    tags: {
        application_name: `serverless-config-column-funds-${env}`,
        managed_by: 'serverless:cdk',
        portfolio: 'CX',
        repo: 'https://git.nmlv.nml.com/nmx/static/serverless-config-column-funds',
        utan: '53119'
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzcy1jb25maWctY29sdW1uLWZ1bmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVybGVzcy1jb25maWctY29sdW1uLWZ1bmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHdFQUF3RTtBQUN4RSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUE7QUFFcEMsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyx1Q0FBb0M7QUFDcEMsNkNBQWlDO0FBQ2pDLHNHQUE4RjtBQUU5RixNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLEVBQUUsQ0FBQTtBQUNyQixJQUFJLHVFQUFnQyxDQUNsQyxHQUFHLEVBQ0gsK0JBQStCLEdBQUcsRUFBRSxFQUNwQztJQUNFLElBQUksRUFBRTtRQUNKLGdCQUFnQixFQUFFLGtDQUFrQyxHQUFHLEVBQUU7UUFDekQsVUFBVSxFQUFFLGdCQUFnQjtRQUM1QixTQUFTLEVBQUUsSUFBSTtRQUNmLElBQUksRUFBRSxvRUFBb0U7UUFDMUUsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNGLENBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuLy8gTk9ERV9BUFBfSU5TVEFOQ0UgTVVTVCBiZSBzZXQgYmVmb3JlIGNvbmZpZyBpcyBpbXBvcnRlZCwgZWxzZSBzYWRuZXNzXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5lbnYgPz8gJ2RldidcblxuLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZmlyc3QgKi9cbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnYXdzLWNkay1saWInXG5pbXBvcnQgeyBTZXJ2ZXJsZXNzQ29uZmlnQ29sdW1uRnVuZHNTdGFjayB9IGZyb20gJy4uL2xpYi9zZXJ2ZXJsZXNzLWNvbmZpZy1jb2x1bW4tZnVuZHMtc3RhY2snXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKVxubmV3IFNlcnZlcmxlc3NDb25maWdDb2x1bW5GdW5kc1N0YWNrKFxuICBhcHAsXG4gIGBTZXJ2ZXJsZXNzQ29uZmlnQ29sdW1uRnVuZHMtJHtlbnZ9YCxcbiAge1xuICAgIHRhZ3M6IHtcbiAgICAgIGFwcGxpY2F0aW9uX25hbWU6IGBzZXJ2ZXJsZXNzLWNvbmZpZy1jb2x1bW4tZnVuZHMtJHtlbnZ9YCxcbiAgICAgIG1hbmFnZWRfYnk6ICdzZXJ2ZXJsZXNzOmNkaycsXG4gICAgICBwb3J0Zm9saW86ICdDWCcsXG4gICAgICByZXBvOiAnaHR0cHM6Ly9naXQubm1sdi5ubWwuY29tL25teC9zdGF0aWMvc2VydmVybGVzcy1jb25maWctY29sdW1uLWZ1bmRzJyxcbiAgICAgIHV0YW46ICc1MzExOSdcbiAgICB9XG4gIH1cbilcbiJdfQ==