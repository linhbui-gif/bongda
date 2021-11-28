const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const userDb = require("./user.model");
userDb.sync();
router.post("/signup", async (req, res, next) => {
    try {
        const password = await bcrypt.hash(req.body.pw, saltRounds);
        let user = await userDb.create({
            id: req.body.id,
            pw: password,
            email: req.body.email,
        });
        return res.status(201).json({
            status: 201,
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error,
        });
    }
});
router.post("/signin", async (req, res, next) => {
    try {
        const user = await userDb.findOne({
            where: {
                id: req.body.id
            }
        });
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: 'id not found'
            })
        }
        let resultCompare = await bcrypt.compare(req.body.pw, user.pw);
        if (!resultCompare) {
            return res.status(404).json({
                status: 404,
                message: 'password is not correct'
            })
        }
        const token = jwt.sign({
            id: user.id
        }, 'hello');
        return res.status(200).json({
            status: 200,
            data: {
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error,
        });
    }
});
module.exports = router;