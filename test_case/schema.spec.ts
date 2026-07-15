import {test, expect} from '@playwright/test';

test('Api schema validation', async({request})=> {
const BookingPayload ={
    "firstname" : "raj",
    "lastname" : "mohan",
    "totalprice" : 115,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

    const response = await request.post('/booking',{
        headers:{
            'conternt-type':'application/json'
        },
        data:BookingPayload
    });
    const responseBody = await response.json();
    console.log(responseBody);
});