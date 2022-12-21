// API
const getCurrency = async () => {
    const url = 'http://economia.awesomeapi.com.br/json/last/EUR-BRL,USD-BRL,JPY-BRL,RUB-BRL,BTC-BRL';


    const apiData = await fetch(url);
	const Dados = await apiData.json();

    const quotation = Dados
    console.log(quotation.JPYBRL.high)
    // var euroQuotation = Dados['EURBRL'].high
    // var dollarQuotation = Dados['USDBRL'].high
    // var yenQuotation = Dados['JPYBRL'].high
    // var rubloQuotation = Dados['RUBBRL'].high 
    // var btcQuotation = Dados['BTCBRL'].high

const inputReal = document.getElementById('input-real');
const valorReal = document.getElementById('real-text');

const select = document.getElementById('select');

const containerConvert = document.getElementById('container-convert');
const imgConvert = document.getElementById('img-convert');
const nameConvert = document.getElementById('name-convert');
const valueConvert = document.getElementById('value-convert');

const arrowimg = document.getElementById('arrowimg');

// let newSrc;
// containerConvert.textContent = `${currencyName} (${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(quotation)})`;
// convertedValue.innerHTML = currencyModel.format(0);
// toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(0);

// const convertedCurrencyName = document.querySelector('.converted-symbol-name');

// const convertedValue = document.getElementById('currency-value-text');
// let currencyModel = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });


// const toConvertValue = document.querySelector('.to-convert-value');

// const convertButton = document.getElementById('convert-button')

// showing initial quotation (euro)
const initialQuotation = async () => {
        valueConvert.innerHTML = valueConvert.innerHTML = `US$ ${dollarQuotation}`;
    };
    initialQuotation();

// changing elements according to the selected option
select.addEventListener('click', async () => {
    // const quotations = await getCurrency();
    
   
    // resetando input
    // valorReal.innerHTML = '';
    // valueConvert.innerHTML = '';
    
    select.addEventListener('change', ()=>{
    
        switch (select.value) {
            case "US$ Dólar americano":
                imgConvert.src = './assets/eua.png';
                nameConvert.textContent = 'Dólar americano';
                valueConvert.innerHTML = `US$ ${quotation.USDBRL.high}`;
                break;
                
            case "€ Euro":
                imgConvert.src = './assets/euro.png';
                nameConvert.textContent = 'Euro'
                valueConvert.innerHTML = `€ ${quotation.EURBRL.high}`;
                break;
                
            case "₽ Rublo Russo":
                imgConvert.src = './assets/russia.png';
                nameConvert.textContent = 'Rublo Russo';
                valueConvert.innerHTML = `₽ ${quotation.RUBBRL.high}`;
                break;
                
            case " ¥ Yen":
                imgConvert.src = './assets/japao.png';
                nameConvert.textContent = 'Yen';
                arrowimg.classList.add("yen")
                valueConvert.innerHTML = `¥ ${quotation.JPYBRL.high}`;
                break;
                    
            case "₿ Bitcoin":
                imgConvert.src = './assets/bitcoin.png';
                nameConvert.textContent = 'Bitcoin';
                valueConvert.innerHTML = `₿ ${quotation.BTCBRL.high}`;
                break;
    
            default:
                break;
    }})
       

    // foreign country flag image
    // const convertedCurrencyImage = document.querySelectorAll('.currency-container');

    // let newSrc = '';
    // let currencyName = '';
    // let quotation = '';
    })
   
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

// const convert = async () => {
//     const quotations = await getCurrency();

//     let quotation = '';
//     switch (option.selectedIndex) {
//         case 0:
//             quotation = quotations.euroQuotation;
//             break;

//         case 1:
//             quotation = quotations.dollarQuotation;
//             break;

//         case 2:
//             quotation = quotations.yenQuotation;
//             break;

//         case 3:
//             quotation = quotations.btcQuotation;
//             break;

//         case 4:
//             quotation = quotations.rubloQuotation;
//             break;

//         default:
//             break;
//     }

//     if (inputReal.value == '') {
//         inputReal.style.borderColor = '#980d0d';
//         toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(0);
//         convertedValue.innerHTML = currencyModel.format(0);
//     } else {
//         result = parseFloat(inputReal.value) / quotation;
//         toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(inputReal.value));
//         convertedValue.innerHTML = currencyModel.format(result);
//     }

//     widthAfterSync();
// };
// convertButton.addEventListener('click', convert);



