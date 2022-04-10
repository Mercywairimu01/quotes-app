export class Quote {
   public showDescription: boolean;
  static id: number;
  static completeDate: Date;
    constructor(public id: number,public quote: string,public author:string,public description: string,public writer:string,public completeDate: Date,public upvotes:number,public downvotes:number){
      this.showDescription=false;
      this.id =id;
      this.quote =quote;
      this.author =author;
      this.writer =writer;
      this.description =description;
      this.upvotes=upvotes;
      this.downvotes =downvotes
    }
    
}
