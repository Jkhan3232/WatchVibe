import { Router } from "express";
import {
  createTweet,
  deleteTweet,
  getUserTweets,
  updateTweet,
} from "../controllers/tweet.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/create-tweet").post(createTweet);
router.route("/get-usertweetbyId/:userId").get(getUserTweets);
router.route("/update-usertweetbyId/:tweetId").patch(updateTweet);
router.route("/delete-usertweetbyId/:tweetId").delete(deleteTweet);

export default router;
