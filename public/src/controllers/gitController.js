const { gitService } = require("../services");
const { catchAsync } = require("../utils/error");
const { Octokit } = require("@octokit/core");

const getPr = async (req, res) => {
  const octokit = new Octokit({ auth: process.env.GIT_TOKEN });

  let response = await octokit.request("GET /repos/{owner}/{repo}/pulls", {
    owner: "wecode-bootcamp-korea",
    repo: "38-1st-Wedidas-frontend",
  });

  return res.status(200).json(response);
};

const getPrComment = async (req, res) => {
  const octokit = new Octokit({ auth: process.env.GIT_TOKEN });

  let response = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls/comments",
    {
        owner: "wecode-bootcamp-korea",
        repo: "38-1st-Wedidas-frontend",
    }
  );

  return res.status(200).json(response);
};

const getPrReview = async (req, res) => {
  const octokit = new Octokit({ auth: process.env.GIT_TOKEN });

  let response = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews",
    {
        owner: "wecode-bootcamp-korea",
        repo: "38-1st-Wedidas-frontend",
      pull_number: "1",
    }
  );
  return res.status(200).json(response);
};

module.exports = { getPr, getPrComment, getPrReview, };
