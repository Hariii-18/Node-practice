function Sub(a,b){
    console.log(a - b)
}
Sub(10,5)

function mul(c,d){
    console.log(c * d)
}
mul(2,2)

// module.exports = {
//     Sub, mul
// }

export {Sub,mul};

const obj = {
    name : "Hari",
    age : '21'
}
export default obj;