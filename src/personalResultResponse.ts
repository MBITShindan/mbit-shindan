type total = { 
                E:number;
                S:number;
                T:number;
                J:number;
            }

export default function personalResultResponse (total:total | undefined){
    let response:string = "";
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if(total != undefined){
        if(total.E == 0){
            if(randomNumber >= 3){
                response += "E";
            }
            else{
                response += "I";
            }
        }else{
            if(total.E >= 1){
                response += "E";
            }
            else if(total.E < 0){
                response += "I"
            }
        }
        
        if(total.S == 0){
            if(randomNumber >= 3){
                response += "S";
            }
            else{
                response += "N";
            }
        }else{
            if(total.S >= 1){
                response += "S";
            }
            else if(total.S < 1){
                response += "N"
            }
        }

        if(total.T == 0){
            if(randomNumber >= 3){
                response += "T";
            }
            else{
                response += "F";
            }
        }else{
            if(total.T >= 1){
                response += "T";
            }
            else if(total.T < 1){
                response += "F"
            }
        }

        if(total.J == 0){
            if(randomNumber >= 3){
                response += "J";
            }
            else{
                response += "P";
            }
        }else{
            if(total.J >= 1){
                response += "J";
            }
            else if(total.J < 1){
                response += "P"
            }
        }

    }

    return response;
}
