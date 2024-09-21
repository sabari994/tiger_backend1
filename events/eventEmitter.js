const EventEmitter = require('events');
const eventemitter = new EventEmitter();

eventemitter.on('usercreated',(user) =>{
    console.log("user created",user.username);
    
})


module.exports = eventemitter