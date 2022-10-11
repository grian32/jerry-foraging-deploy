(async () => {
let foragingXpPerBox = {
    "green": 330.5,
    "blue": 661,
    "purple": 2586,
    "gold": 1610,
}

let levels = { "0": 0 }

let res = await fetch("/levels.txt")

let str = await res.text()

let arrs = str.split("\n").filter((i) => i != "{{!}}-" && i != "{{!}}}" && i != "}}").map((i) => i.split("{{!}}{{!}}"))

for (let i of arrs) {
    let lvl = i[0].trim().split(" ")[1]
    let xp = parseInt(i[2].trim().replaceAll(",", ""))

    levels[lvl] = xp
}

console.log(levels)


})()