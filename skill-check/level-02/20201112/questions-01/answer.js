function solution(n,a,b)
{
    var answer = 3;

    let round = 0

    while (true) {
        round++

        if(Math.abs(a-b) === 1) break

        a = Math.round(a/2)
        b = Math.round(b/2)
    } 
    answer = round
    return answer;
}


let rtn = solution(1048576, 6490, 1)
console.log(rtn)