const express = require("express");
const {
  handleGetAllUsers,
  getUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  createNewUser,
} = require("../controllers/user");

const router = express.Router();

// REST API
router.route("/").get(handleGetAllUsers).post(createNewUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
