class Looby{
    constructor(){
     this.character = createButton("CHOOSE CHARACTER");
     this.backgroundtrack = createButton("CHOOSE BACKGROUND");
     this.liveRace = createButton("LIVE RACE");
     this.racewithai = createButton("RACE WITH AI");
     this.back = createButton("BACK");
     this.back2 = createButton("BACK");
     this.title = createElement('h2');
    }
    display(){
            background(loobyimg,width,height);
            form.hide();
            
            this.title.html("WELCOME TO YOUR LOOBY");
            this.title.position(300, 10);
            this.title.style('font-size', '70px');
            this.title.style('color', 'yellow');
            

            this.character.position(width-350,height/2-200);
            this.character.style('width', '200px');
            this.character.style('height', '40px');
            this.character.style('background', 'orange');

            this.backgroundtrack.position(width-350,height/2-100);
            this.backgroundtrack.style('width', '200px');
            this.backgroundtrack.style('height', '40px');
            this.backgroundtrack.style('background', 'orange');

            this.back2.position(width-100,height-750);
            this.back2.style('width', '70px');
            this.back2.style('height', '40px');
            this.back2.style('background', 'orange');
            this.back2.hide();

            this.liveRace.position(width-350,height/2);
            this.liveRace.style('width', '200px');
            this.liveRace.style('height', '40px');
            this.liveRace.style('background', 'orange');

            this.racewithai.position(width-350,height/2+100);
            this.racewithai.style('width', '200px');
            this.racewithai.style('height', '40px');
            this.racewithai.style('background', 'orange');

            this.back.position(width-150,height-100);
            this.back.style('width', '100px');
            this.back.style('height', '40px');
            this.back.style('background', 'orange');
            this.back.hide();

            

            this.character.mousePressed(()=>{
                console.log("Check3");
                this.character.hide();
                this.backgroundtrack.hide();
                this.liveRace.hide();
                this.racewithai.hide();
                this.title.hide();
                background(characterimg,width,height);
                this.back.show();
            }) 

            this.backgroundtrack.mousePressed(()=>{
                console.log("Check9");
                this.character.hide();
                this.backgroundtrack.hide();
                this.liveRace.hide();
                this.racewithai.hide();
                this.back.show();
                this.title.hide();
                background(characterimg,width,height);
            }) 

            this.liveRace.mousePressed(()=>{
                console.log("Check8");
                this.character.hide();
                this.backgroundtrack.hide();
                this.liveRace.hide();
                this.racewithai.hide();
                this.back2.show();
                this.title.hide();
                background("white");
            }) 

            this.racewithai.mousePressed(()=>{
                console.log("Check7");
                this.character.hide();
                this.backgroundtrack.hide();
                this.liveRace.hide();
                this.racewithai.hide();
                this.back2.show();
                this.title.hide();
                background("white");
            }) 

            this.back.mousePressed(()=>{
                console.log("Check10");
                this.character.show();
                this.backgroundtrack.show();
                this.liveRace.show();
                this.racewithai.show();
                this.back.hide();
                this.title.show();
                background(loobyimg,width,height);
               
            }) 

            this.back2.mousePressed(()=>{
                console.log("Check11");
                this.character.show();
                this.backgroundtrack.show();
                this.liveRace.show();
                this.racewithai.show();
                this.title.show();
                this.back2.hide();
                background(loobyimg,width,height);
               
            }) 
            
            
            
            

    }
}