texts1 = document.querySelectorAll('.text1');
texts2 = document.querySelectorAll('.text2');
texts3 = document.querySelectorAll('.text3');
texts4 = document.querySelectorAll('.text4');
texts5 = document.querySelectorAll('.text5');

wrapper = document.querySelector('.wrapper');
wrappers = document.querySelectorAll('.wrapper');
result = document.querySelector('.result');
options = document.querySelectorAll('.option');
finish = document.querySelector('.finish');

var answers = ["Twttr", "2009", "JavaScript", "Detective Comics", "1953"];


var counter = 0;
var increment = function () {
    counter++;
};



for (var i = 0; i < texts1.length; i++) {

    texts1[i].addEventListener('click', (e) => {

        if (e.target.innerText === answers[0]) {
            playAudio1();
            e.target.parentElement.style.backgroundColor = 'Green';
            increment();
            console.log(counter)
            result.innerHTML = '<h1>You Got ' + counter + ' Answer(s) Correct!!</h1>'
            for (var j = 0; j < texts1.length; j++) {
                texts1[j].style.pointerEvents = 'none';
            }

        }
        else {
            playAudio2();
            e.target.parentElement.style.backgroundColor = 'Red';
            for (var j = 0; j < texts1.length; j++) {
                texts1[j].style.pointerEvents = 'none';
            }
        }
    });

}


for (var i = 0; i < texts2.length; i++) {
    texts2[i].addEventListener('click', (e) => {

        if (e.target.innerText === answers[1]) {
            playAudio1();
            e.target.parentElement.style.backgroundColor = 'Green';
            increment();
            console.log(counter)
            result.innerHTML = '<h1>You Got ' + counter + ' Answer(s) Correct!!</h1>'
            for (var j = 0; j < texts2.length; j++) {
                texts2[j].style.pointerEvents = 'none';
            }

        }
        else {
            playAudio2();
            e.target.parentElement.style.backgroundColor = 'Red';
            for (var j = 0; j < texts2.length; j++) {
                texts2[j].style.pointerEvents = 'none';
            }
        }
    });
}

for (var i = 0; i < texts3.length; i++) {
    texts3[i].addEventListener('click', (e) => {
        if (e.target.innerText === answers[2]) {
            playAudio1();
            e.target.parentElement.style.backgroundColor = 'Green';
            increment();
            console.log(counter)
            result.innerHTML = '<h1>You Got ' + counter + ' Answer(s) Correct!!</h1>'
            for (var j = 0; j < texts3.length; j++) {
                texts3[j].style.pointerEvents = 'none';
            }

        }
        else {
            playAudio2();
            e.target.parentElement.style.backgroundColor = 'Red';
            for (var j = 0; j < texts3.length; j++) {
                texts3[j].style.pointerEvents = 'none';
            }
        }


    });
}


for (var i = 0; i < texts4.length; i++) {
    texts4[i].addEventListener('click', (e) => {
        if (e.target.innerText === answers[3]) {
            playAudio1();
            e.target.parentElement.style.backgroundColor = 'Green';
            increment();
            console.log(counter)
            result.innerHTML = '<h1>You Got ' + counter + ' Answer(s) Correct!!</h1>'
            for (var j = 0; j < texts4.length; j++) {
                texts4[j].style.pointerEvents = 'none';
            }

        }
        else {
            playAudio2();
            e.target.parentElement.style.backgroundColor = 'Red';
            for (var j = 0; j < texts4.length; j++) {
                texts4[j].style.pointerEvents = 'none';
            }
        }


    });
}


for (var i = 0; i < texts5.length; i++) {
    texts5[i].addEventListener('click', (e) => {
        if (e.target.innerText === answers[4]) {
            playAudio1();
            e.target.parentElement.style.backgroundColor = 'Green';
            increment();
            console.log(counter)
            result.innerHTML = '<h1>You Got ' + counter + ' Answer(s) Correct!!</h1>'
            for (var j = 0; j < texts5.length; j++) {
                texts5[j].style.pointerEvents = 'none';
            }

        }
        else {
            playAudio2();
            e.target.parentElement.style.backgroundColor = 'Red';
            for (var j = 0; j < texts5.length; j++) {
                texts5[j].style.pointerEvents = 'none';
            }
        }


    });
}








