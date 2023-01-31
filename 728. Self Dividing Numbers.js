/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const arr=[];
for(let i=left;i<=right;i++){
    let j=i;
    while(j){
        if((i)%(j%10)!==0||(j%10)===0){
           break;
        }
        j=Math.floor(j/10)
       if(j===0)
        arr.push(i);
    }
   
}
return arr
};

//one line
selfDividingNumbers=(l,r)=>{a=[];for(i=l;i<=r;i++){x=i;while(x){if((i)%(x%10)!==0||(x%10)===0){break;}x=Math.floor(x/10);if(x===0)a.push(i);}}return a}