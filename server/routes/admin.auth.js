const express = require('express')
const route = express.Router()
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')

route.post('/login', async (req,res)=>{
    const email = req.body.user.email
    const password = req.body.user.password
    try {
        const user = await Admin.findOne({email})
        if(!user) throw Error('Not matched!')
        if(user.password === password){
            const token = jwt.sign({id: user.id},'thisis_secret',{ expiresIn: 86400 });
            if(!token) throw Error("Couldn't sign in")
            console.log(token)
            res.send({
                token,
                user:{
                    id:user._id,
                    email: user.email
                }
            })
        } else {
            throw Error('Invalid credentials');
        }
    } catch(err){
        res.send({ msg: err.message })
    }
})

module.exports = route;