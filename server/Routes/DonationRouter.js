const router = require("express").Router();

const {
  saveNgoSelection,
  getMyNgoHistory,
  updateDonationAfterPayment
} = require("../Controllers/DonationController");

router.post("/select-ngo", saveNgoSelection);

router.get("/my-ngos/:userId", getMyNgoHistory);
router.put("/update-donation", updateDonationAfterPayment);
module.exports = router;