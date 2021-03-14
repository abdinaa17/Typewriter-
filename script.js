
let typingNow = document.getElementById("typing");
let btn = document.getElementById('btn')




let i = 0


let sentence = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit eligendi neque autem laboriosam exercitationem sint veritatis repudiandae porro asperiores.';


function showWords() {
  if (i < sentence.length) {
    typingNow.innerHTML += sentence.charAt(i);
    i++;
    setTimeout(showWords, 100);
  }
}


btn.addEventListener('click', showWords)