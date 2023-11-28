

let persona = {
    
    nome : "Giovanni",
    cognome : "Rossi",
    età : "20",
    
    saluto(){
        
        console.log("Ciao mi chiamo " + this.nome + " " + this.cognome + " ed ho " + this.età + " anni.")
        
    }
    
    
}

//persona.saluto()

let agenda = {
    
    contatti : {
        
        "Giovanni" : "123456790",
        "Maria" : "1234750123",
        "Fabio" : "372891032",
        
    },
    
    mostraContatti() {
        
        console.log(Object.keys(this.contatti))
        
    },
    
    mostraContatto(nomeDelContatto){
        
        let contatto = this.contatti[nomeDelContatto]
        
        if (contatto) {
            
            return console.log("Il numero di " + nomeDelContatto + " è: " + contatto )
            
        } else {
            
            return console.log("Contatto " + nomeDelContatto + " non trovato.")
            
        }
        
        
    },
    
    eliminaContatto(nomeDelContatto){
        
        delete this.contatti[nomeDelContatto]
        
    },
    
    aggiungiContatto(nomeDelContatto,numeroDelContatto){
        
        
        this.contatti[nomeDelContatto] = numeroDelContatto;
        
        
    },
    
    modificaContatto(nomeDelContatto,nuovoNome,nuovoNumero){
        
        if (this.contatti[nomeDelContatto]) {
            
            if (!this.contatti[nuovoNome]) {
                
                if (!nuovoNome) {
                    
                    this.contatti[nomeDelContatto] = nuovoNumero;
                    
                    
                } else if (!nuovoNumero) {
                    
                    let vecchio_numero = this.contatti[nomeDelContatto];
                    delete this.contatti[nomeDelContatto];
                    
                    this.contatti[nuovoNome] = vecchio_numero;
                    
                } else if (nuovoNome && nuovoNumero ) {
                    
                    delete this.contatti[nomeDelContatto];
                    this.contatti[nuovoNome] = nuovoNumero;
                    
                }
            } else {
                
                return console.log("Esiste già un contatto chiamato così.")
            }
            
        } else {

            return console.log("Il contatto non esiste.")

        }
    }   
}




