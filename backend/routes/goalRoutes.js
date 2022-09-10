const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  deleteGoals,
  updateGoals,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

// router.get('/', getGoals)
// router.post('/', setGoals)
// router.post('/', (req, res) => {
//     res.status(200).json({message: "Set goal"})
// })
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)

module.exports = router;
