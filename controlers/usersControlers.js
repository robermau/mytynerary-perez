const user = require('../models/user')
const bcryptjs = require('bcryptjs')


const usersControllers = {

    signUpUsers: async (req, res) => {
        const{firstName, lastName,imageUser, email, password, from,country,city,streetAdress,state,zipcode} = req.body.userData 


        try {
            const userExist = await user.findOne({ email })
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

                const passwordHashed =  bcryptjs.hashSync(password, 10)
                const newUser = await new user({
                    firstName: firstName,  
                    lastName:lastName,
                    imageUser:imageUser,
                    streetAdress:streetAdress,
                    city:city,
                    state:state,
                    zipcode:zipcode,
                    email:email,
                    password: passwordHashed,
                    verifiedEmail: false,
                    from: [from],
                    country:country
                })
                if (from !== 'form-Signup') {
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Congrats your user was created " + " " + from
                    })

                } else {
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "We sent yo an email to validate it , please check it to complete the sign up"

                    })
                }
            }
        } catch (error) {
            res.json({
                 console : console.log(error),
                success: false,
                message: " Anything is wrong, try in a few min"

            })
        }

    },
    logInUser: async (req, res) => {
        const { email, password, from } = req.body.logedUser
        try {

            const userExist = await user.findOne({ email })
            // const indexPass = userExist.from.indexOf(from)
            if (!userExist) {
                res.json({ success: false, message: "Your user  not been registered, please sign in " })
            } else {
                if (from !== "form-signUp") {
                    let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passwordMatch.length > 0) {

                        const userData = {

                            id: userExist._id,
                            firstName:userExist.firstName,
                            lastName:userExist.lastName,
                           password: userExist.passwordHashed,
                            email: userExist.email,
                            from: from,
                        }

                        await userExist.save(
                            res.json({
                                success: true,
                                from: from,
                                response: { userData },
                                message: "Wellcome" + "  " + userData.firstName + " " + userData.lastName


                            })
                        )
                    } else {

                        res.json({
                            success: false,
                            from: from,
                            message: "You did not registered with " + " " + from + " " + "if you want to enter with this method please sign up" + " " + from


                        })
                    }

                } else {
                    let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passwordMatch.lenght > 0) {
                        const userData = {
                            id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            email: userExist.email,
                            from: from,

                        }
                        await userExist.save()

                        res.json({
                            success: true,
                            from: from,
                            response: {  userData },
                            message: "Wellcome again" + " " + logedUser.firstName + " " + logedUser.lastName,
                        })

                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "The user or password is wrong"
                        })
                    }
                }

            }

        } catch (error) {
            res.json ({
                success:false,
                message: "Something went wrong. Try again in a few seconds"
            })
        }
    }
}

module.exports = usersControllers