import Connection from "../db/connection.js"
import mongoose from "mongoose";
import Article from "..model/coop.js";
import Coop from "../models/coop";

export default class CoopAccessor {
    static async getCoopById(coopId) {
        await Connection.open("coop");
        const coopFromDatabase = await Coop.findOne({id: coopId});
        return coopFromDatabase;
    }

    static async getAllCoops() {
        await Connection.open("coop");
        const allCoops = await Coop.find({});
        return allCoops;
    }
}


