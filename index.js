let foragingXpPerBox = {
    "green": 330.5,
    "blue": 661,
    "purple": 2586,
    "gold": 1610,
}

let levels = { 0: 0 }

let str = await (await fetch("/levels.txt")).text()

console.log(levels)
console.log(str.split("\n").map(() => split("	")))