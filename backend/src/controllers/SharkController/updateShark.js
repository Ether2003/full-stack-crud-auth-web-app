import Shark from "../../models/Shark.js";

/**
 * this controller finds a Shark document with the specified,
 * MongoDB object ID & updates it.
 * author: Refaat 🌻
 */
const updateShark = async (request, response) => {
    try {
        // find a document with the specified id & updates it
        await Shark.findOneAndUpdate({ _id: request.params.id }, request.body);
        response.status(200).json({
            message: 'successfully updated a Shark!'
        });
    } catch (error) {
        response.status(500).json({
            message: 'something went wrong on our side'
        });
    }
}

export default updateShark;