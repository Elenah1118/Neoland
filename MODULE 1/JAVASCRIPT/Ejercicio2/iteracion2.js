const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    param.forEach(function(word) {
        console.log(`La palabra "${word}" tiene ${word.length} letras.`);
    });
}

findLongestWord(avengers);

