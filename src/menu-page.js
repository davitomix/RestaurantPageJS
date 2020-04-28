import DomObj from './dom-utils';
import Burger1 from './img/burger-1.jpg';
import Burger2 from './img/burger-2.jpg';

class MenuObject {
  constructor() {
    this.domMultiplexor = new DomObj();
    this.dishesInfo = [
      {
        img: Burger1,
        head: 'Big Cheese',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger2,
        head: 'Clasic Deal',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger1,
        head: 'Famous Atlantic',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger2,
        head: 'Famous Star with Chesse',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger1,
        head: 'Super Star with Chesse',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger2,
        head: 'Western Bacon Cheese Burger',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger1,
        head: 'Jalapeño',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger2,
        head: 'Doble Jalapeño',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger1,
        head: 'Teriyaki Burger',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
      {
        img: Burger2,
        head: 'The Big Atlantic',
        body: 'Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun.',
      },
    ];
    this.dishCtnr = document.createElement('div');

    this.dishCtnr.id = 'dish-container';

    this.dishesInfo.forEach(({ img, head, body }) => {
      this.dish = document.createElement('div');
      this.dish.className = 'dish';
      this.dishCtnr.appendChild(this.dish);

      this.imgElem = document.createElement('img');
      this.imgElem.src = img;
      this.dish.appendChild(this.imgElem);

      this.headElem = document.createElement('h3');
      this.headElem.innerText = head;
      this.dish.appendChild(this.headElem);

      this.bodyElem = document.createElement('p');
      this.bodyElem.innerText = body;
      this.dish.appendChild(this.bodyElem);
    });
  }

  getCtnr() {
    return [this.dishCtnr];
  }

  injectMenuPage() {
    this.contents = this.contents || this.getCtnr();
    this.domMultiplexor.setContent(this.contents);
  }
}

export default MenuObject;