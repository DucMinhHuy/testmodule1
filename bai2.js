let arr=[1,2,3,4,5,6]
let index =+prompt("enter");
let x =+prompt("enter");
function insertNumberToArray(arr,x,index){
    for(let i=0;i<=arr.length;i++){
        if(i==index){
            for(let j=arr.length;j>=i;j--){
                arr[j+1]=arr[j];
            }
            arr[i]=x;
        }
    }
    return arr;
}
let result=insertNumberToArray(arr,x,index);
document.write(result);