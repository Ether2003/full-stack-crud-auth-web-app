import mongoose from 'mongoose';

/**
 * this middleware function that validates that the id in the request parameters is a mongodb object id
 * author: Refaat 🌻
 */
const validateObjectId = (request, response, next) => {
    if (mongoose.isValidObjectId(request.params.id)) {
        return next();
    }

    return response.status(400).json({
        message: 'invalid id'
    });
}

export default validateObjectId;