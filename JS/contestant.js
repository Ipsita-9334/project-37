class Contestant{
    constructor(){
        this.name = "";
        this.index = null;
        this.distance = 0;
        this.rank = null;
    }

    getCount(){
        var contestantCountRef = database.ref("contestantCount");
        contestantCountRef.on("value", (data)=>{
            contestantCount = data.val();
        });

    }
    updateCount(count){
        database.ref("/").update({
            contestantCount: count
        });
    }
    update(){
        var contestantIndex = "contestants/contestant"+ this.index;
        database.ref(contestantIndex).set({
            name: this.name,
            distance: this.distance,
            rank: this.rank
        });
    }
    static getContestantInfo(){
        var contestantInfoRef = database.ref("contestants")
        contestantInfoRef.on("value", (data)=>{
            allContestant = data.val()
        })
    }
}