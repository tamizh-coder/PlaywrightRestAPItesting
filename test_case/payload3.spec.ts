//from json file from import
import { request, test } from "@playwright/test";
import booking from '../Payload/bookingpayload.json';

test('jsonfile  import', async ({request})=>{

    const response = await request.post('/booking',{
    headers:{
        'Content-Types':'application/json'
    },
    data:booking
})
console.log(await response.json())


});