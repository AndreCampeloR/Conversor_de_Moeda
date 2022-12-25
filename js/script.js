// API
const getCurrency = async () => {
    const url = 'https://economia.awesomeapi.com.br/json/last/EUR-BRL,USD-BRL,JPY-BRL,RUB-BRL,BTC-BRL';


    const apiData = await fetch(url);
	const Dados = await apiData.json();

    const quotation = Dados

    var btcQuotation = quotation.BTCBRL.high * 1000   //API doesnt return correct value ----- API não retorna valor correto

    // element ----- elementos 
const inputReal = document.getElementById('input-real');
const valorReal = document.getElementById('real-text');

const select = document.getElementById('select');

const containerConvert = document.getElementById('container-convert');
const imgConvert = document.getElementById('img-convert');
const nameConvert = document.getElementById('name-convert');
const valueConvert = document.getElementById('value-convert');

const arrowimg = document.getElementById('arrowimg');

const convertButton = document.getElementById('convert-button')


// showing initial quotation (dolar) ----- mostrando a cotação inicial (dolar)
const initialQuotation = async () => {
        let initialResult = (1) / quotation.USDBRL.high;
        valueConvert.innerHTML = `US$ ${initialResult.toFixed(2)}`;
    };
    initialQuotation();

// convert button ----- botão de conversão

function convert(){
    
    valorReal.innerHTML = `R$ ${inputReal.value}`      
    let result
    switch (select.value) {
        case "US$ Dólar americano":
            result = (inputReal.value) / quotation.USDBRL.high;
            valueConvert.innerHTML = `US$ ${result.toFixed(2)}`;
            break;
            
        case "€ Euro":
            result = (inputReal.value) / quotation.EURBRL.high;
            valueConvert.innerHTML = `€ ${result.toFixed(2)}`;
            break;
            
        case "₽ Rublo Russo":
            result = (inputReal.value) / quotation.RUBBRL.high;
            valueConvert.innerHTML = `₽ ${result.toFixed(2)}`;
            break;
            
        case " ¥ Yen":
            result = (inputReal.value) / quotation.JPYBRL.high;
            valueConvert.innerHTML = `¥  ${result.toFixed(2)}`;
            break;
                
        case "₿ Bitcoin":
            result = (inputReal.value) / btcQuotation;
            valueConvert.innerHTML = `₿ ${result.toFixed(4)}`;
            break;

        default:
            break;
            }

}

// changing elements according to the selected option  ----- mudando elementos de acordo com a opcão selecionada 
select.addEventListener('click', async () => {
  
    select.addEventListener('change', ()=>{
    
        let quotationBase 

        switch (select.value) {
            case "US$ Dólar americano":
                imgConvert.src = './assets/eua.png';
                nameConvert.textContent = 'Dólar americano';
                quotationBase = (1) / quotation.USDBRL.high;
                valueConvert.innerHTML = `US$ ${quotationBase.toFixed(2)}`;
                inputReal.value = ''
                valorReal.innerHTML = 'R$ '
                break;
                
            case "€ Euro":
                imgConvert.src = './assets/euro.png';
                nameConvert.textContent = 'Euro'
                quotationBase = (1) / quotation.EURBRL.high;
                valueConvert.innerHTML = `€ ${quotationBase.toFixed(2)}`;
                inputReal.value = ''
                valorReal.innerHTML = 'R$ '
                break;
                
            case "₽ Rublo Russo":
                imgConvert.src = './assets/russia.png';
                nameConvert.textContent = 'Rublo Russo';
                quotationBase = (1) / quotation.RUBBRL.high;
                valueConvert.innerHTML = `₽ ${quotationBase.toFixed(2)}`;
                inputReal.value = ''
                valorReal.innerHTML = 'R$ '
                break;
                
            case " ¥ Yen":
                imgConvert.src = './assets/japao.png';
                nameConvert.textContent = 'Yen';
                arrowimg.classList.add("yen")
                quotationBase = (1) / quotation.JPYBRL.high;
                valueConvert.innerHTML = `¥ ${quotationBase.toFixed(2)}`;
                inputReal.value = ''
                valorReal.innerHTML = 'R$ '
                break;
                    
            case "₿ Bitcoin":
                imgConvert.src = './assets/bitcoin.png';
                nameConvert.textContent = 'Bitcoin';
                quotationBase = (1) / btcQuotation;
                valueConvert.innerHTML = `₿ ${quotationBase.toPrecision(4)}`;
                inputReal.value = ''
                valorReal.innerHTML = 'R$ '
                break;
    
            default:
                break;
    }})

})
  convertButton.addEventListener('click', convert);
};
getCurrency();

//     widthAfterSync();
// });

// // input tweaks
// const inputSync = event => {
//     if (inputReal.style.borderColor !== '#3b3c47') inputReal.style.borderColor = '#3b3c47';

//     if (event.key === 'Enter') {
//         convert();
//     }
// };
// inputReal.addEventListener('keypress', inputSync);

//     if (inputReal.value == '') {
//         inputReal.style.borderColor = '#980d0d';
//         toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(0);
//         convertedValue.innerHTML = currencyModel.format(0);
//     } else {
//         result = parseFloat(inputReal.value) / quotation;
//         toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(inputReal.value));
//         convertedValue.innerHTML = currencyModel.format(result);
//     }

//    
// };




