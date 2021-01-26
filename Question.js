class Question {
    constructor() {
      this.input=createInput("Name")
      this.button=createButton("Play")
      this.greeting=createElement("h2")
      this.title=createElement("MyQuizgame")
      this.question=createElement("question")
      this.option=createElement("option")
  
    }
    hide(){
      this.greeting.hide();
      this.title.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      
      this.title.html("Myquizgame");
      this.title.position(350, 0);
      
      this.question.html("Question:-CCS stands for?");
      this.question.position(150,80);
      this.option1.html("1:Carbon Capture Stroge");
      this.option1.position(150,100);
      this.option2.html("2:Carbon Capture Sequestration");
      this.potion2.position(150,120);
      
      
      this.input.position(150,230);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.button.hide();
       contestant.name=this.input.value();
        
        
       contestantCount+=1;
       contestant.index=contestantCount
       contestant.update()
       contestant.updateCount(contestantCount);
        
        this.greeting.html("Hello " + contestant.name )
        this.greeting.position(130, 160)
      });
  
    }
  }
  