export function changeAlias(alias) {
  const arrStr = alias.split('');
  function change(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|=|<|>|\?|\/|,|\.|:|;|'|'|&|#|\[|\]|~|$|_/g,
      '-'
    );
    str = str.replace(/-+-,/g, '-');
    str = str.replace(/^-+|-+$/g, '');
    str = str.replace(/\s+/g, '-');
    return str;
  }

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].toUpperCase() === arrStr[i]) {
      arrStr[i] = change(arrStr[i].toLowerCase()).toUpperCase();
    } else {
      arrStr[i] = change(arrStr[i]);
    }
  }

  return arrStr.join('').replace(/-+/g, '-');
}

function insertZero(number) {
  return number <= 9 ? `0${number}` : number.toString();
}
export function formatTime(s) {
  const min = Math.floor(s / 60);
  const second = Math.floor(s) % 60;
  return `${min}:${insertZero(second)}`;
}

export function getRandomColor() {
  let letters = 'BCDEF'.split('');
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
