import { getOpenIssues, getOpenPRs } from './github';
import { submitMetric } from './datadog';

async function submitOpenPRs() {
    const result = await getOpenPRs();
    await submitMetric('pull_requests.open', 3, result);
}

async function submitOpenIssues() {
    const result = await getOpenIssues();
    await submitMetric('issues.open', 3, result);
}

async function run() {
    await submitOpenPRs();
    await submitOpenIssues();
}

run();
