/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineList = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        magazineList[magazine.charCodeAt(i) - 97]++;        
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineList[ransomNote.charCodeAt(i) - 97] === 0) return false;
        magazineList[ransomNote.charCodeAt(i) - 97]--;
    }
    return true;
};