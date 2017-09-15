function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");

    console.log(str == reversed);
}

isPalindrome('aba');