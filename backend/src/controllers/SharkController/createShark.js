import Shark from "../../models/Shark.js";

/**
 * this controller inserts a new Shark document into the database
 * author: Refaat 🌻
 */
const createShark = async (request, response) => {
    try {
        await Shark.create(request.body);
        
        response.status(200).json({
            message: 'successfully added a Shark to the database!'
        });
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'something went wrong on our side'
        });
    }
}

export default createShark;