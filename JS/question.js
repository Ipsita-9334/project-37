class Question{
    constructor(){
        this.title = createElement("h1");
        this.question = createInput("Name");
        this.option1 = createElement("option1");
        this.option2 = createElement("option2");
        this.option3 = createElement("option3");
        this.option4 = createElement("option4");
        this.button = createButton("Play");
        this.input1 = createElement("Name")
        this.head = createElement("h2");
    }

    hide(){
        this.question.hide();
        this.title.hide();
        this.button.hide();
        this.input1.hide();
    }

    display(){
        this.title.html("myQuizGame");
        this.title.position(350, 0);
         
        this.question.html("Question - What starts and ends with the letter 'E', but has only one letter? ");
        this.question.position(150, 80);
        this.option1.html("1: Everyone");
        this.option1.posiiton(150, 80);
        this.option2.html("2: Envelope");
        this.option2.posiiton(150, 100);
        this.option3.html("3: Estimate");
        this.option3.posiiton(150, 120);
        this.option4.html("4: Example");
        this.option4.posiiton(150, 140);

        this.input1.position(150, 230);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name =  this.input1.value();
            contestantCount+=1
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })

    }
}