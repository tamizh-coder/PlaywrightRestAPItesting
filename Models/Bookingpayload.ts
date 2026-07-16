export class BookingDate{
    


    constructor (public checkin:string,public checkout:string){

    }



}


export class Booking{


    constructor( public firstname : string,
       public lastname : string,
       public totalprice : number,
       public depositpaid : boolean,
       public bookingdates: BookingDate,
       public additionalneeds : string){
           
        }
}  