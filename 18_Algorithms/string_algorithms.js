//write a function to  count the occurences of each charcter in a string. Log the character coounts.

function countCharacterOccurences(str){
    let charCount = {};
    for(let char of str){
        if( charCount[char]){
            charCount[char]++;
        }else{
            charCount[char] = 1;
        }
    }

    for( let char in charCount){
        console.log(`${char}: ${charCount[char]}`);
    }
}

let exampleStirng = "hello World";
countCharacterOccurences(exampleStirng);

//Write a function to find the longest sub string without repeating characters in a string. Log the length of the substing.

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    console.log(maxLength);
    return maxLength;
}


let egStr = "abcabcbb";
lengthOfLongestSubstring(egStr);

