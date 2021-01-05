for (let i = 0; i < data.length; ++i) {
  let words = data[i].words
  for (let j =0; j < words.length; ++j) {
    let url = playSound(words[j].vocabulary);

    saveAs(url)
  }
}

function saveAs(url, word) {    
  var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = word + ".mp3";
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    delete a;
  };
  xhr.open('GET', url);
  xhr.send();
}

function playSound(word) {
  let length = word.length;
  let path_1 = "";
  let path_2 = "";
  let path_3 = "";
  switch (length) {
    case 1:
      path_1 = word[0];
      path_2 = word[0] + "__";
      path_3 = word[0] + "____";
      break;

    case 2:
      path_1 = word[0];
      path_2 = word[0] + word[1] + "_";
      path_3 = word[0] + word[1] + "_" + "_" + "_";
      break;

    case 3:
      path_1 = word[0];
      path_2 = word[0] + word[1] + word[2];
      path_3 = word[0] + word[1] + word[2] + "_" + "_";
      break;

    case 4:
      path_1 = word[0];
      path_2 = word[0] + word[1] + word[2];
      path_3 = word[0] + word[1] + word[2] + word[3] + "_";
      break;
    default:
      path_1 = word[0];
      path_2 = word[0] + word[1] + word[2];
      path_3 = word[0] + word[1] + word[2] + word[3] + word[4];
      break;
  }

  return `https://dictionary.cambridge.org/vi/media/english/us_pron/${path_1}/${path_2}/${path_3}/${word}.mp3`
}


let run_download = async (number, start, end) => {
  let words = data
  for (let j = start; j < end; ++j) {
    let url = playSound(words[j].word);
    if (url != words[j].link && words[j].link != "hainn") {
      if (words[j].word) {
        console.log(hihi++)
        await saveAs(words[j].link, words[j].word)
      }
    }
  };
  console.log(start)
}

let index = 0;
let index2 = 0;
let number = 10;

let test = () => {
  setTimeout(() => {
    run_download(index, index2*10, (index2 + 1) * 10)
    index2 += 1
    number += 10
    if (number > 5200) {
      number = 10
      index += 1;
      index2 = 0
    }
    test()
  }, 2000)
}

