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

const quiz = [   //&emsp; 4 tab spaces , &ensp; 2 tab spaces
    {
        Question: `Q1: let schema = ["hi","friend",null, null, "goodbye"] <br>
                           schema = schema.filter(function(n) { <br>
                            &emsp;&emsp;  return n <br>
                                    });`,
        a: `['hi', 'friend', 'goodbye']`,
        b: `['hi', 'friend', 'null', 'null', 'goodbye']`,
        c: `['hi', 'friend', 'null', 'goodbye']`,
        d: `[]`,
        ans: `ans1`
    },
    {
        Question: `Q2: function printMe() {  <br>
            &ensp; console.log('print me'); <br>
          }    <br>
          function test() { <br>
            &emsp; &emsp; console.log('test'); <br>
          } <br>
          setTimeout(printMe, 0); <br>
          test();`, 

        a: `print me <br>
        &emsp;   test`,
        b: `test <br>
        &emsp; print me`,
        c: `Refrence Error`,
        d: `Syntax Error`,
        ans: `ans2`
    },
    {
        Question: `Q3: function fn(){ <br>
            &emsp;  &emsp;  fn() <br>
                        } <br>
                       fn()`,
        a: `Syntax Error`,
        b: `Range Error`,
        c: `Refrence Error`,
        d: `null`,
        ans: `ans2`
    }, {
        Question: `Q4: function f1() {  
            &emsp; &ensp; console.log('f1');  &emsp;
                        } <br>
                        &emsp; &ensp; function f2() {
                            &emsp; &ensp; console.log('f2');   &emsp;
                        } <br>
                        &emsp; &ensp; function main() { <br>
                          &emsp; &emsp;  &emsp;&emsp; console.log('main'); <br>
                          &emsp; &emsp;  &emsp;&emsp; f1(); <br>
                          &emsp; &emsp;  &emsp;&emsp; f2(); <br>
                        } <br>
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
        Question: `Q5: getage(2000)     <br>      <br>
                       function getage(year){ <br>
                        &emsp; &emsp; console.log(2022 - year) <br>
                       }  `,
        a: ` 20 `,
        b: ` 21 `,
        c: ` 22 `,
        d: ` Invalid`,
        ans: `ans3`
    },
    {
        Question: `Q6: let r = () => console.log("Hello World!") <br> <br> r(); `,
        a: ` Hello World! `,
        b: ` Syntax Error`,
        c: ` Reference Error `,
        d: ` r is not defined`,
        ans: `ans1`
    },
    {
        Question: `Q7: r(); <br> <br> let r = () => console.log("Hello World!")  `,
        a: ` Hello World! `,
        b: ` Syntax Error`,
        c: ` Reference Error `,
        d: ` r is not defined`,
        ans: `ans4`
        
    },
    {
        Question: `Q8: agree() <br> 
        function agree() { <br> <br>
           &emsp; &emsp; console.log("Imagination is greater than detail.")  <br>
        } `,
        a: ` Null `,
        b: ` Syntax Error`,
        c: ` Imagination is greater than detail.  `,
        d: ` agree is not defined`,
        ans: `ans3`
    },
    {
        Question: `Q9: class student { <br>
            &emsp;  &emsp; constructor() { <br>
                &emsp; &emsp; &emsp;  console.log("Powerful dreams inspire powerful action.") <br>
                &emsp; &emsp;} <br>
        } <br>
        let real = new student()  `,
        a: ` Syntax Error `,
        b: ` class is not defined `,
        c: ` real is not defined `,
        d: ` Powerful dreams inspire powerful action. `,
        ans: `ans4`
    },
    {
        Question: `Q10: class student { <br>
            &emsp;   &emsp; prototype() { <br>
                &emsp;&emsp;&emsp;  console.log("There is nothing impossible to they who will try.")
                <br>    } <br>
        } <br>
        let real = new student() <br>
        real.prototype()  `,
        a: ` Syntax Error `,
        b: ` class is not defined `,
        c: ` real is not defined `,
        d: ` There is nothing impossible to they who will try.`,
        ans: `ans4`
        
    },
    {
        Question: `Q11: class student { <br>
            &emsp;  &emsp;  static hello() { <br>
                &emsp;  &emsp;  &emsp;console.log("Don't tell people your plans.") <br>
             } <br>
         } <br>
         student.hello() `,
         a: ` Syntax Error `,
         b: ` class is not defined `,
         c: ` Don't tell people your plans. `,
         d: ` Refrence Error`,
         ans: `ans3`
    },
    {
        Question: `Q12: Is JavaScript ignores extra spaces? `,
        a: ` True`,
        b: ` False`,
        c: `  undefined`,
        d: `   null`,
        
        ans: `ans1`
    },
    {
        Question: `Q13: Why so Java and JavaScript have similar name? `,
        a: ` They both support object oriented programming`,
        b: ` The syntax of JavaScript is loosely based on Java syntax`,
        c: `  They both are same`,
        d: ` none of above `,
        ans: `ans2`
    },
    {
        Question: `Q14: console.log(018 - 015) `,
        a: ` 3`,
        b: ` 4`,
        c: ` 5`,
        d: ` None of Above`,
        ans: `ans3`
    },
    {
        Question: `Q15: console.log(('b' + 'a' + + 'a' + 'a').toLowerCase()); `,
        a: `baaa `,
        b: ` baa`,
        c: ` ba aa`,
        d: `banana `,
        ans: `ans4`
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

let min = 10;
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


