// from json file using read file from fs/promises
import { test } from '@playwright/test'
import { Booking } from '../Models/Bookingpayload'
import { readFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

test('read json file', async ({ request }) => {
    const payloadPath = join(__dirname, '../payload/bookingpayload.json')
    const fileContents = await readFile(payloadPath, 'utf-8')
    const payload: Booking = JSON.parse(fileContents)

    const response = await request.post('https://restful-booker.herokuapp.com/booking',{
    headers:{
        'Content-Types':'application/json'
    },
        data: payload
    })

    return response
})

