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
        this.hardSoftPlayer = [0,0]
        this.hardSoftDealer = [0,0]
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
        let hardSoft = (array,hand) => {
            let hardSoftHand = array
            for (let rank of hand) {
                if (typeof rank[0] === "number") {
            
                    hardSoftHand[0]+=rank[0]
                    hardSoftHand[1]+=rank[0]
                    
                }
                else if (typeof rank[0] === "string") {
                    if (rank[0] === "Ace") {
                   
                        hardSoftHand[0]+=11
                        hardSoftHand[1]+=1
                    
                    }
                    else {
                    
                        hardSoftHand[0]+=10
                        hardSoftHand[1]+=10
                    
                    }
                 } 
            }
            console.log(hardSoftHand)
        }
        console.log("player count");
        hardSoft(this.hardSoftPlayer,this.player)
        console.log("dealer showing");
        //console.log(this.dealer[0])
        hardSoft(this.hardSoftDealer,this.dealer)
        
    }
    
    hit(hand,array) {
        hand.push(newDeck.cards[0])
        newDeck.cards.shift()
        
        let updatedHand = array
        
            if (typeof hand[hand.length-1][0] === "number") {
                
                updatedHand[0]+=hand[hand.length-1][0]
                updatedHand[1]+=hand[hand.length-1][0]
                    
            }
            else if (typeof hand[hand.length-1][0] === "string") {
                if (hand[hand.length-1][0] === "Ace") {
                   
                    updatedHand[0]+=11
                    updatedHand[1]+=1
                    
                }
                else {
                    
                    updatedHand[0]+=10
                    updatedHand[1]+=10
                    
                }
            } 
        
        if (updatedHand[1] > 21) {
            if (hand === this.player) {
                return console.log(`bust, dealer wins`);
            }
            else {
                return console.log("bust, player wins");
            }
        }
        console.log(updatedHand);
    }

    stand() {
        let dealer = this.hardSoftDealer
        let player = this.hardSoftPlayer
        let whoWins = (dealerIndex=0,playerIndex=0) => {
            
            if (dealer[dealerIndex] > player[playerIndex]) {
                return console.log("dealer wins");
            }
            else if (dealer[dealerIndex] < player[playerIndex]) {
                return console.log("player wins");
            }
            else {
                return console.log("push");
            }
        }
        
    
     
        if ((((dealer[0] <= 17 || (dealer[1] < 17 && dealer[0] > 21)) && dealer[0] !== dealer[1]) || (dealer[0] === dealer[1]) && dealer[0] < 17 )) {
            this.hit(this.dealer,this.hardSoftDealer)
            
            this.stand()
            }
        else {
            if (dealer[1] < 21) {
            
            if (dealer[0] === dealer [1] && player[0] === player[1]) {
                whoWins()
            }
            else if (dealer[0] !== dealer [1] && player[0] !== player[1]) {
                if (dealer[0] > 21 && player[0] > 21) {
                    whoWins(1,1)
                }
                else if (dealer[0] < 21 && player[0] < 21) {
                    whoWins()
                }
                else if (dealer[0] > 21 && player[0] < 21) {
                    whoWins(1,0)
                }
                else {
                    whoWins(0,1)
                }
                
            }
            else if (dealer[0] === dealer [1] && player[0] !== player[1]) {
                if (player[0] > 21) {
                    whoWins(0,1)
                }
                else {
                    whoWins()
                }
                
            }
            else {
                if (dealer[0] > 21) {
                    whoWins(1,0)
                }
                else {
                    whoWins()
                }
            }
            }
        }
      
    
    
}

}
    



hand = new Player


let hit = document.querySelector(".hit")
let stand = document.querySelector(".stand")

hit.addEventListener("click",() => {
    hand.hit(hand.player,hand.hardSoftPlayer)})
stand.addEventListener("click",() => {
    hand.stand()})
 

/* console.log("player hits");
hand.hit(hand.player,hand.hardSoftPlayer)
console.log("player stands,dealers move");

hand.stand()

*/