//for light/ dark theme

var light = document.querySelector('.light');
var dark = document.querySelector('.dark');
var brand = document.querySelector('.brand');
var options = document.querySelectorAll('.option');
var lefts = document.querySelectorAll('.left');
var rights = document.querySelectorAll('.right');
var attempt = document.querySelector('.attempt');
var newText = document.querySelector('.new');
var bg = document.querySelector('.bg');


//light theme
light.addEventListener('click', () => {
    playAudio();
    document.body.style.backgroundImage = 'linear-gradient(315deg, #788ba8 0%, #e2eaf7 74%)';
    bg.style.backgroundImage = 'linear-gradient(315deg, #788ba8 0%, #e2eaf7 74%)';
    brand.style.color = 'blue'
    finish.style.color = 'white'
    result.style.color = 'rgb(109, 127, 243)';


    for (var l = 0; l < wrappers.length; l++) {
        wrappers[l].style.backgroundColor = 'pink';
    }

    newText.style.backgroundColor = 'rgba(90, 255, 200)';

    for (var l = 0; l < options.length; l++) {
        options[l].style.backgroundColor = 'rgb(64, 142, 221,0.9)';
    }

    for (var l = 0; l < lefts.length; l++) {
        lefts[l].style.borderColor = 'rgb(27, 155, 36)';
        lefts[l].style.color = 'rgb(27, 155, 36)';
    }

    for (var l = 0; l < rights.length; l++) {
        rights[l].style.borderColor = 'rgb(27, 155, 36)';
        rights[l].style.color = 'rgb(27, 155, 36)';
    }
})



//dark theme

dark.addEventListener('click', () => {
    playAudio();
    document.body.style.backgroundImage = 'linear-gradient(315deg, #2d3436 0%, #000000 74%)';
    bg.style.backgroundImage = 'linear-gradient(315deg, #2d3436 0%, #000000 74%)';
    brand.style.color = 'rgb(235, 169, 255)';
    finish.style.color = 'black'
    result.style.color = 'White';


    for (var l = 0; l < wrappers.length; l++) {
        wrappers[l].style.backgroundColor = 'rgb(65, 65, 65)';
    }

    newText.style.backgroundColor = 'rgba(127, 255, 212, 0.663)';

    for (var l = 0; l < options.length; l++) {
        options[l].style.backgroundColor = 'rgb(48, 48, 48)';
    }

    for (var l = 0; l < lefts.length; l++) {
        lefts[l].style.borderColor = 'rgb(41, 229, 54)';
        lefts[l].style.color = 'rgb(41, 229, 54)';
    }

    for (var l = 0; l < rights.length; l++) {
        rights[l].style.borderColor = 'rgb(41, 229, 54)';
        rights[l].style.color = 'rgb(41, 229, 54)';
    }
})








//for sound
var x = document.getElementById("myAudio");
var y = document.getElementById("myAudio1");
var z = document.getElementById("myAudio2");
var k = document.getElementById("myAudio3");

function playAudio() {
    x.play();
}

function playAudio1() {
    y.play();
}

function playAudio2() {
    z.play();
}

function playAudio3() {
    k.play();
}

for (var i = 0; i < rights.length; i++) {
    rights[i].addEventListener('click', () => {
        playAudio();
        nextSlide(1);
    })
}

for (var i = 0; i < lefts.length; i++) {
    lefts[i].addEventListener('click', () => {
        playAudio();
        nextSlide(-1);
    })
}

finish.addEventListener('click', () => {
    playAudio3();
    nextSlide(1);
});

attempt.addEventListener('click', () => {
    playAudio();
    nextSlide(1);
});






//for appending username
var intro = document.querySelector('.intro-text');
var input = document.querySelector('.input-text');
var submitNew = document.querySelector('.input-submit');
var form = document.querySelector('form');
var newDiv = document.createElement('div');


newDiv.classList.add('text-only');

form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    attempt.style.pointerEvents = 'auto';
    newDiv.innerHTML = 'Are you Ready ' + input.value + '?';
    intro.append(newDiv);

    form.reset();
});









//for slider

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("wrapper");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}
