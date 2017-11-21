import React from 'react';

import myImage from "../../../images/Cookie_Monster.jpg";

class About extends React.Component{
    render(){
        return <div> 
            O nas 
            <p>
            Nie podoba mi się twój bihejwior, zapomnij o urlopach 
            i podwyżkach, ale jak coś to wiesz, zawsze możesz kupić 
            sobie kota. Ciężka sprawa, bo kołczing to coś, czego wam trzeba, 
            dlatego zapomnijmy na chwilę o gajdlajnsach i zróbmy to po swojemu. 
            ASAP. Nie mamy akceptu, czlendż jest taki pasjonujący, dlatego 
            trzeba obrać nowy target. Zresztą chyba czytałeś w njusleterze: 
            będziesz lidował w tym projekcie.
            </p>
            <div  style={{backgroundImage: `url(${myImage})`, height: '200px', width: '200px' }}>
            </div>
            <div  style={{backgroundImage: `url("./images/Cookie_Monster.jpg")`, backgroundSize: '20%', height: '200px', width: '200px' }}>
            </div>
            <div className="monsterOne" ></div>
        </div>;
    }
}

export {About}