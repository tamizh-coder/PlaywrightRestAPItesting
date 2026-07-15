import {test} from '@playwright/test';

test('Create Token', async ({ request }) => {
const response = await request.post('https://restful-booker.herokuapp.com/auth', {
    headers: {
        'Content-Type': 'application/json'
    },
    data: {
        username: 'admin',
        password: 'password123'
    }
})
const responseBody = await response.json();
console.log(responseBody.token);



})