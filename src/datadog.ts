import { client, v2 } from '@datadog/datadog-api-client';

const configurationOpts = {
    authMethods: {
        apiKeyAuth: '',
    },
};

const configuration = client.createConfiguration(configurationOpts);
configuration.setServerVariables({
    site: 'us5.datadoghq.com'
});
const apiInstance = new v2.MetricsApi(configuration);

export async function submitMetric(metricName: string, type: v2.MetricIntakeType, value:number) {
    const params: v2.MetricsApiSubmitMetricsRequest = {
        body: {
            series: [
                {
                    metric: metricName,
                    type: type,
                    points: [
                        {
                            timestamp: Math.round(new Date().getTime() / 1000),
                            value: value,
                        },
                    ],
                    resources: [
                        {
                            name: 'Danis-Air.attlocal.net',
                            type: 'host',
                        },
                    ],
                    tags: ['github'] //I thought about using source_type_name: github instead, but decided against because I'm using github's API, not the DataDog github integration
                },
            ],
        },
    };

    apiInstance
        .submitMetrics(params)
        .then((data: v2.IntakePayloadAccepted) => {
            console.log(
                'API called successfully. Returned data: ' + JSON.stringify(data)
            );
        })
        .catch((error: unknown) => console.error(error));
}
