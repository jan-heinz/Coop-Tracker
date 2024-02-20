import path from "path";
import CoopAccessor from "../db_accessors/coop.accessor.js";

class PageController {
    static getHomepage(req, res) {
        res.sendFile(path.resolve() + "/public/html/index.html");
    }

    static getLogin(req, res) {
        res.sendFile(path.resolve() + "/public/html/login.html");
    }

    static async getProfile(req, res) {
        const coops = await CoopAccessor.getAllCoops{};
        res.render("profile", { coops });
    }

    static getAdd(req, res) {
        res.sendFile(path.resolve() + "/public/html/add.html");
    }

    static getFriends(req, res) {
        res.sendFile(path.resolve() + "/public/html/friends.html");
    }
}

export default PageController;
