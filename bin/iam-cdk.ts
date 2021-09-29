#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam'
import { IamCdkStack } from '../lib/iam-cdk-stack';

const app = new cdk.App();
new IamCdkStack(app, 'IamCdkStack', {});
