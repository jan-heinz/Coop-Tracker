import path from "path";

class PageController {
    static getHomepage(req, res) {
        res.sendFile(path.resolve() + "/index.html");
    }

    static getLogin(req, res) {
        res.sendFile(path.resolve() + "/login.html");
    }

    static getProfile(req, res) {
        res.sendFile(path.resolve() + "/profile.html");
    }

    static getAdd(req, res) {
        res.sendFile(path.resolve() + "/add.html");
    }

    static getFriends(req, res) {
        res.sendFile(path.resolve() + "/friends.html");
    }
}

export default PageController;
