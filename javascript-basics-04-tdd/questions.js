
const stringSize = (text) => {
    const result = text.length;
    return result;
}
const replaceCharacterE = (text) => {
    return text.replace('e', ' ');
}
const concatString = (text1, text2) => {
    var result = text1.concat(text2);
    return result;
}
const showChar5 = (text) => {
    return text.charAt(4, 5);
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return text.IsString = (true);
}
const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    return text.split(' ').length - 1;
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(radius * radius * Math.PI);
}
const hypothenuse = (ab, ac) => {
    var result = Math.pow(ab, 2) + Math.pow(ac, 2);
    return Math.pow(result, 0.5);
}
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"]
}

const createNumbersArray = () => {
    return [0, 1, 2, 3, 4, 5];
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
languages.push('Ruby','Python');
return languages;
}

const addNumberElement = (numbers) => {
numbers.unshift(-2,-1);
return numbers;
}

const removeFirst = (languages) => {
languages.shift(0);
return languages;
}
const removeLast = (languages) => {
languages.pop();
return languages;
}

const convertStrToArr = (social_arr) => {
return social_arr.split(',');
}

const convertArrToStr = (languages) => {
return languages.toString();
}

const sortArr = (social_arr) => {
    social_arr.sort();
    return social_arr;
}

const invertArr = (social_arr) => {
social_arr.reverse();
return social_arr;
}