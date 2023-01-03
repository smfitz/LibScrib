const router = require('express').Router();
const { User, Review } = require('../../models');

// User Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: { email: email }
    })
    if (!user) {
        res.status(404).json({ message: "User not found"})
    } else {
        if (user.checkPassword(password)) {
            // CORRECT password
            req.session.user_id = user.id
            req.session.logged_in = true
            res.json({message: "User logged in"})
        } else {
            // INCORRECT password
            res.json({message:"Password is incorrect"})
        }
    }
})

// Create a new user
router.post('/', async (req, res) => {
    try{
        const result = await User.create(req.body);
        res.json(result);
    }
    catch(err) {
        res.json(err)
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    try{
        const result = await User.findByPk(req.params.id, {
            attributes: {
                exclude: ["password"]
            },
            include: [{"model":Review}]
        });
        if (result) {
            const user = result.get({plain:true});
            res.status(200).json(user);
        } else {
            res.status(404).json({"error": "User not found"});
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
})

// Get all users
router.get('/', async (req, res) => {
    try{
        const result = await User.findAll({
            attributes: {
                exclude: ["password"]
            }
        });
        const users = result.map((user) => {
            return user.get({plain: true})
        })
        res.status(200).json(users);
    }
    catch(err) {
        res.status(500).json(err);
    }
})

// Update user
router.put('/:id', async (req, res) => {
    try {
        const result = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (!result) {
            res.status(404).json({"message": "User not found"})
        }
        res.status(200).json(result);

    }
    catch(err) {
        res.status(500).json(err);
    }
})

// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const result = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!result) {
            res.status(404).json({"message": "User not found"})
        }
        res.status(200).json(result);

    }
    catch(err) {
        res.status(500).json(err);
    }
})

// User Logout
router.post('/logout', async (req, res) => {
    req.session.destroy()
    res.json({message:"Logged out"})
})




module.exports = router;