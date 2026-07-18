//from json file from import
import { request, test } from "@playwright/test";
import booking from '../Payload/bookingpayload.json';

test('jsonfile  import', async ({request})=>{

    const bookingpayload = structuredClone(booking)

    bookingpayload.firstname='varunn'

    const response = await request.post('/booking',{
    headers:{
        'Content-Types':'application/json'
    },
    data:bookingpayload
})
console.log(await response.json())
});

// to avoid cacheing instead of directly import we can colne it
test('jsonfile  import 2', async ({request})=>{

    const bookingpayload = structuredClone(booking)

    const response = await request.post('/booking',{
    headers:{
        'Content-Types':'application/json'
    },
    data:bookingpayload
})
console.log(await response.json())


});