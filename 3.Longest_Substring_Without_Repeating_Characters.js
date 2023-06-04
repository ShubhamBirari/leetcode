// 3. Longest Substring Without Repeating Characters
// Medium
// 34.3K
// 1.5K
// Companies
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let max=0
    let count=0
    let arr = []
    for(i of s){
        if(arr.includes(i)){
            arr = arr.slice(arr.indexOf(i) + 1, s.length)
            if(count > max)
                max=count
            count=arr.length
        }
        arr.push(i)
        count++

    }
    
    return count > max ? count : max
};
