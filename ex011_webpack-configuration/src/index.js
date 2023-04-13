function sumNumbers() {
    let n1 = 3;
    let n2 = 4;
    let result =  `${n1} + ${n2} = ${n1 + n2}`;
    document.getElementById('result').innerHTML = result;
}

document.querySelector('button').addEventListener('click', sumNumbers);