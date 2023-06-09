let score = 0
let td = document.querySelectorAll('td')
let interval;
let intervalCountDown
let highScore = localStorage.getItem('highScore') || 0
let timer = document.getElementById('timer')
let time = 60
let audio = document.getElementById("audio")
let audio1 = document.getElementById('audio1')
let audio2 = document.getElementById('audio2')
let audio3 = document.getElementById('audio3')
let check_play = false;
let check_stop = true;


function play() {
    if (!check_play && check_stop) {
        document.getElementById('highScore').innerHTML = `HighScore : ${highScore}`
        intervalCountDown = setInterval(countDown, 1000)
        audio3.play()

        function randomMouse() {
            let randomImg = Math.floor(Math.random() * 9)
            td[randomImg].innerHTML = `<img src="images/home.png" height="100" width="80" id="mole1"/>`;
            setTimeout(() => {
                td[randomImg].innerHTML = ''
            }, 1000)
        }

        if (score >= 10) {
            interval = setInterval(randomMouse, 1000)
        } else if (score >= 20) {
            interval = setInterval(randomMouse, 500)
        } else interval = setInterval(randomMouse, 2000)
        check_play = true;
        check_stop = false;
    }
}

function reset() {
    if (!check_stop && check_play) {
        clearInterval(interval);
        audio3.pause()
        audio3.currentTime = 0
        score = 0;
        document.getElementById('highScore').innerHTML = `HighScore : ${highScore}`
        document.getElementById('score').innerHTML = `Score : ${score}`
        time = 60
        clearInterval(intervalCountDown)
    }
    check_stop = true;
    check_play = false;
}

function handleClick(event) {
    let cell = event.target

    if (cell.querySelector('img')) {
        cell.innerHTML = `<img src="images/home1.png" height="100" width="80" id="mole2" />`
        setTimeout(() => {
            audio.play()
        }, 1000)
        score++
        document.getElementById('score').innerHTML = `Score : ${score}`
        localStorage.setItem('highScore', `${score}`)
        let newSccore = score
        if (newSccore > highScore) {
            highScore = newSccore
            localStorage.setItem('highScore', highScore)
        }


    }
}


for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', handleClick)
}


function countDown() {
    if (!check_stop && check_play) {
        time--
        let minutes = Math.floor(time / 60)
        let seconds = time % 60
        if (seconds < 11) {
            audio2.play()
        }
        if (seconds < 10) {
            seconds = '0' + seconds

        }
        timer.innerHTML = minutes + ':' + seconds
        if (time === 0) {
            audio1.play();
            clearInterval(intervalCountDown)
            table.innerHTML = `<img src="images/end3.png" height="477" width="1000"/>`

            setTimeout(() => {

                location.reload();
            }, 5000)
            time = 60
            reset()
        }
    }
}
