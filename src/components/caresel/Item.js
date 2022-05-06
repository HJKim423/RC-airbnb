
import React, { useEffect, useState } from "react";

import dummy from '../../db/data.json';
import ItemOne from './ItemOne';


function Item(){
    

    return(
        <section className="section">
             {dummy.items.map((item,index) =>( 
                <div key={index}>
                    <ItemOne item={item} />
                </div>
                
            ))}
        </section>
        
        
    )
}


export default Item;