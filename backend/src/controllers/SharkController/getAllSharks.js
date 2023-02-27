import Shark from "../../models/Shark.js";

/**
 * this controller returns a list of Shark documents
 * author: 🌻
 */
const getAllSharks = async (request, response) => {
    try {
        const sharks = await Shark.find();

        response.status(200).json({
            sharks
        });
    } catch (error) {
        response.status(500).json({
            message: 'something went wrong on our side'
        });
    }
}

export default getAllSharks;