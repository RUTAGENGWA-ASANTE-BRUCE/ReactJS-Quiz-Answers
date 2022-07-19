function candyBar(num: number): string | number {
    if (num % 22 === 0) return 'candybar';
    if (num % 2 === 0) return 'candy';
    if (num % 11 === 0) return 'bar';
    return num;
}
  
for (let i: number = 1; i <= 100; i++) console.log(candyBar(i));