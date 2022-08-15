const { System } = require('cafe-utility')

async function main() {
    console.log(await System.execAsync('git status'))
}

main()
