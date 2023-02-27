import Shark from "../../models/Shark.js";

/**
 * this controller finds a Shark document with the specified,
 * MongoDB object ID & deletes it.
 * author: Refaat 🌻
 */
const deleteShark = async (request, response) => {
    try {
        // find a document with the specified id & deletes it
        await Shark.findOneAndDelete({ _id: request.params.id });
        
        response.status(200).json({
            message: 'successfully deleted a Shark!'
        });
    } catch (error) {
        response.status(500).json({
            message: 'something went wrong on our side'
        });
    }
}

export default deleteShark;