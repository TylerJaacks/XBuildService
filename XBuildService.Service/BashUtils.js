function changeDirectory(newDirectory) {
    return exec('cd ' + newDirectory, (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);

        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}

function runShellScript(shellScriptName) {
    return exec('sh ' + shellScriptName, (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);

        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}