class Hora{
    constructor(hr,min,sec){
        if(hr%1==0 && min%1==0 && sec%1==0){
            this._hr=hr;
            this._min=min;
            this._sec=sec;

            return(this._hr,this._min,this._sec)
        }else{
            throw new Error("Error")
        }
    }
    get(){return(this._hr,this._min,this._sec)}
    set(a,b,c){this._hr=a,this._min=b,this._sec=c}
    
    tick(){this._sec=this._sec+1; 
        
        if(this._sec>=60){
            this._min=this._min+1
            this._sec=this._sec-60
        }
        if(this._min>=60){
            this._hr=this._hr+1
            this._min=this._min-60
        }
        if(this._hr>=24){
            this._hr=this._hr-this._hr}
            return(this._hr,this._min,this._sec);
        }
        
}

h1=new Hora(23,59,59)
h1.tick()