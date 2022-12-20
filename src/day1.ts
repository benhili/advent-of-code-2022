async function formatInput(fileName: string): Promise<Array<number>> {
  const file = await Deno.readTextFile(fileName);
  return file.toString()
    .split("\n\n")
    .map((calorieStr: string) => calorieStr.split("\n").map(Number))
    .map((elf: Array<number>) => elf.reduce((sum, curr) => sum + curr))
}

function threeLargest(arr: Array<number>): Array<number> {
  return arr.sort((a, b) => b - a).slice(0, 3)
}

const calorieSums = await formatInput("./inputs/day1.txt")

console.log("Part 1: ")
console.log(Math.max(...calorieSums))

console.log("Part 2: ")
console.log(threeLargest(calorieSums).reduce((acc, curr) => acc + curr))