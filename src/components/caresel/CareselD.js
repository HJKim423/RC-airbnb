import styled from 'styled-components';
import dummy from '../../db/data.json';

function CareselD(props){
    return(
        <CareselDstyle className ="slideContainerD" //캐러셀
         style={{transform: `translateX(${-300 * props.direction}px)`}}>
                <img src={props.img}></img>
                {dummy.dlistCaresel.map((slide,index)=>(
                    <img key={index} src={slide.img}></img>
                ))}
        </CareselDstyle>
    )
}

const CareselDstyle = styled.div`

    display: flex;
    background-color: transparent;
    transition: all 0.3s ease;


img{
    width:300px;
    height:200px;
    object-fit:cover;
    border-radius:10px;
}
`;

export default CareselD;