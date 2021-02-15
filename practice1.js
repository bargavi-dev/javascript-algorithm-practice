randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'rat', 'lion', 'parrot']

function fourLettersOrMore(array) {
    newList = []

    for (let index = 0; index < array.length; index++) {
        const word = array[index];
        if (word.length >=4) {
            newList.push(word)
        } else {
            return array
        }
        
        
    }
    return newList
}
console.log(fourLettersOrMore(randomStrings))

