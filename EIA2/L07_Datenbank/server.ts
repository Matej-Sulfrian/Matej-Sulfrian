import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace L07_Datenbank {
    interface Order {
        [type: string]: string | string[];
    }

    let orders: Mongo.Collection;

    let port: number | string | undefined  = process.env.PORT;
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "mongodb+srv://Testuser:halloichhabekeinelustmehr@eia2-e3syb.mongodb.net/Haushaltshilfe?retryWrites=true&w=majority";

    //let destination: string = "";

    startServer(port, /*destination*/);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string /*, _destination: string*/ ): void {
        let server: Http.Server = Http.createServer();
        console.log("Server strating on port: " + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);

        /*if (_destination == "local")
            console.log("Using local databse");
            databaseUrl = "mongo://27017";*/
    }

    async function connectToDatabase (_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Haushaltshilfe").collection("Orders");
        console.log("Database connetion", orders != undefined);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ": " + url.query[key] + " ");
            }

            storeOrder(url.query);
        }

        _response.end();
    }

    function storeOrder(_order: Order): void {
        orders.insert(_order);
    }
}