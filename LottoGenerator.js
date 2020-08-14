// Lotto random number generator - enter number of lines wanted, will return a list of lines with 6 digits and no repeats.

let lottoLinesRaw = (numLines) => {
    let finalArr = []
    for (let line = 0; line < numLines; line++) {
        let arr = []
        while (arr.length < 6) {
            let num = Math.floor(Math.random() * 40) + 1
            if (arr.indexOf(num) == -1) {
                arr.push(num)
            }
        }
        finalArr.push(arr)
    }
    return finalArr
}


// How many lines do you want?
let lines = lottoLinesRaw(10)


for (let line in lines) {
    console.log(`${(parseInt(line)+1)}: ${lines[line]}`)
}



