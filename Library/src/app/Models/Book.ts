export class Book {

    public id: number;
    public name: string;
    public img: string;
    public category: string;
    public author: string;
 
  
    constructor(id: number, name: string, img: string, category: string, author: string, ) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.category = category;
      this.author = author;
     
    }
}