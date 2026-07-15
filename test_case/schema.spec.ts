import {test, expect} from '@playwright/test';
import Ajv from 'ajv';  
import { validateAdditionalItems } from 'ajv/dist/vocabularies/applicator/additionalItems';

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

    const bookingshcema = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "properties": {
            "bookingid": { "type": "integer" },
            "booking": {
                "type": "object",
                "properties": {
                    "firstname": { "type": "string" },
                    "lastname": { "type": "string" },
                    "totalprice": { "type": "integer" },
                    "depositpaid": { "type": "boolean" },
                    "bookingdates": {
                        "type": "object",
                        "properties": {
                            "checkin": { "type": "string" },
                            "checkout": { "type": "string" }
                        },
                        "required": ["checkin", "checkout"]
                    },
                    "additionalneeds": { "type": "string" }
                },
                "required": ["firstname", "lastname", "totalprice", "depositpaid", "bookingdates", "additionalneeds"]
            }
        },
        "required": ["bookingid", "booking"]
    };

    const response = await request.post('/booking',{ 
        headers:{
            'Content-Type':'application/json'
        },
        data:BookingPayload
    });
    const responseBody = await response.json();
    //console.log(responseBody);
    const ajv = new Ajv();
    const validate = ajv.compile(bookingshcema);
    const isValid = validate(responseBody);
    console.log(isValid);


});