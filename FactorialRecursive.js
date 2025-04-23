function Factorial (n) 
{
    if (n === 0 || n === 1) 
    {
        return 1;
    }
    return n * Factorial(n - 1);
}

console.log(Factorial(5)); // Output: 120
console.log(Factorial(0)); // Output: 1
console.log(Factorial(1)); // Output: 1