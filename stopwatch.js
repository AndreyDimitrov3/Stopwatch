document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let isPaused = false;
    let intervalId;

    document.getElementById("pausePlay").addEventListener('click', function() {;
        isPaused = !isPaused;
    });

    document.getElementById('start').addEventListener('click', count);

    function count(){
        let timer = document.getElementById('timer');
        document.getElementById("start").disabled = true;
        document.getElementById("holder").classList.remove('hidden');

        intervalId = setInterval(function() {
            if (!isPaused) {
                counter++;
                timer.innerText = counter;
            }
        }, 1000);
    }

    document.getElementById('remove').addEventListener('click', removeItem);

    function removeItem() {
        counter = 0;
        isPaused = false;
        timer.innerText = counter;
        document.getElementById("start").disabled = false;
        clearInterval(intervalId); 
        document.getElementById('holder').classList.add('hidden');
    }
})
