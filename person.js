export class Person {
    constructor(name, height, haircolor, eyecolor, weight) {
        this.name = name;
        this.height = height;
        this.haircolor = haircolor;
        this.eyecolor = eyecolor;
        this.weight= weight;
    }

    speakEnglish() {
        console.log(this.name + " can speak english.")
    }

    wearGlasses() { 
        console.log(this.name + " wear Glasses and has " + this.eyecolor + " eyes.")
    }

    canRun() {
        console.log(this.name + " can run, is " + this.height " cm tall and has " + this.weight " kg." )
    }
    
    dyeHair() {
        console.log(this.name + " has " + this.haircolor " hair and want to dye his/her hair.")
    }
    
} 