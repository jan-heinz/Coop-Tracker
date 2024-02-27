import Connection from "../db/connections.js"
import Coop from "../models/coop.js";

export default class CoopAccessor {
    static async getCoopById(coopId) {
        await Connection.open("coops");
        const coopFromDatabase = await Coop.findOne({id: coopId});
        return coopFromDatabase;
    }

    static async getAllCoops() {
        await Connection.open("coops");
        const allCoops = await Coop.find({});
        return allCoops;
    }

    static async postCoop(coopDoc) {
        Coop.create(coopDoc);
    }
}


