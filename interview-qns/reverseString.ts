//SDET Interview: Reverse String in TypeScript (Easy → Advanced)
// Level 1: Reverse a String

// function reverseString(str:string):string{
//     let result:string="";
//     for (let i=str.length-1;i>=0; i--){
//         result+=str[i];
//     }
//     //return str.split("String").reverse().join("");
//     return result;
// }
// console.log(reverseString("moh an"))


//Level 2: Ignore Spaces While Reversing
// function reversewithoutspace(str:string):string {
//     let result=""
//     for(let i=str.length-1; i>=0;i--)
//     {
//         if(str[i] !==" ")
//             {
//             result +=str[i];
//             }
//     }
//     return result;

// }
// console.log(reversewithoutspace("Mohan  raj script"))

//Level 3: Reverse Each Word
function reverseeachword(sentence:string):string
{
    const words = sentence.split(" ");
    let result: string[]=[];
    for (const word of words){
        let reversed=" ";
        for (let i =word.length-1; i>=0; i--)
            {
                reversed +=word[i];

            }
            result.push(reversed);
        
    }
    return result.join(' ');
}
console.log(reverseeachword("Hi Helo work"))