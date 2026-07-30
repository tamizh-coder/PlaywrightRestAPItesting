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
// function reverseeachword(sentence:string):string
// {
//     const words = sentence.split(" ");
//     let result: string[]=[];
//     for (const word of words){
//         let reversed=" ";
//         for (let i =word.length-1; i>=0; i--)
//             {
//                 reversed +=word[i];

//             }
//             result.push(reversed);
        
//     }
//     return result.join(' ');
// }
// console.log(reverseeachword("Hi Helo work"))

// 4: Reverse Only Letters
// Example
// Input:
// a-bC-dEf-ghIj

// Output:
// j-Ih-gfE-dCba
// Solution
// function reverseOnlyLetters(str: string): string {
//     let arr = str.split("");

//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {

//         while (left < right && !/[a-zA-Z]/.test(arr[left])) {
//             left++;
//         }

//         while (left < right && !/[a-zA-Z]/.test(arr[right])) {
//             right--;
//         }

//         [arr[left], arr[right]] = [arr[right], arr[left]];

//         left++;
//         right--;
//     }

//     return arr.join("");
// }

// console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));

// Level 6: Reverse Using Recursion
function reverseString(str: string): string {

    if (str.length <= 1)
        return str;

    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));