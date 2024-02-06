import express from "express";
import PageController from "../controllers/controllers.js";

const router = express.Router();

router.route("/").get(PageController.getHomepage);

router.route("/login").get(PageController.getLogin);

router.route("/profile").get(PageController.getProfile);

router.route("/add").get(PageController.getAdd);

router.route("/friends").get(PageController.getFriends);


export default router;