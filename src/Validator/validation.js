//to validate body or req.body
const isValidreqbody = function (body) {
    return Object.keys(body).length > 0
  }

  //to validate values
const isValid= function(value){
    if (typeof value=== "undefined" || typeof value === "null") return false
    if (typeof value==="string" && value.trim().length===0) return false
    return true
}

//to validate name
const isValidName=(name)=>{
    if( /^[-a-zA-Z_:,.' ']{1,100}$/.test(name))
    return true
}

//to validate Fname
const isValidFName=(name)=>{ 
    if( /^[-a-zA-Z&-_:,.' ']{1,100}$/.test(name))
    return true
}

//to validate URL
const isValidUrl=(url)=>{
    if(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%\+.~#?&\/=]*)$/
    .test(url))
    return true
}

//to validate EMAIL
const isValidEmail=(mail)=>{
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail))
    return true
}

//to validate MOBILE
const isValidMobile=(mobile)=>{
    if(/^[0]?[6789]\d{9}$/.test(mobile))
    return true
}
module.exports={isValidreqbody,isValid, isValidName, isValidEmail, isValidMobile, isValidFName, isValidUrl}