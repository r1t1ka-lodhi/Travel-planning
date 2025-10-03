import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

export const authenticate = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }

    const token = jwt.sign(
        { userId: user._id },          // payload
        process.env.JWT_SECRET,        // secret key
        { expiresIn: '1h' }           // token expiry
    );

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.userId; // attach userId to request
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
});
