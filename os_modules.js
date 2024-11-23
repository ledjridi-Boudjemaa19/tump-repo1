const os =require("os")
//info about current user
const user =os.userInfo()
console.log(user)

//method returns the systems uptimes in seconds 
console.log(`the system uptime is ${os.uptime()} seconds `)

const CurrentOS = {
    NAME  :      os.type(),
    RELEASE :    os.release(),
    TOTALMEMORY :os.totalmem(),
    FREEMEMERY  :os.freemem()
}
console.log(CurrentOS);




