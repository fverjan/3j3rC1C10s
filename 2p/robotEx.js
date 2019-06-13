class Robot{
    constructor(name){
        this.name = name;
    }

    speak(){console.log('Hablando');};
    makeCoffe(){console.log('Preparando un deliciosisimo café');};
    blinkLight(){console.log('Parpadeando luces como si no hubiera un mañana');};
}

var a = new Robot('aRobot');