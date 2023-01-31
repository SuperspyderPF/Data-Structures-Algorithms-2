const isSameAfterReversals = z => {
    const y = parseFloat(z.toString().split('').reverse().join(''))*Math.sign(z),
    x = parseFloat(y.toString().split('').reverse().join(''))*Math.sign(y);
    if(x===z){
        return true;
    }
    return false;
}

isSameAfterReversals=z=>{y=parseFloat(z.toString().split('').reverse().join(''))*Math.sign(z),x=parseFloat(y.toString().split('').reverse().join(''))*Math.sign(y);if(x===z){return true;}return false;}