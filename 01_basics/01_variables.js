const accountId = 144553
let accountEmail ="subash@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"

/*
prefer not to use var 
because of issue with block scope and function scope
*/

accountEmail = "jpt@gmail.com"
accountPassword = "20430"
accountCity = "Birtamode"

console.table([accountId, accountEmail, accountPassword, accountCity])
