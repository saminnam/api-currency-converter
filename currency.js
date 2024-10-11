let select = document.querySelectorAll('.currency')
let input = document.getElementById('input')
let result = document.getElementById('result')
let btn = document.getElementById('btn')


fetch('https://api.frankfurter.app/currencies')

//This processes the response from the API and converts it to a JSON object.
.then(res=> (res.json()))
// This passes the JSON object to the displayDropDown function to populate the dropdown menus.
.then(res=>displayDropDown(res))

function displayDropDown(res){
    // console.log(Object.entries(res)[0][0])
     
//adding the dropdown by using template literal
// Object.entries(res): Converts the JSON object into an array of key-value pairs. Each key is a currency code, and each value is the currency name.


    let curr = Object.entries(res)
    for(let i = 0; i <curr.length; i++){
        let opt = ` <option value="${curr[i][0]}">${curr[i][0]}</option>`
        // console.log(opt);
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }
}

btn.addEventListener('click',()=>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value

    if(curr1 === curr2){
        alert('Kindly choose different currencies')
    }else{
        convert(curr1,curr2,inputVal)
    }
})

// https://www.frankfurter.app/ we took a conversion script from this link

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
    // alert(`10 GBP = ${data.rates.USD} USD`);
    // console.log(Object.values(data.rates)[0])
    document.getElementById('result').value = Object.values(data.rates)[0]
  });
}