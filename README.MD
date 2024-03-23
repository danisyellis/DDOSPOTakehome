## My Datadog Organization name is the same as my name "Danielle Gellis"

You'll see metrics in there because of the Agent that I had to install to get the free trial started. You can ignore those.

### **The custom metrics I'm grabbing from GitHub are**
--- pull_requests.open 
The number of pull requests open at the time the metric was grabbed.
This metric can be used by project maintainers to, at a glance, see how many PRs are currently open
--- issues.open
The number of issues open at the time the metric was grabbed.


## With more time, I would have...
- If this were a production project, I'd set it up to run once a day to grab these metrics.
- I would also, of course, remove secrets like the API key from the code and instead have them be environment variables.

- I would paginate the response I'm getting back from the GitHub API to ensure that we get all event data.
- I would add tests. I would mock out the http calls and make sure that calling `run` in `index.js` 
    a) gets data from `getOpenPulls()` and `getOpenIssues()`
    b) calls `submitMetrics` with the correct arguments


### Some of the Additional Metrics I'd add with more time:
##### - Pull requests opened per day
This is the number of PRs opened in the last 24 hours.
It would most likely be used on a graph that's averaged, to see the average # of open PRs over time. This could give info on things like project popularity and growth over time.
##### - Number of pulls by org members/company employees vs. outside contributors
##### - Number of Active Recurring Contributors 
Active Recurring Contributors are people who have contributed more than once over a given timeframe- for example, 3 months
##### - Time till close for both PRs and issues
    - This metric would be useful to look at in a few different ways. Thngs like:
        - a single number of days, averaged, from data from the last 3 months or so
        - a graph that would show any times there were outliers (example: maybe the TTC gets especially big during Hacktoberfest and so more resources should be allocated next October)
##### - Time till first response for both PRs and issues
    - This would look at the first comment made by someone other than the submitter (or maybe the first comment by someone who's an Maintainer/Admin of the repo )

### Note for transparency:
    I completed this project in the allotted 3-4 hours, but I am using a previously created template as a base. The template gave me the skeleton of a project with TypeSctipt, Eslint, and Jest hooked up. (There are similar templates available as Node libraries that I could have pulled in, but I prefer my own.)

### Other things:
    The docs for Datadog's Node.js API Client have a word missing that makes the instructions a bit unclear. So I created an issue for it https://github.com/DataDog/datadog-api-client-typescript/issues/1573 
    (And will potentially make a PR to fix it, depending on the maintainer's response)


### If you'd like to run this code yourself, simply `cd` into the folder holding the project, add the github and datadog API keys (found in the notes of my submission on Greenhouse) to `datadog.ts` line 5 and `github.ts` line 3, and then run
`npm install`
`npx tsc`
`npm start`