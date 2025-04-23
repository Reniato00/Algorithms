// You have an array with any number of elements , Example [1,6,4,9]
// and a target that is the sum of two values of the array , Example 15
// return a value of the indices of the two values that add up to the target, Example [1,3]

const array = [1,6,4,9];
const target = 15;

function findIndices(array, target) 
{
    const saved  = {};

    for (let i = 0; i < array.length; i++) 
    {
        const current = array[i];

        const difference = target - current;

        if (saved[difference] !== undefined) 
        {
            return [saved[difference], i];
        }
        saved[current] = i;
    }

    return []
}

console.log(findIndices(array, target)); 
/////////////////////////////////////////////////////////////////////////////////////
function SearchIndices(array, target)
{
    const saved = {}; // Remember that Hasmap is a Dictionary object in JS

    array.forEach((element,index) => {
        const currentValue = element;
        const difference = target - currentValue;

        if(saved[difference] !== undefined) // thats mean that will be search the difference in the dictionary
        {
            return [saved[difference], index]; //Thats return will be invoked when the difference is found in the Hasmap object 
        }

        saved[currentValue] = index; // If dont find any, will add the current value like KEY and the index like VALUE
        //Example {1:0, 6:1, 4:2, 9:3}
    });

    return [];
}

console.log(SearchIndices(array, target));