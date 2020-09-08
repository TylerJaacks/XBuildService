const BashUtils = require("./BashUtils");

// TODO - Should create a new Docker container based on a given creation script.
function createDockerContainer(dockerCreationRequest) {
    if (dockerCreationRequest == null) {
        BashUtils.changeDirectory('../Docker-OSX');
        BashUtils.runShellScript('') 
    }
}