var sets = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
   //variable array 1
    special: ['/', '%', '$', '#', '@', '^', '*', '(', ')'],
    //variable array 2
    lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    // variable array 3
    upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    tub: [],
    tubreset: function () { this.tub = [] }
}
//button information for buttom if-else function
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    function length() {
        var L = window.prompt("How long do you want your password to be? Choose a number between 8 and 120.")
        if (L > 8 && L < 120) {
            return L
        } else if (!L) {
            return
        }
        else {
            alert("More than 8... But less than 120... Try again.")
            return length();
        }
    }
    function getcriteria() {
        var checks = {
            up: function () { if (window.confirm("Do you want uppercase letters?")) { sets.tub.push(sets.upper) } },
            low: function () { if (window.confirm("Do you want lowercase letters?")) { sets.tub.push(sets.lower) } },
            num: function () { if (window.confirm("Do you want numbers in your password?")) { sets.tub.push(sets.numbers) } },
            sp: function () { if (window.confirm("Are we using special characters today?")) { sets.tub.push(sets.special) } },
            run: function () { this.up(); this.low(); this.num(); this.sp(); }
        }
// play nice message if data entered does not match critea ;)
        checks.run();
        if (sets.tub.length == 0) {
            alert("Play nice please. Make a choice ;)")
            getcriteria();
        }
    }
    // password length function
    function getPassword(leng) {
        var new_password = '';
        for (let i = 0; i < leng; i++) {
            rtype = Math.floor(Math.random() * sets.tub.length)
            rindex = Math.floor(Math.random() * sets.tub[rtype].length)
            new_password += sets.tub[rtype][rindex]
        }
        sets.tubreset();
        console.log(sets.tub)
        return new_password;
    }
    var pass_length = length();
    getcriteria();
    return getPassword(pass_length)
    //pasword length parameters
}
function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = generatePassword();
}
// event listener for button
generateBtn.addEventListener("click", writePassword);