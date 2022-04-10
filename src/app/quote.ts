export class Quote {
   public showDescription: boolean;
    constructor(public id: number,public quote: string,public author:string,public description: string,public completeDate: Date,public upvotes:number,public downvotes:number){
      this.showDescription=false;
      this.id =id;
      this.quote =quote;
      this.author =author
      this.upvotes=upvotes;
      this.downvotes =downvotes
    }
    
}
