const router = require('express').Router();
const { userStats } = require('../../client/src/actions/authActions');
const { default: Stat } = require('../../client/src/components/Stat');
let Stats = require('../models/Fitness');

router.get('/', (req, res) => {
    Stats.find()
    .then(user => res.json(Stats))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
    const date = Date.parse (req.body.date);
    const workout = req.body.workout;
    const duration = Number(req.body.duration);
    const social = Number(req.body.social);
    const calories = Number(req.body.calories);

    const userStats = new Stats ({
        date,
        workout,
        duration,
        social,
        calories,
    }); 

userStats.save()
.then(()=> res.json('Stats added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
