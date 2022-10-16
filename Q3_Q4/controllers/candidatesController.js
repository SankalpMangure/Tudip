const candidates_model = require("../models/candidatedModel");

getCandidateds = async (req, res) => {
    let body = req.query;
    var perPage = 2, page = Math.max(0, req.query.page)

    try {
        let result = new candidates_model();
        result = await candidates_model.find({
            $or: [{ name: { $regex: body.search_text } },
            { email: { $regex: body.search_text } }]
        })
            .sort({ name: body.sortBy })
            .limit(perPage)
            .skip(perPage * page);
        if (result) {
            res.json({ success: true, response_data: result });
        } else {
            res.json({ success: false, response_data: result });
        }
    } catch (error) {
        res.json({ success: false, msg: error, response_data: error.errors })
    }
}

module.exports = {
    getCandidateds
}