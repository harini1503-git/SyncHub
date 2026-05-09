import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

const generateToken= (id: string)=>{
    return jwt.sign(
        {id},
        process.env.JWT_SECRET as string,
        {expiresIn: "1d"}
    )
}
export const registerUser= async(req: Request, res: Response)=>{
    try{
        const {username, email, password} = req.body;
    // does user exist
    const existingUser= await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password,10);
    // create user
    const user= await User.create({
        username,
        email,
        password: hashedPassword
    });
    // RETURN RESPONSE
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id.toString()),
    });
    }catch(error){
        res.status(500).json({message: "Server error"});
    }
}

export const LoginUser= async(req: Request, res: Response) => {
    try{
        const {email, password}= req.body;
    // find user by email
    const user= await User.findOne({email});
    if(!user){
        return res.status(400).json({message: "Invalid credentials"});
    }
    // compare password
    const isMatch= await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid credentials"});
    }
    // return response
    res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id.toString()),
    });
    }catch(error){
        res.status(500).json({message: "Server Error!"});
    }
}