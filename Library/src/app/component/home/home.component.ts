import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '../../Models/book'; // 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // styleUrls بدلاً من styleUrl
})
export class HomeComponent {
  books: Book[]; // الكلاس Book بحرف كبير
treadeingbooks: Book[];
Classic:Book[];
Romance:Book[];
  constructor() {
    this.books = [
      {
       id: 1,
       name: "A Love to Remember",
       author: "Sophia Carter",
       category: "Romance",
      
      img: "https://img.freepik.com/premium-photo/flyer-social-media-post-design-template-leaflet-cover-presentation-book-cover_1121250-335951.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid"
      },
      {
        id :2,
        name: "Whispers of the Heart",
        author: "Emily Parker",
        category: "Romance",
      
       img: "https://img.freepik.com/premium-photo/book-titled-schloss-cover-by-ben-gucci_981385-14969.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid"
      },
      {
       id: 3,
        name: "A Summer Affair sfkji",
       author: "Liam Johnson ",
       category: "Romance",
        
        img: "https://img.freepik.com/free-vector/atomic-love-wattpad-book-cover_23-2149231553.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid"
      },
      {
        id: 4,
        name: "When We Met salamn",
     
        author: "Isabella Taylor ",
        category: "Romance",
       
       img: "https://img.freepik.com/free-vector/business-annual-report-template-professional-presentation_1017-49759.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid"
      },
       // كتب إضافية
       { id: 5, name: "The Alchemist salman", img: "https://img.freepik.com/free-vector/bike-guy-wattpad-book-cover_23-2149452163.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid", category: "Adventure", author: "Paulo Coelho" },
       { id: 6, name: "Becoming mahran salamn", img: "https://img.freepik.com/free-vector/professional-business-book-cover_23-2149490317.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybridg", category: "Biography", author: "Michelle Obama" },
       { id: 7, name: "The Da Vinci Code", img: "https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid", category: "Mystery", author: "Dan Brown" },
       { id: 8, name: "The Silent Patient", img: "https://img.freepik.com/premium-photo/book-titled-book-by-david-bock_1032785-23777.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid", category: "Thriller", author: "Alex Michaelides" },
    ];

   this.treadeingbooks=[
    { id: 1, name: "The Alchemist Salman Becoming ", img: "https://img.freepik.com/free-vector/bike-guy-wattpad-book-cover_23-2149452163.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid", category: "Trending Books", author: "Paulo Coelho" },
    { id: 2, name: "Becoming Maharan SalmanAlchemist", img: "https://img.freepik.com/free-vector/professional-business-book-cover_23-2149490317.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid", category: "Trending Books", author: "Michelle Obama" },
    { id: 3, name: "The Da Vinci Code Becoming Maharan", img: "https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid", category: "Trending Books", author: "Dan Brown" },
    { id: 4, name: "The Silent Patient Crawdads Midnight", img: "https://img.freepik.com/premium-photo/book-titled-book-by-david-bock_1032785-23777.jpg?size=626&ext=jpg&ga=GA1.1.1033541315.1724185893&semt=ais_hybrid", category: "Trending Books", author: "Alex Michaelides" },
   
    { id: 5, name: "Where the Crawdads Sing Midnight ", img: "https://img.freepik.com/free-psd/online-book-store-print-template_23-2149043291.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Trending Books", author: "Delia Owens" },
    { id: 6, name: "The Midnight Library Patient Invisible", img: "https://img.freepik.com/free-psd/poster-mechanic-profession_23-2148520654.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Trending Books", author: "Matt Haig" },
    { id: 7, name: "The Invisible Life of Addie LaRue ", img:"https://fps.cdnpk.net/autopromos/search-left-tablet.svg", category: "Trending Books", author: "V.E. Schwab" },
    { id: 8, name: "Malibu Rising Midnight Invisible Addie", img: "https://img.freepik.com/free-psd/book-club-template-design_23-2151473417.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Trending Books", author: "Taylor Jenkins Reid" },
   ]


   this.Classic = [
    { id: 1, name: "Pride and Prejudice", img: "https://img.freepik.com/free-psd/world-book-day-celebration-poster-template_23-2150196937.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Classic Books", author: "Jane Austen" },
    { id: 2, name: "Moby Dick dkfjncakd", img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-book-spine-illustration_23-2149329287.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Classic Books", author: "Herman Melville" },
    { id: 3, name: "1984 skdjnsicjse eskd", img: "https://img.freepik.com/free-vector/vintage-background-design_1375-342.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Classic Books", author: "George Orwell" },
    { id: 4, name: "To Kill a Mockingbird", img: "https://img.freepik.com/free-vector/art-deco-style-wedding-invitation-template_23-2147941955.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Classic Books", author: "Harper Lee" },
    { id: 5, name: "The Great Gatsby ednwoieuqajwj", img: "https://img.freepik.com/premium-photo/minimal-elegant-book-design-covers-layouts-reading-card-inspirations_1191871-34654.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Classic Books", author: "F. Scott Fitzgerald" },
    { id: 6, name: "War and Peacen weqwoieqji3", img: "https://img.freepik.com/premium-photo/minimal-elegant-book-design-covers-layouts-reading-card-inspirations_1191871-34799.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Classic Books", author: "Leo Tolstoy" },
    { id: 7, name: "The Picture of Dorian Gray ", img: "https://img.freepik.com/premium-photo/minimal-elegant-book-design-covers-layouts-reading-card-inspirations_1191871-34649.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Classic Books", author: "Oscar Wilde" },
    { id: 8, name: "Jane Eyre wsdj3idjfr ali sdjwk", img: "https://img.freepik.com/free-vector/ornamental-invitation-design_23-2147545601.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Classic Books", author: "Charlotte Brontë" },
  ];


  this.Romance = [
    { id: 1, name: "Pride and Prejudice", img: "https://img.freepik.com/free-vector/elegant-love-book-cover-template_23-2148798559.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Romance", author: "Jane Austen" },
    { id: 2, name: "Outlander", img: "https://img.freepik.com/free-psd/international-women-s-day-poster-template_23-2148868502.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Romance", author: "Diana Gabaldon" },
    { id: 3, name: "The Notebook", img: "https://img.freepik.com/free-vector/vintage-bathtub-with-flowers-card_23-2147548012.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Romance", author: "Nicholas Sparks" },
    { id: 4, name: "Me Before You", img: "https://img.freepik.com/free-vector/watercolor-floral-card-valentine-s-day_23-2147589807.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Romance", author: "Jojo Moyes" },
    { id: 5, name: "The Fault in Our Stars", img: "https://img.freepik.com/premium-photo/romantic-love-story-book-cover-design_1004054-15177.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Romance", author: "John Green" },
    { id: 6, name: "Brida", img: "https://img.freepik.com/premium-photo/romantic-love-story-book-cover-design_1004054-15603.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Romance", author: "Paulo Coelho" },
    { id: 7, name: "Love in the Time of Cholera", img: "https://img.freepik.com/free-vector/love-card-with-heart-surrounded-by-flowers_23-2147563587.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Romance", author: "Gabriel García Márquez" },
    { id: 8, name: "The Rosie Project", img: "https://img.freepik.com/premium-photo/bppk-cover-design-ai-image_1209683-13257.jpg?ga=GA1.1.1033541315.1724185893&semt=ais_hybrid-rr-similar", category: "Romance", author: "Graeme Simsion" },
  ];
  }
  showMore: boolean = false; 
  showMoree: boolean = false; 
  showMoreee: boolean = false;
  showMoreeee: boolean = false;
  toggleShowMore() {
    this.showMore = !this.showMore; // تغيير الحالة عند الضغط
  }

  toggleShowMoree() {
    this.showMoree = !this.showMoree; // تغيير الحالة عند الضغط
  }
  toggleShowMoreee() {
    this.showMoreee = !this.showMoreee; // تغيير الحالة عند الضغط
  }
  toggleShowMoreeee() {
    this.showMoreeee = !this.showMoreeee; // تغيير الحالة عند الضغط
  }
}