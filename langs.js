const langHeaders = {
    'unitLength_lang': {
        'ru': 'Длина',
        'en': 'Length'
    },
    'unitSpeed_lang': {
        'ru': 'Скорость',
        'en': 'Speed'
    },
    'unitTemperature_lang': {
        'ru': 'Температура',
        'en': 'Temperature'
    },
    'unitArea_lang': {
        'ru': 'Площадь',
        'en': 'Area'
    },
    'unitVolume_lang': {
        'ru': 'Объем',
        'en': 'Volume'
    },
    'unitMass_lang': {
        'ru': 'Масса',
        'en': 'Mass'
    },
    'unitTime_lang': {
        'ru': 'Время',
        'en': 'Time'
    },
    'unitCurrency_lang': {
        'ru': 'Валюта',
        'en': 'Currency'
    },
    'unitAg_lang': {
        'ru': 'Средний Балл',
        'en': 'Average Grade'
    },
    'from_lang': {
        'ru': 'Откуда:',
        'en': 'From:'
    },
    'to_lang': {
        'ru': 'Куда:',
        'en': 'To:'
    },
    'title_lang': {
        'ru': 'Конвертер Величин',
        'en': 'Unit Converter'
    },
    'average_lang': {
        'ru': 'Средняя:',
        'en': 'Average:'
    },
    'Kilometer_lang': {
        'ru': 'Километр',
        'en': 'Kilometer'
    },
    'Meter_lang': {
        'ru': 'Метр',
        'en': 'Meter'
    },
    'Decimeter_lang': {
        'ru': 'Дециметр',
        'en': 'Decimeter'
    },
    'Centimeter_lang': {
        'ru': 'Сантиметр',
        'en': 'Centimeter'
    },
    'Millimeter_lang': {
        'ru': 'Миллиметр',
        'en': 'Millimeter'
    },
    'Micrometer_lang': {
        'ru': 'Микрометр',
        'en': 'Micrometer'
    },
    'Nanometer_lang': {
        'ru': 'Нанометр',
        'en': 'Nanometer'
    },
    'Mile_lang': {
        'ru': 'Миля',
        'en': 'Mile'
    },
    'Foot_lang': {
        'ru': 'Фут',
        'en': 'Foot'
    },
    'Inch_lang': {
        'ru': 'Дюйм',
        'en': 'Inch'
    },
    'Meterpersecond_lang': {
        'ru': 'Метр/секунда',
        'en': 'Meter/second'
    },
    'Kilometerperhour_lang': {
        'ru': 'Километр/час',
        'en': 'Kilometer/hour'
    },
    'Mileperhour_lang': {
        'ru': 'Миля/час',
        'en': 'Mile/hour'
    },
    'Celsius_lang': {
        'ru': 'Цельсий',
        'en': 'Celsius'
    },
    'Fahrenheit_lang': {
        'ru': 'Фаренгейт',
        'en': 'Fahrenheit'
    },
    'Kelvin_lang': {
        'ru': 'Кельвин',
        'en': 'Kelvin'
    },
    'Squarekilometer_lang': {
        'ru': 'Квадратный километр',
        'en': 'Square kilometer'
    },
    'Squaremeter_lang': {
        'ru': 'Квадратный метр',
        'en': 'Square meter'
    },
    'Squaredecimeter_lang': {
        'ru': 'Квадратный дециметр',
        'en': 'Square decimeter'
    },
    'Squarecentimeter_lang': {
        'ru': 'Квадратный сантиметр',
        'en': 'Square centimeter'
    },
    'Squaremillimeter_lang': {
        'ru': 'Квадратный миллиметр',
        'en': 'Square millimeter'
    },
    'Are_lang': {
        'ru': 'Ар',
        'en': 'Are'
    },
    'Hectare_lang': {
        'ru': 'Гектар',
        'en': 'Hectare'
    },
    'Cubicmeter_lang': {
        'ru': 'Кубический метр',
        'en': 'Cubic meter'
    },
    'Cubicdecimeter_lang': {
        'ru': 'Кубический дециметр',
        'en': 'Cubic decimeter'
    },
    'Cubiccentimeter_lang': {
        'ru': 'Кубический сантиметр',
        'en': 'Cubic centimeter'
    },
    'Cubicmillimeter_lang': {
        'ru': 'Кубический миллиметр',
        'en': 'Cubic millimeter'
    },
    'Liter_lang': {
        'ru': 'Литр',
        'en': 'Liter'
    },
    'Milliliter_lang': {
        'ru': 'Миллилитр',
        'en': 'Milliliter'
    },
    'Kilogram_lang': {
        'ru': 'Килограмм',
        'en': 'Kilogram'
    },
    'Gram_lang': {
        'ru': 'Грамм',
        'en': 'Gram'
    },
    'Milligram_lang': {
        'ru': 'Миллиграмм',
        'en': 'Milligram'
    },
    'Tonne_lang': {
        'ru': 'Тонна',
        'en': 'Tonne'
    },
    'Pound_lang': {
        'ru': 'Фунт',
        'en': 'Pound'
    },
    'Ounce_lang': {
        'ru': 'Унция',
        'en': 'Ounce'
    },
    'Hour_lang': {
        'ru': 'Час',
        'en': 'Hour'
    },
    'Minute_lang': {
        'ru': 'Минута',
        'en': 'Minute'
    },
    'Second_lang': {
        'ru': 'Секунда',
        'en': 'Second'
    },
    'Millisecond_lang': {
        'ru': 'Миллисекунда',
        'en': 'Millisecond'
    },
    'Day_lang': {
        'ru': 'День',
        'en': 'Day'
    },
    'Week_lang': {
        'ru': 'Неделя',
        'en': 'Week'
    },
    'Year_lang': {
        'ru': 'Год',
        'en': 'Year'
    },
    'dark_lang': {
        'ru': 'ТЕМНАЯ',
        'en': 'DARK'
    },
    'light_lang': {
        'ru': 'СВЕТЛАЯ',
        'en': 'LIGHT'
    },
    'theme_lang': {
        'ru': 'тема',
        'en': 'theme'
    },
    'version_lang': {
        'ru': 'Версия:',
        'en': 'Version:'
    }
    
}
const langPlaceholders = {
    'grade_lang': {
        'ru': 'оценка',
        'en': 'grade'
    },
    'weight_lang': {
        'ru': 'вес',
        'en': 'weight'
    }
}
if(!window.localStorage.getItem('lang')) {
    window.localStorage.setItem('lang', 'en');
}
function langHeadersSet() {
    for(let key in langHeaders) {
        document.querySelectorAll('.' +key).forEach(el => {
            el.innerHTML = langHeaders[key][window.localStorage.getItem('lang')];
        });
    }
}
function langPlaceholdersSet() {
    for(let key in langPlaceholders) {
        document.querySelectorAll('.' +key).forEach(el => {
            el.placeholder = langPlaceholders[key][window.localStorage.getItem('lang')];
        });
    }
}
langHeadersSet();