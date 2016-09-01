import { _ } from 'streamline-runtime';

import express = require ('express');
require('express-streamline');

import * as fs from 'fs';


function countLines(filename: string, _: _) {
    return fs.readFile(filename, 'utf8', _).split('\n').length;
}
export class ServerApp {

    private _App: express.Application;
    
    constructor() {
        console.log("express: ", express);
        this._App = express();        
    }
    
    public setRoutes() {        
        this._App.get('/', this._RenderHelloWorld);          
    }

    public startServer() {
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    }

    private _RenderHelloWorld(req: express.Request, res: express.Response, _: _) {
        var x = countLines('c:\\windows-version.txt', _);
        console.log("X: "+x);
        res.send('Hello World!');
    }


}