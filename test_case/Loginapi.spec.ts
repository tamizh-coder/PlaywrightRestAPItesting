import { expect, test } from '@playwright/test';

// test('Create Token', async ({ request }) => {
// const response = await request.post('https://restful-booker.herokuapp.com/auth', {
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     data: {
//         username: 'admin',
//         password: 'password123'
//     }
// })
// const responseBody = await response.json();
// console.log(responseBody.token);
// })

// test('Create Booking', async ({ request }) => {
// const response = await request.post('https://restful-booker.herokuapp.com/booking', {
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     data: {
//         "firstname" : "Mohanraj",
//         "lastname" : "Mano",
//         "totalprice" : 111,
//         "depositpaid" : true,
//         "bookingdates" : {
//             "checkin" : "2018-01-01",
//             "checkout" : "2019-01-01"
//         },
//         "additionalneeds" : "Breakfast"
//     }
// })
// const responseBody = await response.json();
// console.log(responseBody);
//})

test('Get Booking', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/10523');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
});