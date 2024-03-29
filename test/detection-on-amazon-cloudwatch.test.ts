import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DetectionOnAmazonCloudwatch from '../lib/detection-on-amazon-cloudwatch-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DetectionOnAmazonCloudwatch.DetectionOnAmazonCloudwatchStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
