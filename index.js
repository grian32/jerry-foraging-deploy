let foragingXpPerBox = {
    "green": 330.5,
    "blue": 661,
    "purple": 2586,
    "gold": 1610,
}

let levels = { "0": 0 }

async function calculate() {
    let res = await fetch("./levels.txt")

    let str = await res.text()

    let arrs = str.split("\n").filter((i) => i != "{{!}}-" && i != "{{!}}}" && i != "}}").map((i) => i.split("{{!}}{{!}}"))

    for (let i of arrs) {
        let lvl = i[0].trim().split(" ")[1]
        let xp = parseInt(i[2].trim().replaceAll(",", ""))

        levels[lvl] = xp
    }


    let startLevel = parseInt(document.getElementById("currentlvl").value)
    let endLevel = parseInt(document.getElementById("endlvl").value)
    let xpNeeded = document.getElementById("xpneeded")

    let xpNeededValue = levels[endLevel] - levels[startLevel]

    xpNeeded.innerText = `XP Needed: ${numeral(xpNeededValue).format("0,0")}`

    let bazaar = await (await fetch("https://api.hypixel.net/skyblock/bazaar?key=f39218e7-863e-42cf-bca6-09811b539ed3")).json()

    let greenBoxes = document.getElementById("greenb")
    let blueBoxes = document.getElementById("blueb")
    let purpleBoxes = document.getElementById("purpleb")
    let goldBoxes = document.getElementById("goldb")

    let greenBoxAmount = Math.ceil(xpNeededValue / foragingXpPerBox["green"])
    let greenPricePer = parseInt(bazaar["products"]["JERRY_BOX_GREEN"]["sell_summary"][0]["pricePerUnit"]) + 0.1
    greenBoxes.innerText = `Green Jerry Boxes: ${numeral(Math.ceil(greenPricePer * greenBoxAmount)).format("0,0")} Coins (${numeral(greenBoxAmount).format("0,0")} boxes)`

    let blueBoxAmount = Math.ceil(xpNeededValue / foragingXpPerBox["blue"])
    let bluePricePer = parseInt(bazaar["products"]["JERRY_BOX_BLUE"]["sell_summary"][0]["pricePerUnit"]) + 0.1
    blueBoxes.innerText = `Blue Jerry Boxes: ${numeral(Math.ceil(bluePricePer * blueBoxAmount)).format("0,0")} Coins (${numeral(blueBoxAmount).format("0,0")} boxes)`

    let purpleBoxAmount = Math.ceil(xpNeededValue / foragingXpPerBox["purple"])
    let purplePricePer = parseInt(bazaar["products"]["JERRY_BOX_PURPLE"]["sell_summary"][0]["pricePerUnit"]) + 0.1
    purpleBoxes.innerText = `Purple Jerry Boxes: ${numeral(Math.ceil(purplePricePer * purpleBoxAmount)).format("0,0")} Coins (${numeral(purpleBoxAmount).format("0,0")} boxes)`

    let goldBoxAmount = Math.ceil(xpNeededValue / foragingXpPerBox["gold"])
    let goldPricePer = parseInt(bazaar["products"]["JERRY_BOX_GOLDEN"]["sell_summary"][0]["pricePerUnit"]) + 0.1
    goldBoxes.innerText = `Golden Jerry Boxes: ${numeral(Math.ceil(goldPricePer * goldBoxAmount)).format("0,0")} Coins (${numeral(goldBoxAmount).format("0,0")} boxes)`
}