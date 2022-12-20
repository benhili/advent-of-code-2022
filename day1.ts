async function formatInput(fileName: string): Promise<Array<number>> {
  const file = await Deno.readTextFile(fileName);
  return file.toString()
    .split("\n\n")
    .map((calorieStr: string) => calorieStr.split("\n").map(Number))
    .map((elf: Array<number>) => elf.reduce((sum, curr) => sum + curr))
}

const calorieSums = await formatInput("./day1.txt")

console.log("Part 1: ")
console.log(Math.max(...calorieSums))

console.log("Part 2: ")
console.log(calorieSums.sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, curr) => acc + curr))
