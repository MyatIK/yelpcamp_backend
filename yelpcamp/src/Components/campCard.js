import {Link} from 'react-router-dom';

function CampCard (props){
    const camp=props.camp;
    return(
        <>
            {camp.map((data)=>(

            <div className="border-2 overflow-hidden rounded">
                    <img className="w-full px-3 pt-3" src={data.src} alt={data.alt}/>
                    <div>
                        <p className="font-bold text-l ml-3">{data.name}</p>
                        <p className="text-gray-700 pb-3 ml-3">{data.description}</p>
                        <Link to="/IndividualCamp"><button className="w-full  h-10 border-2 rounded font-bold text-center">View Campground</button></Link>
                    </div>
                    

            </div>

            ) )
            

            }
        </>    
    )
}

export default CampCard;