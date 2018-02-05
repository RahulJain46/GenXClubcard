
let ReverseString = (Str)=>{
    let copystr ='';   
    ///Foreach is always on array and get one by one value.  
    // Str.split("").forEach((element)=> {
    //     copystr+=element;
    // });
    // for(element of Str){
    //     console.log(element);
    // }
    ///push method is on array 
    // for (let i=Str.length-1;i>0;i--){
    //          copystr.push( Str[i]);
             
    // }

    // 1. method 
    // string.split('').reverse().join('');
    //2 . using for loop with decrementation 
    //3. recuresive
   for(let i = Str.length-1;i>=0;i--){
    copystr+=Str[i];
   }

console.log(copystr);
         
}

ReverseString("Rahul");
    