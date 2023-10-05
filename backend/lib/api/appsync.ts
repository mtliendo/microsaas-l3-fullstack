import {
	AmplifyGraphqlApi,
	AmplifyGraphqlDefinition,
} from '@aws-amplify/graphql-api-construct'
import { UserPool } from 'aws-cdk-lib/aws-cognito'
import { Construct } from 'constructs'

type AmplifyGraphQLAPIProps = {
	userpool: UserPool
}

const createAmplifyGraphQLAPI = (
	scope: Construct,
	props: AmplifyGraphQLAPIProps
) => {
	const api = new AmplifyGraphqlApi(scope, 'MicroSaaSAPI', {
		definition: AmplifyGraphqlDefinition.fromFiles(),
		authorizationModes: {},
	})

	return api
}
