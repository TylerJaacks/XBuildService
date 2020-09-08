const Express = require("express");
const BodyParser = require("body-parser");

const DockerUtils = require("./DockerUtils");

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.listen(5000, () => {});

DockerUtils.createDockerContainer(null);

app.post("/create", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }

        // TODO Create OS X Docker Container.
        DockerUtils.createDockerContainer(null);

        response.send(result.result);
    });
});