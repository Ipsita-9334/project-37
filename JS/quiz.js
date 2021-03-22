class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", (state)=>{
            gameState = state.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState: state
        });
    }

    play(){
        this.input.hide();
        this.button.hide();
        this.title.hide();

        background("yellow");

        this.head("Result Of the test:");
        contestant.getContestantInfo();

        for (var plr in allContestants){
            var correctAns = "2";
            if(correctAns === allContestants[plr].answer){
                fill("Green");
            }else{
                fill("red")
            }    
        }
    }

    async start(){
        if(gameState === 0){
            constentant = new Constentant();
            var constentantCountRef = await database.ref('constentantCount').once("value");
            if(constentantCountRef.exists()){
                constentantCount = constentantRef.val();
                constentant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
}