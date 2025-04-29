// Bring you an string aaaabbbiiaaa
// how much is repeted every single character and retun an array with the key[Character] and value[Number of times that character is repeated]
// Example: aaaabbbiiaaa
// Output: { a: 6, b: 3, i: 2 }


function runLengthEncoding(str) {
    const result = [];
    let count = 1;
    for (let i= 0; i<str.length; i++)
    {
        if(str[i] === str[i+1])
        {
            count++;
        }
        else
        {
            result.push([str[i],count])
            count = 1;
        }
    }
    return result;
}

// Ejemplo de uso
console.log(runLengthEncoding("aaaabbbiiaaa"));
// Resultado: [ [ 'a', 4 ], [ 'b', 3 ], [ 'i', 2 ], [ 'a', 3 ] ]

////////////////////////////////////////////////////////////////////////////////////////////////////////
function runLengthEncoding(input) {
    const result = [];
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) 
        {
            count++;
        } 
        else 
        {
            result.push(input[i] + count); // concatenas letra y cantidad
            count = 1;
        }
    }

    return result.join('');
}

// Ejemplo
console.log(runLengthEncoding("aaaabbbiiaaa")); 
//  Resultado: "a4b3i2a3"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function runLengthEncoding(str) {
    const result = {};
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) 
        {
            count++;
        } 
        else 
        {
            result[str[i]] = count;
            count = 1;
        }
    }

    return result;
}

// Use Example
console.log(runLengthEncoding("aaaabbbiiaaa"));
// Output: { a: 6, b: 3, i: 2 }

