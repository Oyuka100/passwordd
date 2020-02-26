
//alert;
//var howMany = prompt ("How many characters would like your password to contain?");
//var abc = confirm ("Click ok if you want to include characters");
//var special = confirm ("Click ok if you want to include special characters");
//var numeric = confirm ("Click ok if you want to include numeric");
//var lowerCase = confirm ("Click ok if you want to include lowercase");
//var upperCase = confirm ("Click ok if you want to include uppercase");

function oyukasPassword () {
    var password = "";
    var passwordkeys = "";
    
    do{
    var charCount = prompt("How many characters would you like to include?",);
    
    if (charCount<8){
        alert("it is too small");}
        else if(charCount>128){
            alert("it is too big");
        }
    }
        while(charCount<8 || charCount>128)
                console.log(charCount);
                

        
        
    

    var specialChar = confirm("Click ok if you want to include special character?");
    if(specialChar == true){
        passwordkeys += "!@#$%^&*()_+";
        

    }

    var number = confirm("Click ok if you want to include numbers?");

    if(number == true){
        passwordkeys += "1234567890";
        

    }
    var lowerCase = confirm("Click ok if you want to include lowercase?");

    if(lowerCase == true){
        passwordkeys += "qwertyuiopasdfghjklzxcvbnm";
        

    }
    var upperCase = confirm("Click ok if you want to include uppercase?");

    if(upperCase == true){
        passwordkeys += "QWERTYUIOPASDFGHJKLZXCVBNM";
        
        

    }

    var i;
    for (i=0; i<charCount; i++){
        password+=passwordkeys.charAt(Math.floor(Math.random() * passwordkeys.length) );


    }

    document.getElementById("generatePassword").innerHTML=password;








}