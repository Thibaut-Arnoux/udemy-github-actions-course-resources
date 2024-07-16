const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // extract input
    const input = core.getInput('who-to-greet', { required: true });

    core.notice(`Hello ${input} ! From javascript action!`);
}

run();