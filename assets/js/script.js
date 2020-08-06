/* Author: 

*/

var arr =[12,14,16,18,20,26,27];
var sum = prompt("enter a no:")

for(i=0; i < arr.length; i++){
    var first = arr[i];
    // console.log(first);
    for(j=i+1;  j < arr.length; j++){
        var second = arr[j];
        // console.log(second);
        if(first+second == sum){
            console.log("pair is "+first+ " and "+second);
        }
        else{
            console.log("no pair")
        }
    }
}





















