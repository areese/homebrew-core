const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

get_async()

async function get_async () {
  const result = await octokit.request('GET /orgs/Homebrew/actions/runners')
  console.log("Result: %s", result.data);
}