function ChangeWord(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1)
};

function enhancedChangeWord(word) {
    if (typeof word === 'string') {
        word = word.trim();
        if (word.split(" ").length < 2) { // если пришло 1 слово
            word = word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1)
        } else {
            return console.log('Аргумент должен быть строкой c одним словом')
        }
    } else {
        return console.log('Аргумент должен быть строкой')
    }
};

enhancedChangeWord('  TeStING ');
ChangeWord('BanANa');