
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import dummy from '../../db/data.json';
import ItemOne from './ItemOne';


function Item(){

    return(
        <section className="section">
             {dummy.items.map((item,index) =>( 
                <div key={index}>
                    {/* <Link to={`/cPage/${item.id}`}> */}
                        <ItemOne item={item} link={item.id} />
                    {/* </Link> */}
                    
                </div>
                
            ))}
        </section>
        
        
    )
}


export default Item;