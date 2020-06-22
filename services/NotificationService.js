const logger = require('../lib/Logger').init();
const axios = require('axios')

class NotificationService 
{
    
    constructor() 
    {
        this.fcm_url = "https://fcm.googleapis.com/fcm/send";
        this.fcm_server_key = "AIzaSyCXnQHbJTwCTLslhHZevRRMRuANXIgTeK4";
    }

    push(data, res) 
    {
        var scope = this;

        return new Promise((resolve, reject) => 
        {
            const headers = {
              'Content-Type': 'application/json',
              'Authorization': 'key=' + this.fcm_server_key
            }
            
            axios.post(this.fcm_url, data, 
            {
                headers: headers
            })
            .then((res) => 
            {
              console.log(`statusCode: ${res.statusCode}`);
              console.log(res.data);
              resolve({status : "success"});
            })
            .catch((error) => 
            {
              console.error(error);
              resolve({status : "failure"});
            })

        });
    }

}


module.exports = new NotificationService;