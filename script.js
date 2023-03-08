window.addEventListener("DOMContentLoaded", () => {
    let countUser = document.querySelector(".count-block__user");
    let countComp = document.querySelector(".count-block__comp");
    let userField = document.querySelector(".figure-container__user-field");
    let compField = document.querySelector(".figure-container__comp-field");
    let result = document.querySelector(".result");
    let sound = document.querySelector(".audio");
    let btnPlay = document.querySelector(".play");
    let fields = document.querySelectorAll(".field");

    let userStep = 0;
    let compStep = 0;
    countU = 0;
    countC = 0;
    let blocked = false;

    userField.addEventListener("click", choiceUser);

    function choiceUser(e) {
        if (blocked) {
            return;
        }
        if (e.target.classList.contains("field")) {
            userStep = e.target.dataset.field;
            fields.forEach(i => i.classList.remove("active", "error"));
            e.target.classList.add("active");
            choiceComp();
        }
    }

    function choiceComp() {
        blocked = true;
        let random = Math.floor(Math.random() * 3);
        compField.classList.add("blink");
        let compFields = compField.querySelectorAll(".field");

        setTimeout(() => {
            compField.classList.remove("blink");

            let compSelection = compFields[random];
            compStep = compSelection.dataset.field;
            compSelection.classList.add("active");

            selectWinner();
        }, 2000);
    }

    function selectWinner() {
        blocked = false;
        
        let combinations = userStep + compStep;

        if (combinations == "rs" || combinations == "sp" || combinations == "pr") {
            result.innerText = "Игрок победил";
            countU++;
            countUser.innerHTML = countU;
            compField.querySelector('[data-field='+compStep+']').classList.add("error");
        } else if (combinations == "rp" || combinations == "sr" || combinations == "ps") {
            result.innerText = "Компьютер победил";
            countC++;
            countComp.innerHTML = countC;
            userField.querySelector('[data-field='+userStep+']').classList.add("error");
        } else {
            result.innerText = "Ничья";
        }
    }

    function play() {
        countU = countC = 0;
        result.innerText = "Сделайте выбор!";
        countComp.innerHTML = countC;
        countUser.innerHTML = countU;
        fields.forEach(i => i.classList.remove("active", "error"));

    }
    btnPlay.addEventListener("click", play);

    function renderRivalHostory() {
        
    }

});



