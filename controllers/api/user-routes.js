const router = require('express').Router();
const { User, Review } = require('../../models');

router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: "Incorrect email or password, please try again" });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            console.log("wrong password");
            res
                .status(400)
                .json({ message: "Incorrect email or password, please try again" });
            
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(userData, `logged in: ${req.session.logged_in}` )

            res.json({ user: userData, message: "You are now logged in!" });
            
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(userData);

            res.json({ user: userData, message: "You are now logged in!" });
            
        });
    }
    catch (err) {
        res.json(err)
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const result = await User.findByPk(req.params.id, {
            attributes: {
                exclude: ["password"]
            },
            include: [{ "model": Review }]
        });
        if (result) {
            const user = result.get({ plain: true });
            res.status(200).json(user);
        } else {
            res.status(404).json({ "error": "User not found" });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// Get all users
router.get('/', async (req, res) => {
    try {
        const result = await User.findAll({
            attributes: {
                exclude: ["password"]
            }
        });
        const users = result.map((user) => {
            return user.get({ plain: true })
        })
        res.status(200).json(users);
    }
    catch (err) {
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
            res.status(404).json({ "message": "User not found" })
        }
        res.status(200).json(result);

    }
    catch (err) {
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
            res.status(404).json({ "message": "User not found" })
        }
        res.status(200).json(result);

    }
    catch (err) {
        res.status(500).json(err);
    }
})

// User Logout
router.post('/logout', async (req, res) => {
    req.session.logged_in = false;
    console.log(`${req.session.logged_in}`)
    req.session.destroy()
    console.log("goodbye")
    res.json({ message: "Logged out" })
})




module.exports = router;