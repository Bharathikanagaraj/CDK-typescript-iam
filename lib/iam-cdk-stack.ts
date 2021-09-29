import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam'
import { Group, ManagedPolicy, Policy, PolicyStatement, Role, ServicePrincipal, User } from '@aws-cdk/aws-iam';

export class IamCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const role = new Role(this, 'myrole-tsc', {
      assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
    });

    // role.addToPolicy(new PolicyStatement({
    //   resources: ['*'],
    //   actions: ['lambda:InvokeFunction','s3:ReadOnlyFucntion'],
    // }));
    //role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'))
    //const user = new User(this, 'myrole-tsc')
    role.addToPolicy(new PolicyStatement({
      resources: ['*'],
      actions: ['ec2:AmazonEC2FullAccess'],
    }))
    

    // const group = new Group(this, 'myrole-tsc');
    // group.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'));
    

  }
}
