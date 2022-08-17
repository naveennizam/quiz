const ques = document.querySelector("#ques")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const next = document.querySelector("#next")
const answer = document.querySelectorAll(".ans")
const showScore = document.querySelector("#showScore")
const element = document.querySelector(".inner");
const count = document.querySelector(".count")
const total = document.querySelector("#total")

let Count = 0;
let score = 0;

const quiz = [
    {
        Question: `Q1: let schema = ["hi","friend",null, null, "goodbye"] <br>
                           schema = schema.filter(function(n) { <br>
                                    return n <br>
                                    });`,
        a: `['hi', 'friend', 'goodbye']`,
        b: `['hi', 'friend', 'null', 'null', 'goodbye']`,
        c: `['hi', 'friend', 'null', 'goodbye']`,
        d: `[]`,
        ans: `ans1`
    },
    {
        Question: `Q2: function printMe() {  <br>
            console.log('print me'); <br>
          }    <br>
          function test() { <br>
            console.log('test'); <br>
          } <br>
          setTimeout(printMe, 0); <br>
          test();`, 

        a: `print me <br>
                test`,
        b: `test <br>
            print me`,
        c: `Refrence Error`,
        d: `Syntax Error`,
        ans: `ans2`
    },
    {
        Question: `Q3: function fn(){
                          fn()
                        }
                       fn()`,
        a: `Syntax Error`,
        b: `Range Error`,
        c: `Refrence Error`,
        d: `null`,
        ans: `ans2`
    }, {
        Question: `Q4: function f1() {
                            console.log('f1');
                        }
                        function f2() {
                            console.log('f2');
                        }
                        function main() {
                            console.log('main');
                            f1();
                            f2();
                        }
                        main();`,
        a: `Error`,
        b: `f1
            f2
            main`,
        c: `main
            f2
            f1`,
        d: `main
            f1
            f2`,
        ans: `ans4`
    },
    {
        Question: `Q5: getage(2000)
                       function getage(year){
                           console.log(2022 - year)
                       }  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    },
    {
        Question: `Q5:  `,
        a: ` `,
        b: ` `,
        c: ` `,
        d: ` `,
        ans: `ans`
    }


]


const loadques = () => {

    const QuizArray = quiz[Count] // count = 0 , in quiz it's stating
    // console.log(quiz[Count]);
    ques.innerHTML = QuizArray.Question
    option1.innerHTML = QuizArray.a
    option2.innerHTML = QuizArray.b
    option3.innerHTML = QuizArray.c
    option4.innerHTML = QuizArray.d


}
loadques()
total.innerHTML = (`Question: ${(Count + 1)}/${quiz.length}`)


const CheckAns = () => {  // it work for list
    let reply;
    answer.forEach((currentAns) => {  // list [name] to check and give id
        console.log(currentAns)
        if (currentAns.checked) {
            reply = currentAns.id
        }
    });
    return (reply)

};

const deSelect = () => { //after increment of question option doesn't checked

    answer.forEach((currentAns) => {
        currentAns.checked = false
    })
}

document.querySelector("#next").addEventListener('click', () => {
    const CheckedAns = CheckAns();
    console.log(CheckedAns)
    if (CheckedAns === quiz[Count].ans) {
        score += 2;
    };
    Count++

    deSelect();
    if (Count < quiz.length) {
        loadques();
        total.innerHTML = (`Question: ${(Count + 1)}/${quiz.length}`)

    }

    else {
        clearInterval(id)
        element.remove(); // after done all question show result only
        showScore.innerHTML = `
        <h1>Your Score <br> ${score} / ${quiz.length * 2} </h1>
        <button class='btn' onclick='location.reload()'>again</button>
        `
    }
});

let min = 15;
let time = min * 60; // min * 60
let update = () => {
    let minute = Math.floor(time / 60) //Quotient
    let second = time % 60;  //Remainder
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    second = second < 10 ? `0${second}` : `${second}`;
    count.innerHTML = `${minute}:${second}`;
    time--;
    if (minute == 00 && second == 00) {
        clearInterval(id)
        element.remove();
        showScore.innerHTML = `
        <h1>Your Score ${score} / ${quiz.length * 2} </h1>
        <button class='btn' onclick='location.reload()'>again</button>
        `
    }
}
let id = setInterval(update, 1000); //1000 milliSecond 


