import express from "express";
import PageController from "../controllers/controller.js";
import path from "path";

const router = express.Router();

router.route("/").get(PageController.getHomePage);

router.route("/coops").get(PageController.getCoops).post(PageController.postCoop);

router.route("/public/css/:style.css").get((req, res) => {
    res.sendFile(path.resolve() + `/public/css/${req.params.style}.css`);
  });
  
  export default router;