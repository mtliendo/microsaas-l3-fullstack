import {
	AmplifyGraphqlApi,
	AmplifyGraphqlDefinition,
} from '@aws-amplify/graphql-api-construct'
import { AuthorizationType } from 'aws-cdk-lib/aws-appsync'
import { UserPool } from 'aws-cdk-lib/aws-cognito'
import { Construct } from 'constructs'

type AmplifyGraphQLAPIProps = {
	userpool: UserPool
}

export const createAmplifyGraphQLAPI = (
	scope: Construct,
	props: AmplifyGraphQLAPIProps
) => {
	const api = new AmplifyGraphqlApi(scope, 'MicroSaaSAPI', {
		definition: AmplifyGraphqlDefinition.fromFiles(),
		authorizationModes: {
			defaultAuthorizationMode: AuthorizationType.USER_POOL,
			userPoolConfig: {
				userPool: props.userpool,
			},
		},
	})

	api.resources.cfnResources.cfnGraphqlApi.xrayEnabled = true
	return api
}
