const accountId=144553
let accountEmail="harshitgupta8839@gmail.com"
var accountPassword=12345
accountCity="Jaipur"

//accountId =2 not allowed we cannot change constant value
accountEmail="hg@gmail.com"
accountPassword=56789
accountCity="Shajapur"
let accountState

/* prefer not to use var because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])