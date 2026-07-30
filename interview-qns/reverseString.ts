function reverseString(str:string):string{
    let result:string="";
    for (let i=str.length-1;i>=0; i--){
        result+=str[i];
    }
    //return str.split("String").reverse().join("");
    return result;
}
console.log(reverseString("mohan"))