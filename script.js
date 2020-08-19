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
      
        let hardSoft = [0,0]
        for (let rank of this.dealer) {
            if (typeof rank[0] === "number") {
                
                hardSoft[0]+=rank[0]
                hardSoft[1]+=rank[0]
                    
            }
            else if (typeof rank[0] === "string") {
                if (rank[0] === "Ace") {
                   
                    hardSoft[0]+=11
                    hardSoft[1]+=1
                    
                }
                else {
                    
                    hardSoft[0]+=10
                    hardSoft[1]+=10
                    
                }
            } 
        }
        console.log(hardSoft);

        let dealerTurn = () => {
            if (hardSoft[0] === hardSoft[1]) {
                console.log("no aces");
            }
            
        }
        dealerTurn()
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
