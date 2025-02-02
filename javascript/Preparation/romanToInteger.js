let s = "LVIII"

const myFunction=(s)=>{
    let sum=0
    for(let i=0; i<s.length; i++){
        let pre=s[i-1]
        switch(s[i]){
            case "I":sum+=1
            break
            case "V":pre=="I"?sum+=3:sum+=5
            break
            case "X":pre=="I"?sum+=8:sum+=10
            break
            case "L":pre=="X"?sum+=30:sum+=50
            break
            case "C":pre=="X"?sum+=80:sum+=100
            break
            case "D":pre=="C"?sum+=300:sum+=500
            break
            case "M":pre=="C"?sum+=800:sum+=1000
            break
        }
        }
        return sum
}
console.log(myFunction(s))