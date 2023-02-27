import User from '../../models/User.js'

/**
 * this controller registers a new user to the database
 */
const registerUser = async (request, response) => {
    try {
        const { email, password, confirmPassword } = request.body;

        // query the db for a user with the specified email
        const userExists = await User.findOne({ email });

        // validate that the provided email is not being used
        if (userExists) {
            return response.status(400).json({ message: 'this email is already being used!' });
        }

        // validate that the provided password match
        if (password !== confirmPassword) {
            return response.status(400).json({ message: 'passwords do not match' });
        }

        // validate that the provided password matches the users password
        if (password !== confirmPassword) {
            return response.status(400).json({ message: 'incorrect password' });
        }

        // register a new user to the database
        const registeredUser = await User.create({ email, password })

        // onwards!!
        response.status(200).json({
            message: `successfully registered ${registerUser.email} to the database!`,
        });
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            error: 'something went wrong on our side....'
        });
    }
}

export default registerUser;