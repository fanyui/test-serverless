var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'medikoo',
applicationName: 'medikoo-test',
appUid: 'GjXh77HjWzffv8X5SQ',
tenantUid: '1sJrygBdcH5mNKPSp8',
deploymentUid: '837ede6f-3028-4c15-a140-cde410245bea',
serviceName: 'test-dashboard',
stageName: 'dev',
pluginVersion: '3.2.6'})
const handlerWrapperArgs = { functionName: 'test-dashboard-dev-function', timeout: 6}
try {
  const userHandler = require('./index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}