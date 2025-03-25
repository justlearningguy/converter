function count() {
    const conversions = {
        'Kilometer': {
            'Meter': km => km * 1000,
            'Decimeter': km => km * 10000,
            'Centimeter': km => km * 100000,
            'Millimeter': km => km * 1000000,
            'Micrometer': km => km * 1000000000,
            'Nanometer': km => km * 1000000000000,
            'Mile': km => km * 0.621371,
            'Foot': km => km * 3280.8398950131,
            'Inch': km => km * 39370.1
        },
        'Meter': {
            'Kilometer': m => m / 1000,
            'Decimeter': m => m * 10,
            'Centimeter': m => m * 100,
            'Millimeter': m => m * 1000,
            'Micrometer': m => m * 1000000,
            'Nanometer': m => m * 1000000000,
            'Mile': m => m * 0.000621371,
            'Foot': m => m * 3.28084,
            'Inch': m => m * 39.370079
        },
        'Decimeter': {
            'Kilometer': dm => dm / 10000,
            'Meter': dm => dm / 10,
            'Centimeter': dm => dm * 10,
            'Millimeter': dm => dm * 100,
            'Micrometer': dm => dm * 100000,
            'Nanometer': dm => dm * 100000000,
            'Mile': dm => dm * 0.0000621371,
            'Foot': dm => dm * 0.3280839895,
            'Inch': dm => dm * 3.937007874
        },
        'Centimeter': {
            'Kilometer': cm => cm / 100000,
            'Meter': cm => cm / 100,
            'Decimeter': cm => cm / 10,
            'Millimeter': cm => cm * 10,
            'Micrometer': cm => cm * 10000,
            'Nanometer': cm => cm * 10000000,
            'Mile': cm => cm * 0.0000062137,
            'Foot': cm => cm * 0.032808399,
            'Inch': cm => cm * 0.3937007874
        },
        'Millimeter': {
            'Kilometer': mm => mm / 1000000,
            'Meter': mm => mm / 1000,
            'Decimeter': mm => mm / 100,
            'Centimeter': mm => mm / 10,
            'Micrometer': mm => mm * 1000,
            'Nanometer': mm => mm * 1000000,
            'Mile': mm => mm * 0.0000006213711922,
            'Foot': mm => mm * 0.0032808399,
            'Inch': mm => mm * 0.0393700787
        },
        'Micrometer': {
            'Kilometer': μm => μm / 1000000000,
            'Meter': μm => μm / 1000000,
            'Decimeter': μm => μm / 100000,
            'Centimeter': μm => μm / 10000,
            'Millimeter': μm => μm / 1000,
            'Nanometer': μm => μm * 1000,
            'Mile': μm => μm * 0.0000000006213711922,
            'Foot': μm => μm * 0.0000032808,
            'Inch': μm => μm * 0.0000393701
        },
        'Nanometer': {
            'Kilometer': nm => nm / 1000000000000,
            'Meter': nm => nm / 1000000000,
            'Decimeter': nm => nm / 100000000,
            'Centimeter': nm => nm / 10000000,
            'Millimeter': nm => nm / 1000000,
            'Micrometer': nm => nm / 1000,
            'Mile': nm => nm * 0.00000000000062137119,
            'Foot': nm => nm * 0.000000003280839895,
            'Inch': nm => nm * 0.00000003937007874
        },
        'Mile': {
            'Kilometer': mi => mi * 1.609344,
            'Meter': mi => mi * 1609.344,
            'Decimeter': mi => mi * 16093.44,
            'Centimeter': mi => mi * 160934.4,
            'Millimeter': mi => mi * 1609344,
            'Micrometer': mi => mi * 1609344000,
            'Nanometer': mi => mi * 1609344000000,
            'Foot': mi => mi * 5280,
            'Inch': mi => mi * 63360
        },
        'Foot': {
            'Kilometer': ft => ft * 0.0003048,
            'Meter': ft => ft * 0.3048,
            'Decimeter': ft => ft * 3.048,
            'Centimeter': ft => ft * 30.48,
            'Millimeter': ft => ft * 304.8,
            'Micrometer': ft => ft * 304800,
            'Nanometer': ft => ft * 304800000,
            'Mile': ft => ft * 0.0001893939,
            'Inch': ft => ft * 12
        },
        'Inch': {
            'Kilometer': inch => inch * 0.0000254,
            'Meter': inch => inch * 0.0254,
            'Decimeter': inch => inch * 0.254,
            'Centimeter': inch => inch * 2.54,
            'Millimeter': inch => inch * 25.4,
            'Micrometer': inch => inch * 25400,
            'Nanometer': inch => inch * 25400000,
            'Mile': inch => inch * 0.0000157828,
            'Foot': inch => inch * 0.0833333333
        }
    };
    const unitFrom = optionhone.classList[1].replaceAll(' ', '').substr(0, optionhone.classList[1].replaceAll(' ', '').length - 5);
    const unitTo = optionhtwo.classList[1].replaceAll(' ', '').substr(0, optionhtwo.classList[1].replaceAll(' ', '').length - 5);
    const inputValue = Number(optionone.value);
    if (unitFrom === unitTo) {
        optiontwo.value = inputValue;
    } else {
        optiontwo.value = conversions[unitFrom][unitTo](inputValue);
    }
}