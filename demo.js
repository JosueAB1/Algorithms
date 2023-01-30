function compare(S_1, S_2){

    //In this part, the code compares the length of both words to know if they have the same number of letters.
    if (S_1.length !== S_2.length){
        console.log('Is not an anagram');
        return
    }

    //Now, both words change to lowerCase, split it in letters, sort it and join again in new variables: str1 and str2.
    let str1 = S_1.toLowerCase().split('').sort().join('');
    let str2 = S_2.toLowerCase().split('').sort().join('');

    /*Finally, the program compares if "str1" and "str2" are the same, in that case both words are anagrams and in console
     prints: "True". On the contrary, it shows: "False". */
    if (str1 === str2){
        console.log("True");
    } else {
        console.log("False");
    }
}

compare("Listen","Silent")