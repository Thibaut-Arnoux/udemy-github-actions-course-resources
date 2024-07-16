const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // extract input
    const input = core.getInput('who-to-great', { required: true });

    // fill the output
    const time = Date.now();
    core.setOutput('time', time.toString());

    core.notice(`Hello ${input} ! From javascript action!`);
}

run();