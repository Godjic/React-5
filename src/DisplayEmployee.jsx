import React from 'react';

//La valeur de ta const qui est "employee" te permets de récuprer les valeurs de ton API
//Quand tu regardes sur le site de L'API tu vois que le fichier renvoie un " quote" "image" "character"
//Donc en reprenant la valeur de ta const tu vas dire que ta valeur sera égal à quote exemle : employee.quote
const DisplayEmployee = ({ employee }) => {
    return (
        <div className="DisplayEmployee">

            <ul>
                <h1> {employee.character}  </h1>
                <h2></h2>{employee.quote}
                <li>

                </li>

                <img src={employee.image} alt="picture" />


            </ul>
        </div>
    );
};

export default DisplayEmployee;