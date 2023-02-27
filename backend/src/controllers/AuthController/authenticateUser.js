import User from '../../models/User.js'
import jwt from 'jsonwebtoken';

/**
 * this controller authenticates an existing user
 */
const authenticateUser = async (request, response) => {
    try {
        const { email, password } = request.body;

        // query the db for a user with the specified email
        const user = await User.findOne({ email });

        // validate that a user with the specified email even exists
        if (!user) {
            return response.status(400).json({ message: 'invalid email or password' });
        }

        // validate that the users password matches the specified password
        if (user.password !== password) {
            return response.status(400).json({ message: 'invalid email or password' });
        }

        // signs a token with the authenticated users mongodb object id & email address
        const token = jwt.sign(
            { _id: user._id, email: user.email, role: user.role },  // payload
            process.env.JWT_SECRET || "keyboard cat",               // secret
            { expiresIn: '1d' }                                     // options
        );

        // onwards!!
        response.status(200).json({
            message: `authentication successfull`,
            token,
        });
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            error: 'something went wrong on our side....'
        });
    }
}

export default authenticateUser;