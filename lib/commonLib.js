
class commonLib 
{
    
    validateParamsNonEmpty (params, requiredParams) {

        var result = {"status":"success", "errorCode":{}, "errorDetail":{}};

        for (var i = 0; i < requiredParams.length; i ++){
            var key = requiredParams [i];
            var value = params [key];
            var keySuccess = {};
            keySuccess = this.validateParamIsSet (key,  value);

            if (keySuccess.status == "failure"){
                result.status = "failure";
                result["errorDetail"][key] = {"errorDetail":keySuccess.errorDetail};
                result["errorCode"][key] = {"errorCode":keySuccess.errorCode};
            }
        }

        return result;

    }

    validateParamIsSet (name, value) {
        var message = { "status" : "success" };

        var result = true;
        if (typeof value == 'undefined') {
            result = false;
        }else if (typeof value == 'string' && value == '') {
            result = false;
        }else if (typeof value == 'object' && value == null){
            result = false;
        }
        if (!result) {
            message = { "status": "failure", "errorCode": "MISSING_PARAMETER", "errorDetail": "This parameter is required: " + name };
        }		
        return message;
    }

}

module.exports = new commonLib;