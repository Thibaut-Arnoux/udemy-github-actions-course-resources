<?php

function run() {
    // extract input
    $input = getenv('INPUT_WHO-TO-GREAT');

    // fill the output
    $githubOutput = fopen(getenv('GITHUB_OUTPUT'), 'a');
    $time = time();
    fwrite($githubOutput, "time=" . $time . PHP_EOL);
    fclose($githubOutput);

    echo "Hello {$input} ! From docker with php action!" . PHP_EOL;
}

run();