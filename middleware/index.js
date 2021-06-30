module.exports = {

    idFormat: (req, res, next) => {
        const ObjectId = require('mongoose').Types.ObjectId;

        ObjectId.isValid(req.params.id)? next() : res.redirect(req.baseUrl);
    }

}