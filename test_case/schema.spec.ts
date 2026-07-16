import {test, expect} from '@playwright/test';
import bookingSchema from '../test_case/schema/bookingSchema.json'
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

   

    const response = await request.post('/booking',{ 
        headers:{
            'Content-Type':'application/json'
        },
        data:BookingPayload
    });
    const responseBody = await response.json();
    //console.log(responseBody);
    const ajv = new Ajv();
    const validate = ajv.compile(bookingSchema);
    const isValid = validate(responseBody);
    console.log(isValid);
    expect(isValid).toBe(true);


});