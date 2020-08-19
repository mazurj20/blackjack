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

    /* deal() {
        let dealer = []
        let player = []
        for (let i=0;i<4;i++) {
            if (i % 2 === 0) {
                player.push(this.cards[0])
                this.cards.shift()
            }
            else {
                dealer.push(this.cards[0])
                this.cards.shift()
            }
            
        }
        console.log(dealer)
        console.log(player)
    } */
}

newDeck = new Deck()
newDeck.shuffle()


class Player {
    constructor() {
        this.player = []
        this.dealer = []
        for (let i=0;i<4;i++) {
            if (i % 2 === 0) {
                this.player.push(newDeck.cards[0])
                newDeck.cards.shift()
            }
            else {
                this.dealer.push(newDeck.cards[0])
                newDeck.cards.shift()
            }  
        }
    }
    hit() {
        this.player.push(newDeck.cards[0])
        newDeck.cards.shift()
    }
    stand() {
        let dealerSum = 0
        let softSum = 1
        for (let rank of this.dealer) {
            if (typeof rank[0] === "number") {
                dealerSum+=rank[0]
                
            }
            else if (typeof rank[0] === "string") {
                if (rank[0] === "Ace") {
                    let hardSoft = []
                    softSum+=dealerSum
                    dealerSum+=11
                    hardSoft.push(dealerSum,softSum)
                    console.log(hardSoft);
                    
                }
                else {
                    dealerSum+=10
                    
                }
            }
            
        }
        console.log(dealerSum);
        
    }
}



//console.log(newDeck.cards)
hand = new Player
//console.log(hand.player)
console.log(hand.dealer)
//console.log(newDeck.cards)
//hand.hit()
//console.log(hand.player)
console.log(hand.stand())