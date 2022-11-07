import * as dotenv from 'dotenv'
import {Request, Response} from "express";
import express from "express";
const {google} = require('googleapis')

const app = express();
dotenv.config()

app.set("view engine", "ejs")

app.post("/", async (req: Request, res: Response) => {
    const { request, name }  = req.body;
})
const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const authClientObject = auth.getClient();
const googleSheetsInstance = google.sheets({version: "v4", auth: authClientObject});
const spreadsheetId = process.env.SPREADSHEET_ID
console.log(spreadsheetId);

//Read front the spreadsheet
const readData = googleSheetsInstance.spreadsheets.values.get({
    auth, //auth object
    spreadsheetId, // spreadsheet id
    range: "Sheet1!A:A", //range of cells to read from.
})

//send the data reae with the response
console.log(readData.data);