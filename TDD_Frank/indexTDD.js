function doubleArray(array){
    const result = array.map(function(x){
        return x*2
    })
    return result
}

module.exports={
    doubleArray
}