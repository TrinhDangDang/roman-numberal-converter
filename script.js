const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');


const convertToRoman = numberToConvert => {
    const reference = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const romanNumber = [];
    reference.forEach(function(eachArrayInsideReferenceArray) {
        while (numberToConvert > eachArrayInsideReferenceArray[1]){
            romanNumber.push(eachArrayInsideReferenceArray[0]); //push method add new item to the end of the array
            numberToConvert -= eachArrayInsideReferenceArray[0]; 
        }
    });
    return romanNumber.join('');
};


const isValid = (str, int) => {
    let errorText = '';
    
    if(!str || str.match(/[e.]/g)) { /*seems like e is a number but this number is not allowed in the input just like 1 - 10*/
        errorText ='Please enter a valid number.';
    } else if (int < 1) {
        errorText = 'Please enter a number greater than or equal to 1.'
    } else if (int > 3999){
        errorText = 'Please enter a number less than or equal to 3999.'
    } else {
        return true;
    }
    output.innerText = errorText;
    output.classList.add('alert'); /*add alert class to output div for css styling*/
    return false;
}


const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert')
};
form.addEventListener('submit', e => {
    e.preventDefault();
    updateInterface();
});

convertButton.addEventListener('click', () => {
    updateInterface();
});

const updateInterface = () => {
    const inputString = document.getElementById('number').value;
    const inputInt = parseInt(inputString, 10); 
    output.classList.remove("hidden");
    clearOutput();

    if(isValid(inputString, inputInt)) {
        output.innerText = convertToRoman(inputInt);
    }
    
} 
