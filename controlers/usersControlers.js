
const crypto = require("crypto")
const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const sendVerification = require('../controlers/sendEmail')
const jwt = require("jsonwebtoken")


const usersControllers = {

    signUpUsers: async (req, res) => {
        const { firstName, lastName, imageUser, email, password, from, country } = req.body.userData


        try {
            const userExist = await User.findOne({ email }) //busca algun usuario ya creado con el metodo finOne
            const verification = false
            const uniqueString = crypto.randomBytes(15).toString('hex') 

            if (userExist && userExist.lenght > 0) {
                if (userExist.from.indexOf(from) !== -1) {
                    res.json({

                        success: false,
                        from: 'signup',
                        message: "You have alredy donde you signup, please sign in"


                    })
                } else {

                    const passwordHashed = bcryptjs.hashSync(password, 10)
                    userExist.from.push(from)
                    userExist.password.push(passwordHashed)
                    res.json({
                        success: true,
                        from: 'signup',
                        message: " We add" + " " + from + " " + "to your means to sign in"
                    })
                }
            } else {

                const passwordHashed = bcryptjs.hashSync(password, 10)
                const newUser = await new User({
                    uniqueString: uniqueString,
                    verification: verification,
                    firstName: firstName,
                    lastName: lastName,
                    imageUser: imageUser,
                    email: email,
                    password: passwordHashed,
                    verifiedEmail: false,
                    from: [from],
                    country: country
                })
                console.log(newUser)
                if (from !== 'form-Signup') {
                    await newUser.save()

                    res.json({
                        success: true,
                        from: "signup",
                        message: "Congrats your user was created " + " " + from
                    })

                } else {
                    await newUser.save()
                    await sendVerification(email, uniqueString)
                    res.json({
                        success: true,
                        from: "signup",
                        message: "We sent yo an email to validate it , please check it to complete the sign up"

                    })
                }
            }
        } catch (error) {
            res.json({
                console: console.log(error),
                success: false,
                message: " Anything is wrong, try in a few min"

            })
        }

    },
    logInUser: async (req, res) => {
        const { email, password, from } = req.body.logedUser
        try {

            const userExist = await User.findOne({ email })

            // const indexPass = userExist.from.indexOf(from)
            if (!userExist) {
                console.log(userExist)
                res.json({ success: false, message: "Your user  not been registered, please sign in " })
            } else {
                if (from !== "form-signUp") {
                    let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passwordMatch.length > 0) {

                        const userData = {

                            id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            password: userExist.passwordHashed,
                            email: userExist.email,
                            imageUser:userExist.imageUser,
                            from: from,
                        }

                        await userExist.save()

                        const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 })

                        res.json({
                            success: true,
                            from: from,
                            response: { token, userData },
                            message: "Wellcome" + "  " + userData.firstName + " " + userData.lastName


                        })


                    }
                    else {

                        res.json({
                            success: false,
                            from: from,
                            message: "You did not registered with " + " " + from + " " + "if you want to enter with this method please sign up" + " " + from


                        })
                    }

                } else {
                    if (userExist.verifiedEmail) {

                        let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                        /* console.log(contraseñaCoincide) */
                        /* console.log("resultado de busqueda de contraseña: " + (contraseñaCoincide.length > 0)) */
                        if (passwordMatch.length > 0) {

                            const userData = {
                                id: userExist._id,

                                firstName: userExist.firstName,
                                lastName: userExist.lastName,
                                email: userExist.email,
                                from: userExist.from
                            }
                            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 })
                            res.json({
                                success: true,
                                from: from,
                                response: { token, userData },
                                message: "Welcome again " + userData.firstName,
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message: "User and password do not match",
                            })
                        }
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "You have not verified your email"
                        })
                    }

                } //SI NO ESTA 

            }

        } catch (error) {
            res.json({
                success: false,
                message: "Something went wrong. Try again in a few seconds"
            })
        }
    },

    verifyMail: async (req, res) => {
        console.log(req.params)
        const string = req.params.string
        const user = await User.findOne({ uniqueString: string })
        console.log(user)
        if (user) {
            user.verification = true
            await user.save()
            res.redirect("http://localhost:3000")
        }
        else { res.json } ({
            success: false,
            message: `email has not been confirmed yet`
        })
    },



    verifyToken: (req, res) => {
            console.log(req.user)
        if (req, res) {
            res.json({
                success: true,
                response: { id: req.user.id, firstName: req.user.firstName, email: req.user.email,imageUser:req.user.imageUser, from: 'token' },
                message: "Welcome " + req.user.firstName
            })
        } else {
            console.log(req.err)
            res.json({
                success: false,
                message: "Please, do the signin again",
                
            })
        }
    }
}

module.exports = usersControllers