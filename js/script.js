// API
const getCurrency = async () => {
    const url = 'http://economia.awesomeapi.com.br/json/last/EUR-BRL,USD-BRL,JPY-BRL';

    try {
        const apiData = await fetch(url).then(res => res.json());
        return { euroQuotation: apiData['EURBRL'].high, dollarQuotation: apiData['USDBRL'].high, yenQuotation: apiData['JPYBRL'].high, rubloQuotation: apiData['RUBBRL'].high, btcQuotation: apiData['BTCBRL'].high };
    } catch (err) {
        console.error('ErrOr:', err.message);
    }
};

// 2° Select.
const select = document.getElementById('select');
// currency name and value in real (under the flag image)
const convertedCurrencyName = document.querySelector('.converted-symbol-name');
// currency symbol and value converted
const convertedValue = document.querySelector('.converted-value');
let currencyModel = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
// input value on content
const inputReal = document.getElementById('input-real');
// input value on result
const toConvertValue = document.querySelector('.to-convert-value');
// button
const convertButton = document.getElementById('convert-button')

// showing initial quotation (euro)
const initialQuotation = async () => {
    const quotations = await getCurrency();
    convertedCurrencyName.textContent = `Euro (${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(quotations.euroQuotation)})`;
};
initialQuotation();

// changing elements according to the selected option
select.addEventListener('change', async () => {
    meme = document.querySelector('.dollarLessThan5');
    const quotations = await getCurrency();

    // resetting input
    inputReal.value = '';

    // foreign country flag image
    const convertedCurrencyImage = document.getElementById('currency-container');

    let newSrc = '';
    let currencyName = '';
    let quotation = '';
    switch (option.selectedIndex) {
        case 0:
            newSrc = './assets/euro.png';
            currencyName = 'Euro';
            quotation = quotations.euroQuotation;
            currencyModel = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
            meme.style.opacity = '0';
            break;

        case 1:
            newSrc = './assets/eua.png';
            currencyName = 'Dollar';
            quotation = quotations.dollarQuotation;
            currencyModel = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
            if (quotation < 5) meme.style.opacity = '0.85';
            break;

        case 2:
            newSrc = './assets/japao.png';
            currencyName = 'Yen';
            quotation = quotations.yenQuotation;
            currencyModel = new Intl.NumberFormat('jp-JP', { style: 'currency', currency: 'JPY' });
            meme.style.opacity = '0';
            break;

        case 3:
            newSrc = './assets/bitcoin.png';
            currencyName = 'Bitcoin';
            quotation = quotations.btcQuotation;
            currencyModel = new Intl.NumberFormat('btc-BTC', { style: 'currency', currency: 'BTC' });
            meme.style.opacity = '0';
            break;

        case 4:
        newSrc = './assets/russia.png';
        currencyName = 'Rublo';
        quotation = quotations.rubloQuotation;
        currencyModel = new Intl.NumberFormat('rub-RUB', { style: 'currency', currency: 'RUB' });
        meme.style.opacity = '0';
        break;

        default:
            break;
    }

    convertedCurrencyImage.src = newSrc;
    convertedCurrencyName.textContent = `${currencyName} (${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(quotation)})`;
    convertedValue.innerHTML = currencyModel.format(0);
    toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(0);

    widthAfterSync();
});

// input tweaks
const inputSync = event => {
    if (inputReal.style.borderColor !== '#3b3c47') inputReal.style.borderColor = '#3b3c47';

    if (event.key === 'Enter') {
        convert();
    }
};
inputReal.addEventListener('keypress', inputSync);

// syncing toConvert and converted value after width
// const widthAfterSync = () => {
//     const toConvertWidth = toConvertValue.offsetWidth;
//     const convertedWidth = convertedValue.offsetWidth;

//     toConvertValue.style.setProperty('--js-width1', `${toConvertWidth + 6}px`);
//     convertedValue.style.setProperty('--js-width2', `${convertedWidth + 6}px`);
// };
// widthAfterSync();

// converting action
const convert = async () => {
    const quotations = await getCurrency();

    let quotation = '';
    switch (option.selectedIndex) {
        case 0:
            quotation = quotations.euroQuotation;
            break;

        case 1:
            quotation = quotations.dollarQuotation;
            break;

        case 2:
            quotation = quotations.yenQuotation;
            break;

        case 3:
            quotation = quotations.btcQuotation;
            break;

        case 4:
            quotation = quotations.rubloQuotation;
            break;

        default:
            break;
    }

    if (inputReal.value == '') {
        inputReal.style.borderColor = '#980d0d';
        toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(0);
        convertedValue.innerHTML = currencyModel.format(0);
    } else {
        result = parseFloat(inputReal.value) / quotation;
        toConvertValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(inputReal.value));
        convertedValue.innerHTML = currencyModel.format(result);
    }

    widthAfterSync();
};
convertButton.addEventListener('click', convert);


