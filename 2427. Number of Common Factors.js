/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(num, n2) {
    const ar=[],a2=[];
    for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        ar.push(i);
    }
}

for(let i = 1; i <= n2; i++) {

    // check if number is a factor
    if(n2 % i == 0) {
        a2.push(i);
    }
}

const filteredArray = ar.filter(value => a2.includes(value));
return filteredArray.length
};



commonFactors=(a,b)=>{c=[],d=[];for(i=1;i<=a;i++){if(a%i==0){c.push(i);}}for(i=1;i<=b;i++){if(b%i==0){d.push(i);}}f=c.filter(v=>d.includes(v));return f.length}
    
    
