import { emailVerificationMailGenContent, sendMail } from '../Utils/mail.js';
import User from "../models/user.js"
import asyncHandler from "express-async-handler";
import ApiError from "../Utils/api-errors.js";
import { ApiResponse } from '../Utils/api-response.js';


const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    const exsist = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (exsist) {
        throw new ApiError('User already exists', 409);
    }

    const user = await User.create({
        email,
        username,
        password,
        isEmailVerified: false
    });

    // send verification email
    await sendMail({
        email: user?.email,
        subject: "Email Verification",
        mailgenContent: emailVerificationMailGenContent(
            user.username,
            `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/`
        ),
    });

    // fetch clean user object without sensitive fields
    const createdUser = await User.findById(user._id).select(
        "-password  -fullName "
    );

    if (!createdUser) {
        throw new ApiError('Something went wrong while registering the user', 404);
    }

    // ✅ only return user + success message
    return res.status(201).json(
        new ApiResponse(
            201, // status code must match the HTTP response
            { user: createdUser },
            "User registered successfully and verification email sent"
        )
    );
});


const login = asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;

    if (!email && !username) {
        throw new ApiError(400, "Email or username is required to login");
    }
    if (!password) {
        throw new ApiError(400, "Password is required to login");
    }

    let user; // declare once

    if(email){
        user = await User.findOne({ email }); // assign to outer variable
        if (!user) {
            throw new ApiError(400, "User not found with this email");
        }
    }
    else if(username){
        user = await User.findOne({ username }); // assign to outer variable
        if (!user) {
            throw new ApiError(400, "User not found with this username");
        }
    }

    // Password check (uncomment this when ready)
    // const isPasswordValid = await user.comparePassword(password);
    // if (!isPasswordValid) {
    //     throw new ApiError(400, "Invalid password");
    // }

    // Optional: send login verification email
    await sendMail({
        email: user.email,
        subject: "Login Verification",
        mailgenContent: emailVerificationMailGenContent(
            user.username,
            `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/`
        ),
    });

    const loggedInUser = await User.findById(user._id).select("-password -fullName");

    return res.status(200).json(
        new ApiResponse(
            200,
            { user: loggedInUser },
            "User logged in successfully"
        )
    );
});


const logoutUser = asyncHandler(async (req, res) => {
    const userId = req.user?._id;

    if (!userId) {
        throw new ApiError(401, "Unauthorized - User ID missing");
    }
    const user = await User.findByIdAndUpdate(
        userId,
        { new: true, },

    );

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    await sendMail({
        email: user?.email,
        subject: "logout Verification",
        mailgenContent: emailVerificationMailGenContent(
            user.username,
            `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/`
        ),
    });

    return res
        .status(200)
        .json({
            ApiResponse: new ApiResponse(
                200,
                null,
                "User logged out successfully"
            )
        });
});

export { registerUser, login, logoutUser };