    
    
    
    
    
    
    function cambiaColore(){
        
        let p1 = document.getElementById("p1");
        let p2 = document.getElementById("p2");
        let p3 = document.getElementById("p3");
        
        rng = Math.floor(Math.random() * 256);
        
        //rgb(81, 81, 81)
        
        
        
        p1.style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        p2.style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        p3.style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        
        
    }
    
    function grassetto(){
        
        let p1 = document.getElementById("p1");
        let p2 = document.getElementById("p2");
        let p3 = document.getElementById("p3");
        
        p1.style.fontWeight = "900";
        p2.style.fontWeight = "900";
        p3.style.fontWeight = "900"
        
        
    }
    
    function nascondi(){
        
        let p1 = document.getElementById("p1");
        let p2 = document.getElementById("p2");
        let p3 = document.getElementById("p3");
        
        if (p1.style.display == "none") {
            
            p1.style.display = "block";
            p2.style.display = "block";
            p3.style.display = "block";
            
            
            
        } else {
            
            p1.style.display = "none";
            p2.style.display = "none";
            p3.style.display = "none";
            
        }
    }