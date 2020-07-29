"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_Datenbank;
(function (L07_Datenbank) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://Testuser:halloichhabekeinelustmehr@eia2-e3syb.mongodb.net/Haushaltshilfe?retryWrites=true&w=majority";
    //let destination: string = "";
    startServer(port /*destination*/);
    connectToDatabase(databaseUrl);
    function startServer(_port /*, _destination: string*/) {
        let server = Http.createServer();
        console.log("Server strating on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
        /*if (_destination == "local")
            console.log("Using local databse");
            databaseUrl = "mongo://27017";*/
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Haushaltshilfe").collection("Orders");
        console.log("Database connetion", orders != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ": " + url.query[key] + " ");
            }
            storeOrder(url.query);
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_Datenbank = exports.L07_Datenbank || (exports.L07_Datenbank = {}));
//# sourceMappingURL=server.js.map