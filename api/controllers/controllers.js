import path from "path";

class PageController {
    static getHomepage(req, res) {
        res.sendFile(path.resolve() + "/public/html/index.html");
    }

    static getLogin(req, res) {
        res.sendFile(path.resolve() + "/public/html/login.html");
    }

    static getProfile(req, res) {

        const coop1 = {
            company: "NUSci",
            location: "Boston",
            date_applied: "1/24/2024",
            app_status: "Accepted",
        }    

        const coop2 = {
            company: "Oasis",
            location: "Boston",
            date_applied: "1/15/2024",
            app_status: "Declined",
        }   

        const coop3 = {
            company: "Amazon",
            location: "Seattle",
            date_applied: "1/10/2024",
            app_status: "Ghosted",
        } 

        const coop = [coop1, coop2, coop3];

        res.render("profile", { coop });
    }

    static getAdd(req, res) {
        res.sendFile(path.resolve() + "/public/html/add.html");
    }

    static getFriends(req, res) {
        res.sendFile(path.resolve() + "/public/html/friends.html");
    }
}

export default PageController;
