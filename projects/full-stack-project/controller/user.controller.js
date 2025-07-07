import User from "../model/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { json } from "stream/consumers";

const registerUser = async (req, res) => {
    //get data 
    //validate data 
    //check if user already exists
    //create a user in database
    //create a verification token
    //save token in database 
    //send token to user as email
    //send success status to user
    
    const {name, email, password} = req.body

    if(!name, !email, !password){
        return res.status(400).json({
            message: "All Fields Are Required"
        });  
    }
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(400).json({
                 message : "User already exists"
            })
        }

        const user = await User.create({
            name, 
            email,
            password
        })

        console.log(user);
         
        if(!user){
            res.status(400).json({
                message : "User registration failed"
            }); 
        }

        const token = crypto.randomBytes(32).toString("hex")
        
        console.log(token);

        user.verificationToken = token;

        await user.save();

        //send email

        const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAILTRAP_USERNAME,
            pass: process.env.MAILTRAP_PASSWORD,
        },
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email ,
            subject: "Verify your email ✔",
            text: "Hello world?", // plain‑text body
            html: `Please click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // HTML body
        };

        await transporter.sendMail(mailOption)

        res.status(201).json({
            message: "User registered successfully",
            success: true
        });


    } catch (error) {
        res.status(400).json({
            message : "User registration failed",
            error,
            success: false
        });
        
    }
};

const verifyUser = async (req, res) => {
    //get token from url
    //validate token
    //find user with token
    //if not found the user
    //if found the user 
    //update/set user isVerified to true
    //remove verification token
    //send success status to user

    const {token} = req.params;

    console.log(token);

    if(!token){
        return res.status(400).json({
            message : "Invalid Token"
        });
    }
    
    const user = await User.findOne({verificationToken: token});

    if(!user){
        return res.status(400).json({
            message : "Invalid Token"
        });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

}

const login = async (req, res) => {
    const {email, password} = req.body
    if(!email, !password){
        return res.status(400).json({
            message : "All Fields Are Required"
        });
    }

    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message : "Invalid EMAIL or PASSWORD"
            });
        }

       const isMatch = await bcrypt.compare(password, user.password)
       console.log(isMatch);
       if(!isMatch){
        return res.status(400).json({
            message : "Invalid EMAIL or PASSWORD"
        });
       }

       const token = jwt.sign(
        {id: user._id, role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: "24h"}
    );


    const cookieOptions = {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true
    }

    res.cookie("token", token, cookieOptions)

    res.status(200).json({
        message: "User logged in successfully",
        success: true,
        token,
        user: {
            id: user._id,
            name: user.name,
            role: user.role
        }
    });

    } catch (error) {
        res.status(400).json({
            message : "User login failed",
            error,
            success: false
        });
        
    }
}
export {registerUser, verifyUser, login}