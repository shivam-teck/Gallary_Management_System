const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated and an admin
const isAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');  // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const secretKey = process.env.JWT_SECRET || 'your-secret-key';  // Store your secret key securely
        const decoded = jwt.verify(token, secretKey);  // Decode the token

        // Attach the decoded user info to the request object
        req.user = decoded;

        // Ensure the user has the role of admin
        if (decoded.role !== 'admin') {
            return res.status(403).json({ error: 'Forbidden. Admins only.' });
        }

        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

module.exports = { isAdmin };
