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
        const coops = await CoopAccessor.getAllCoops();
        res.render("profile", { coops });
    }

    static async postCoop(req, res) {
        const coopToPost = {
            id: req.body.id,
            company: req.body.company,
            job_title: req.body.job_title,
            location: req.body.location,
            date_applied: req.body.date_applied,
            app_status: req.body.app_status,
        };
        CoopAccessor.postCoop(coopToPost);

        res.redirect("/coops");
    }

    static getFriends(req, res) {
        res.sendFile(path.resolve() + "/public/html/friends.html");
    }
}

export default PageController;
