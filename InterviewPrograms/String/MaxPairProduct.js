var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function MaxPairWiseProduct(a){
  
   var b = a.split(" ");
   var c = b.map(Number);
   biggest = -Infinity,
   next_biggest = -Infinity;
   
   for (var i = 0, n = c.length; i < n; ++i) {
    var nr = +c[i]; // convert to number first

    if (nr > biggest) {
        next_biggest = biggest; // save previous biggest value
        biggest = nr;
    } else if (nr > next_biggest) {
        next_biggest = nr; // new second biggest value
    }
}

    console.log(next_biggest*biggest);
}

rl.question('',(x)=>{
   
      rl.question('',(a)=>{
        MaxPairWiseProduct(a);
        rl.close();
      })
       
})


///finding the largest number - 
function processData(myArray) {
    var biggest = myArray[0];
    var secbiggest=0;
    for(var i =0 ;i<myArray.length;i++){
       
       if(biggest<myArray[i+1]){
           biggest = myArray[i+1];
           i++;
           while(biggest<myArray[i+1]){
               biggest =myArray[i+1];
               i++;
           }
       }
        
    }
    console.log(biggest);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});

////finding the second largest number 