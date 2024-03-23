import axios from 'axios';

const apitoken = '';
const head = {
    'User-Agent': 'request',
    Authorization: 'token ' + apitoken,
};

export async function getOpenPRs() {
    try {
        const response = await axios.get('https://api.github.com/repos/eslint/eslint/pulls?state=open', { headers: head });
        //**TODO: Paginate this- the API only returns the first 30 responses by default so without paginating, our number will always be 30 or less

        return response.data.length;
    } catch (e) {
        console.error(e);
    }
}

export async function getOpenIssues() {
    try {
        const response = await axios.get('https://api.github.com/repos/eslint/eslint/issues?state=open', { headers: head });
        //**TODO: Paginate this- the API only returns the first 30 responses by default so without paginating, our number will always be 30 or less

        return response.data.length;
    } catch (e) {
        console.error(e);
    }
}

getOpenPRs();
