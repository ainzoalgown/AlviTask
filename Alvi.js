function isEven(value){
    if (value%2 == 0)
        return "четное";
    else
        return "нечетное" ;
    // task 2
    function makeSplit(str) {
        console.log(str.split(''))
        return str.split('')
    }

    makeSplit('GoodBye')
    // Task 3
    function splitWord(str) {
        console.log(str.split(' '))
        return str.split(' ')
    }
    splitWord('Hello Sult')
    // Task 4
    function strlength(str) {
        if (str.length > 20) {
            console.log("Слишком длинная")
        } else {
            console.log(`Количество символов  ${str.length}`)
        }
    }

    strLength('gsdgsghrhrhdrh');
    // Task 5
    function Price(price,sale) {
        console.log((price * (100 - sale)) / 100);
    }

    Price(100,10)
    // task 6
    function hours(hours) {
        console.log(`На вашей планете прошло ${hours} часа, на земле ${hours * 7} лет`)
    }

    passedHours(4)