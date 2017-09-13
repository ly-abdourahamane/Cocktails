import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Cocktail} from '../cocktail.model';
import {Ingredient} from "../ingredient.model";

@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'mojito',
      img: 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg',
      desc: 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.',
      ingredients: [{name: 'perrier', quantity: 1}, {name: 'menthe', quantity: 1}]
    },
    {
      name: 'martini',
      img: 'data:image/jpeg;base64,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',
      desc: 'Le martini ou le Dry martini est un cocktail à base de gin et de vermouth blanc sec. Il est connu en fiction comme en atteste son omniprésence dans la littérature et le cinéma, particulièrement aux États-Unis, d’où il est originaire',
      ingredients: [{name: 'citron', quantity: 1}, {name: 'eau', quantity: 1}]
    },
    {
      name: 'daiquiri',
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEgASAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAABAAMEBwIFBgj/xAA8EAABAwMBBAYGBwkBAAAAAAABAAIDBAURBhITITFBUWFxgaEHIzJikbEVIiQzUnKCFkRVg5KTwdHwFP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgUDBP/EACIRAAIBAgYDAQAAAAAAAAAAAAABAgMREhMUITFRBAUVkf/aAAwDAQACEQMRAD8ApQoFZItY572sY0uc4gNa0ZJPUFJQ0UFvotK3R9hnvsjYIbdDLuXSvlBy/gMBrck8x0KPT2uifC2SovlHBtZw0xTOPPHQzsQI1Keo6SorqqKlpInSzyu2WMbzJUupoaCEjd3aOoBGdqKB4A/qAVh+hC30hvNzqxK2WampvVgt2S0knJ49y51qmXByQmRqT0R1hg+3XGGGpLc7pozs95PPyXIap0pcdNTMFa1r4Zfu5ozlpPUeo9nwyvRj2tdSh+2TJyPHP/dK5PXlCyv0zWNm3eY2BzC08Qc8D/n49ayqXn1FUSm7piwuO97lAJIlJbYx9bnRtLT1uqrXS1kjo4ZqhrHOacHJ5YPXnAWmWUUskMrJYXlkjHBzHDm0g5BUNbFXPT0enbRHZvod9Jv6DebwxTyOfl2c5JKi/sdpkDDbBb+WPuQtdobXtu1LSxQVU8VLdgA18DzsiV34o88wermPNdeRgkHgV5XiXIjnTo7TX8Bt/wDZCl2ux2i01BnttspqaUjZLombOR1HC2pblN1EkFLA+oqpo4YGDLpJHhrWjtJUNN7MLjNTPR00LnTPjg7XOwFVvpJ1pbxRTWq1PE08rdiWZvJo6h5LW+lXXdPe2CzWZ+3Qxv2p58YEzhyDfdHPPScdXGtSlT8FYscvwGwFBEoLREPpLHKSkYiV12kdf3jT1XA2Wqmq7a1wEtLK7b+p07BPFpxywcLkEjyQ0nyB6F1zr22Wix1klhnM9xE4pm7YOI3EEl2CMEANPiQqIu95uV5n310rp6p+cjePyG9w5DwCl6heJXulawR710chaB0mJp+ZPxWlUwikgAUCiUCughFBEoIAzz2o57VaEGnacc6GMfygp0Ngphj7NEP0hZT9nBcRPXpZdlQZHWjsuI4NJ7grpFkh4epiHdsrCotdJTt9Zuw7GdgOaCR4/NJezTdlAeltyzjNY2U0lqo6pgc4yCBpbjkREQfl5LkG0tQ/2YJD+kq9ro621dI8RyNY1ojewSyN2j9YtwOPPZIOOZ4qI6000DjHLkPHNp4EeGFOunSjaSuPIjN3TKYbbq13Kmk+CzbaK937s5XA6gpj7MZ7yUy6hpScBhz+VL6cnxEelj2VR9CV3TDjvKStCSgpwfZST+hU6DTR7JbJq7Hq5sHo2mZTkVRcw7E8sTm+6wpJLMk7bHoW5jVUUVdIzfOkiYODhC0Mce3awSnobRDHBJDTkhjweDiDtH3uGD4hFJVGtOKshSpp7sVgstRQ3Cmnnhoo44n5L6dkbZMYxgFsTT1dPQtrcKV1ZMd5JiFsm8jbt/WYfzYzg9IJIRSXXU1JckZMEM/+KFmcuDuJPHPDzTcjIW/h8/8AaSS5HQiSGDPIeGEEkkwP/9k=',
      desc: 'Le daïquiri est un cocktail dont les ingrédients principaux sont le rhum blanc, le jus de lime et le sucre. Il est originaire de Cuba. Wikipédia',
      ingredients: [{name: 'tequila', quantity: 1}, {name: 'citron', quantity: 1}]
    }
  ]);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() {
  }

  getCocktail(index: number): Cocktail {
    return this.cocktails.value[index];
  }

  addCocktail(cocktail: Cocktail) {
    const cocktails = this.cocktails.value.slice();
    cocktails.push({name: cocktail.name, img: cocktail.img, desc: cocktail.desc,
      ingredients: cocktail.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))});
    this.cocktails.next(cocktails);
  }
}
