function isValidEmail(email){

    if(email.includes("@gmail.com")){

        return true
    }else{
        return false
    }
}

console.log(isValidEmail("jafarhussein251@gmai.com"));