/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineObj = {};
    magazine.split('').forEach(character => {
        if (magazineObj[character]) {
            magazineObj[character] += 1;
        } else {
            magazineObj[character] = 1;
        }
    });
    
    const ransomList = ransomNote.split('');
    for (let i = 0; i < ransomList.length; i++) {
        if (!magazineObj[ransomList[i]]) return false;
        magazineObj[ransomList[i]]--;
    }
    
    return true;
};