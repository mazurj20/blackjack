class Deck {
    constructor() {
        this.cards = []

        const suit = ["hearts", "spades", "clubs", "diamonds"]
        const rank = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"]

        for (let i of suit) {
            for (let j of rank) {
                this.cards.push([j,i])
            }
        }
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}


newDeck = new Deck()
newDeck.shuffle()
console.log(newDeck.cards)