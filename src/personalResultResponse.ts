type total = { totalPoint: {
                    E:number;
                    S:number;
                    T:number;
                    J:number;
                }
            }

const i:total = {totalPoint:{E:-3,S:-1,T:-1,J:-2}}

export default function personalResultResponse (total:total){
    let response:string = "";
    const responseFilter:number[] = [];
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if(total.totalPoint.E == 0){
        if(randomNumber >= 3){
            response += "E";
        }
        else{
            response += "I";
        }
    }else{
        if(total.totalPoint.E >= 1){
            response += "E";
        }
        else if(total.totalPoint.E < 0){
            response += "I"
        }
    }
    
    if(total.totalPoint.S == 0){
        if(randomNumber >= 3){
            response += "S";
        }
        else{
            response += "N";
        }
    }else{
        if(total.totalPoint.S >= 1){
            response += "S";
        }
        else if(total.totalPoint.S < 1){
            response += "N"
        }
    }

    if(total.totalPoint.T == 0){
        if(randomNumber >= 3){
            response += "T";
        }
        else{
            response += "F";
        }
    }else{
        if(total.totalPoint.T >= 1){
            response += "T";
        }
        else if(total.totalPoint.T < 1){
            response += "F"
        }
    }

    if(total.totalPoint.J == 0){
        if(randomNumber >= 3){
            response += "J";
        }
        else{
            response += "P";
        }
    }else{
        if(total.totalPoint.J >= 1){
            response += "J";
        }
        else if(total.totalPoint.J < 1){
            response += "P"
        }
    }

    console.log(response);
}
