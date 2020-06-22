let service = require('../services/NotificationService');
let commonLib = require('../lib/commonLib');
const logger = require('../lib/Logger').init();

class NotificationController 
{
    constructor() {}

    push(req, res)
    {

        logger.info('push request');
        logger.info(req.body);

        var requiredParams = ["to", "data"];
        var validation = commonLib.validateParamsNonEmpty(req.body, requiredParams);
        if(validation.status != "success")
        {
            logger.error('Invalid request data');
            logger.error(validation);
            return res.status(200).json(validation);
        }

        service.push(req.body).then(response => 
        {
            return res.status(200).json(response); 
        })
        .catch(err => 
        {
            throw err;
        })
    }

}

module.exports = new NotificationController;