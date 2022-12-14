const express = require("express");
const router = express.Router();

const accountController = require("../controllers/accountController");

// login form GET
router.get("/login", accountController.account_form_get);

// login form POST
router.post("/login", accountController.account_form_post);

// register form GET
router.get("/register", accountController.register_form_get);

// register form POST
router.post("/register", accountController.register_form_post);

// show users profile details
router.get("/profile/:id", accountController.account_details);

// GET request for updating/deleting a profile
router.get("/profile/:id/update", accountController.account_update_get);

// POST request for updating a profile
router.post("/profile/:id/update", accountController.account_update_post);

// GET request for updating/deleting a profile
router.post("/profile/:id/delete", accountController.account_delete_post);

// handle profile logout
router.get("/log-out", accountController.account_logout);

module.exports = router;
