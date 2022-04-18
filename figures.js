import Card from "./card.js"
export default class Figures{
    static number = 10
    static get(number){
        switch (number) {
            case 0: return new Card('./images/bootstrap.png')
            case 1: return new Card('./images/css.png')
            case 2: return new Card('./images/electron.png')
            case 3: return new Card ('./images/firebase.png')
            case 4: return new Card('./images/html.png')
            case 5: return new Card('./images/javascript.png')
            case 6: return new Card('./images/jquery.png')
            case 7: return new Card('./images/mongo.png')
            case 8: return new Card('./images/node.png')
            case 9: return new Card('./images/react.png')
            default:
                return null
        }
    }
}
