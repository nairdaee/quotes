export class Quotes {
    public showAuthor: boolean;
    public highestVote:boolean;
    constructor(public id: number, public name:string, public numberOfLikes: number , public numberOfDislikes: number , public author: string, public submitDate: Date, public submitter: string){
        this.showAuthor=false;
        this.highestVote = false;
    }
}
