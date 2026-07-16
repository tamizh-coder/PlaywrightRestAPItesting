// hard code json object

import {test} from '@playwright/test';
test ('Upload Payload', async({request})=> {
    const Bookingpaylod =
    {   "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : 
        {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }

const response = await request.post('/booking',{
    headers:{
        'Content-Types': 'application/json'
    },
    data: Bookingpaylod



})
console.log('Status:', response.status())
console.log(await response.json())

})