class SingletonClass {

    private static _instance:SingletonClass = new SingletonClass();

    private _score:number = 0;

    constructor() {
        if(SingletonClass._instance){
            throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");
        }
        SingletonClass._instance = this;
    }

    public static getInstance():SingletonClass
    {
        return SingletonClass._instance;
    }

    public setScore(value:number):void
    {
        this._score = value;
    }

    public getScore():number
    {
        return this._score;
    }

    public addPoints(value:number):void
    {
        this._score += value;
    }

    public removePoints(value:number):void
    {
        this._score -= value;
    }

}

const scoreManager = SingletonClass.getInstance();
console.log(scoreManager);
scoreManager.setScore(10);
scoreManager.addPoints(1);
scoreManager.removePoints(2);
console.log( scoreManager.getScore() );
  
