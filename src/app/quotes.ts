export class Quotes {
    public showAuthor: boolean;
    constructor(public id: number, public name:string, public author: string, public submitDate: Date, public submitter: string){
        this.showAuthor=false;
    }
}
