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
        hardSoft(this.hardSoftPlayer,this.player)
        hardSoft(this.hardSoftDealer,this.dealer)
        
        
    //console.log("dealer count:");
    //console.log(hardSoftDealer);
    console.log("player count");
    //console.log(hardSoftHand);
        
        
        
    }
    
    hitPlayer() {
        this.player.push(newDeck.cards[0])
        newDeck.cards.shift()
        //console.log(this.player)
        let hardSoftPlayer = this.hardSoftPlayer
        
            if (typeof this.player[this.player.length-1][0] === "number") {
                
                hardSoftPlayer[0]+=this.player[this.player.length-1][0]
                hardSoftPlayer[1]+=this.player[this.player.length-1][0]
                    
            }
            else if (typeof this.player[this.player.length-1][0] === "string") {
                if (this.player[this.player.length-1][0] === "Ace") {
                   
                    hardSoftPlayer[0]+=11
                    hardSoftPlayer[1]+=1
                    
                }
                else {
                    
                    hardSoftPlayer[0]+=10
                    hardSoftPlayer[1]+=10
                    
                }
            } 
        
        //console.log(hardSoftPlayer);
        if (hardSoftPlayer[1] > 21) {
            return console.log("bust, dealer wins");
        }
    }

    hitDealer() {
        this.dealer.push(newDeck.cards[0])
        newDeck.cards.shift()
        //console.log(this.dealer)
        let hardSoftDealer = this.hardSoftDealer
         
            if (typeof this.dealer[this.dealer.length-1][0] === "number") {
                
                hardSoftDealer[0]+=this.dealer[this.dealer.length-1][0]
                hardSoftDealer[1]+=this.dealer[this.dealer.length-1][0]
                    
            }
            else if (typeof this.dealer[this.dealer.length-1][0] === "string") {
                if (this.dealer[this.dealer.length-1][0] === "Ace") {
                   
                    hardSoftDealer[0]+=11
                    hardSoftDealer[1]+=1
                    
                }
                else {
                    
                    hardSoftDealer[0]+=10
                    hardSoftDealer[1]+=10
                    
                }
            } 
        
        console.log(hardSoftDealer);
        if (hardSoftDealer[1] > 21) {
           return console.log("bust, player wins");
        }
        
    }
    stand() {
        let hardSoftDealer = this.hardSoftDealer
     while (hardSoftDealer[1] < 21 && this.hardSoftPlayer[1] < 21) {
        if (((hardSoftDealer[1] < 17 && hardSoftDealer[0] !== hardSoftDealer[1]) || (hardSoftDealer[0] === hardSoftDealer[1]) && hardSoftDealer[0] < 17 ) && /*(hardSoftDealer[0] < this.hardSoftPlayer[0] || hardSoftDealer[1] < this.hardSoftPlayer[1]) && */ this.hardSoftPlayer[0] <=21 ) {
            this.hitDealer()
            }
        else {
            if (hardSoftDealer[0] === hardSoftDealer[1] && this.hardSoftPlayer[0] === this.hardSoftPlayer[1]) {
                if (hardSoftDealer[0] > this.hardSoftPlayer[0]) {
                    return console.log("dealer wins");
                }
                else if (hardSoftDealer[0] < this.hardSoftPlayer[0]) {
                   return console.log("player wins");
                }
                else {
                    return console.log("push");
                }
            }
            else if (hardSoftDealer[0] === hardSoftDealer[1] && this.hardSoftPlayer[0] !== this.hardSoftPlayer[1]) {
                if (this.hardSoftPlayer[0] <= 21) {
                    if (hardSoftDealer[0] > this.hardSoftPlayer[0]) {
                       return console.log("dealer wins");
                    }
                    else if (hardSoftDealer[0] < this.hardSoftPlayer[0]){
                       return console.log("player wins");
                    }
                    else {
                        return console.log("push");
                    }
                }
                else {
                    if (hardSoftDealer[0] > this.hardSoftPlayer[1]) {
                      return console.log("dealer wins");
                    }
                    else if (hardSoftDealer[0] < this.hardSoftPlayer[1]){
                       return console.log("player wins");
                    }
                    else {
                        return console.log("push");
                    }
                }
            }  
            else if (hardSoftDealer[0] !== hardSoftDealer[1] && this.hardSoftPlayer[0] === this.hardSoftPlayer[1]) {
                if (hardSoftDealer[0] <= 21) {
                    if (hardSoftDealer[0] > this.hardSoftPlayer[0]) {
                      return  console.log("dealer wins");
                    }
                    else if (hardSoftDealer[0] < this.hardSoftPlayer[0]) {
                       return console.log("player wins");
                    }
                    else {
                        return console.log("push");
                    }
                }
                else {
                    if (hardSoftDealer[1] > this.hardSoftPlayer[0]) {
                       return console.log("dealer wins");
                    }
                    else {
                      return  console.log("player wins");
                    }
                }
            }
                
        }
        this.stand()
    }
    }
    
}


hand = new Player
   
/* let hit = document.querySelector(".hit")
let stand = document.querySelector(".stand")

hit.addEventListener("click",hand.hitPlayer())
stand.addEventListener("click",hand.stand())
*/

    
    
    




//console.log(newDeck.cards)

//console.log("dealer hand");
//console.log(hand.dealer)
//console.log("player hand");
//console.log(hand.player)
//hand.hitDealer()
//console.log("player hits");
//hand.hitPlayer()
console.log("player stands,dealers move");
//hand.hitPlayer()
hand.stand()

//console.log(hand.dealer)
//console.log(newDeck.cards)
//hand.hit()

//console.log(hand.player)
//console.log(hand.stand())
