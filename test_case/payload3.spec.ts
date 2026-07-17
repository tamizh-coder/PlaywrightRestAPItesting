//from json file from import
import { request, test } from "@playwright/test";

test('jsonfile  import', async ({request})=>{

    const response = await request.post('/booking');
    headers:{
        'Content-Types';'applications/json'
    },
    data:{
        
    }


})