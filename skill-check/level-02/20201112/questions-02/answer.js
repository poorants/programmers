function solution(m, musicinfos) {
    var answer = '';
    const targetList = musicinfos.filter( items => {
        const item = items.split(",")
        const startTime = new Date(`'2020/11/12 ${item[0]}:00`).getTime()
        const endTime  = new Date(`'2020/11/12 ${item[1]}:00`).getTime()
        const playTime = (endTime - startTime ) / (60 * 1000)
        
        
        
        
    })

    console.log(console.log(targetList))
    return answer;
}


let musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]
let rtn = solution("ABCDEFG", musicinfos)
console.log(rtn)
