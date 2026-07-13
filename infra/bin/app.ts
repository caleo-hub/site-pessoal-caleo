#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { HostingStack } from "../lib/hosting-stack";

const app = new cdk.App();

new HostingStack(app, "SitePessoalCaleoHostingStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT ?? "528049652959",
    region: process.env.CDK_DEFAULT_REGION ?? "us-east-1"
  },
  description: "AWS Amplify Hosting and GitHub Actions OIDC for site-pessoal-caleo"
});
