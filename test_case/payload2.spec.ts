//payload injection using class instance

import { request, test } from '@playwright/test';
import { BookingDate, Booking } from '../Models/Bookingpayload'

test('upload payload', async ({request})=>{

    const bookingDate=new BookingDate("2026-01-01","2026-02-01")
    const booking = new Booking("Mohan","raj",256,true,BookingDate,"Lunch")

    const response = await request.post('/Booking',{
        headers:{
            "Content-Types":"application/json"
        },
        data:booking

    })
})