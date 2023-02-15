const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./CONTENT/first.txt', 'utf8', (err, result) =>{
    if  (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }   
        const second =result
        writeFile(
            './content/result-async.txt',
            `here is the result : ${first}, ${second}`, 
            (err, result) =>{
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done whit this shit')
            }
        )
    })
})
console.log('starting the next shit')
