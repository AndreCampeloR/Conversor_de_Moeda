// API
const getCurrency = async () => {
    const url = 'http://economia.awesomeapi.com.br/json/last/EUR-BRL,USD-BRL,JPY-BRL,RUB-BRL,BTC-BRL';

    try {
        const apiData = await fetch(url).then(res => res.json());
        return { euroQuotation: apiData['EURBRL'].high, dollarQuotation: apiData['USDBRL'].high, yenQuotation: apiData['JPYBRL'].high, rubloQuotation: apiData['RUBBRL'].high, btcQuotation: apiData['BTCBRL'].high };
    } catch (err) {
        console.error('ErrOr:', err.message);
    }
};

const inputReal = document.getElementById('input-real');
const valorReal = document.getElementById('real-text');

const select = document.getElementById('select');

// const convertedCurrencyName = document.querySelector('.converted-symbol-name');

// const convertedValue = document.getElementById('currency-value-text');
// let currencyModel = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });


// const toConvertValue = document.querySelector('.to-convert-value');

// const convertButton = document.getElementById('convert-button')

// showing initial quotation (euro)
// const initialQuotation = async () => {
//     const quotations = await getCurrency();
//     convertedCurrencyName.textContent = `Euro (${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(quotations.euroQuotation)})`;
// };
// initialQuotation();

// changing elements according to the selected option
select.addEventListener('click', async () => {
    const quotations = await getCurrency();

    // resetando input
    valorReal.innerHTML = '';
    
    select.addEventListener('change', ()=>{

        switch (select.value) {
            case "US$ Dólar americano":
                newSrc = './assets/eua.png';
                currencyName = 'Euro';
                quotation = quotations.euroQuotation;
                currencyModel = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
                break;
                
                case "€ Euro":
                newSrc = './assets/euro.png';
                currencyName = 'Dollar';
                quotation = quotations.dollarQuotation;
                currencyModel = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
                break;
                
            case "₽ Rublo Russo":
                newSrc = './assets/russia.png';
                currencyName = 'Yen';
                quotation = quotations.yenQuotation;
                currencyModel = new Intl.NumberFormat('jp-JP', { style: 'currency', currency: 'JPY' });
                break;
                
            case " ¥ Yen":
                newSrc = './assets/japao.png';
                currencyName = 'Bitcoin';
                quotation = quotations.btcQuotation;
                currencyModel = new Intl.NumberFormat('btc-BTC', { style: 'currency', currency: 'BTC' });
                break;
                    
            case "₿ Bitcoin":
            newSrc = './assets/bitcoin.png';
            currencyName = 'Rublo';
            quotation = quotations.rubloQuotation;
            currencyModel = new Intl.NumberFormat('rub-RUB', { style: 'currency', currency: 'RUB' });
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

//     convertedCurrencyImage.src = newSrc;
//     convertedCurrencyName.textContent = `${currencyName} (${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(quotation)})`;
//     convertedValue.innerHTML = currencyModel.format(0);
//     toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(0);

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



