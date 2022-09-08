const express = require('express')
const router = express.Router()
const {getGoals, setGoals, deleteGoals, updateGoals} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

// router.get('/', getGoals)
// router.post('/', setGoals)
// router.post('/', (req, res) => {
//     res.status(200).json({message: "Set goal"})
// })
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)


module.exports = router