// Directly as json object. The schema defines the expected structure of the response, including the types of each property and which properties are required.

import {test} from '@playwright/test';
test('Upload Payload', async({request})=> {
    const response = await request.post('/booking',{
        headers:{
            'Content-Type':'application/json'
        },
        data:{

            "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"

        }
})
console.log(await response.json())
})