const config = require("../config/auth.config");
const { admin } = require("../models/index");
let jwt = require("jsonwebtoken");

const signin = (req,res) => {
    console.log(req.body)
    admin.findOne({
        email: req.body.email
    })
    .exec((err,admin) => {
        if(err){
            res.status(500).send({message:err});
            return;
        }
        if(!admin){
            return res.status(404).send({ message: "You are not admin." });
        }
        let passwordIsValid = false;
        if(req.body.password === admin.password){
            passwordIsValid = true
        }
          if (!passwordIsValid) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
          }
          let token = jwt.sign({ id: admin.id,email: admin.email }, config.secret, {
            expiresIn: 86400 // 24 hours
          });

          res.status(200).send({
              id: admin._id,
              email: admin.email,
              accessToken: token
          })
    });
}

module.exports = signin