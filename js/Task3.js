function filterFunc(arr, length) {
    const result = arr.filter(phrase => phrase.length <= length);
    console.log(result);
    return result;
}

filterFunc(['I love JS', 'some very long string', 'hell'], 9);
filterFunc(['a', 'asd', 'abcde'], 2);