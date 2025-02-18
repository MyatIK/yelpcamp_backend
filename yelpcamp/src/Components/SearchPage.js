import Header from './Header.js';
import Header1 from './Header1.js';
import Logo from '../Assets//Logo.svg';
import MountUlap from '../Assets/Camp Images/Compressed Images/Mount Ulap.jpg';
import CalaguasIslands from '../Assets/Camp Images/Compressed Images/Calaguas Island.jpg';
import OnayBeach from '../Assets/Camp Images/Compressed Images/Onay Beach.jpg';
import SevenSister from '../Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg';
import LatikRiverside from '../Assets/Camp Images/Compressed Images/Latik Riverside.jpg';
import BuloySprings from '../Assets/Camp Images/Compressed Images/Buloy Springs.jpg';
import CampCard from './campCard.js';
import {Link} from 'react-router-dom';

function SearchPage(){

    const camps=[
        {   src: MountUlap,
            name: "Mount Ulap",
            alt: "Mount Ulap",
            description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
        },
        {   src:CalaguasIslands,
            name: "Calaguas Islands",
            alt: "Calaguas Islands",
            description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
        },
        {   src: OnayBeach,
            name: "Onay Beach",
            alt: "Onay Beach",
            description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
        },
        {   src: SevenSister,
            name: "Seven Sister",
            alt: "Seven Sister",
            description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
        },
        {   src: LatikRiverside,
            name: "Latik Riverside",
            alt: "Latik Riverside",
            description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
        },
        {   src: BuloySprings,
            name: "Buloy Springsp",
            alt: "Buloy Springs",
            description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon."
        }

    ]
    return(
        <>
            <Header/>
            <Header1/>
            <div className="mt-5 bg-stone-100 mb-10 ml-5 mr-5 p-5 lg:p-10 ml-10 mr-10 mb-20">
                <p className="text-3xl">Welcome to YelpCamp!</p>
                <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
                <input type="text" className="rounded border-2 mr-5 p-2" placeholder="Search for camps" />
                <button className="bg-black text-white mt-3 rounded p-2">Search</button>
                <Link to="/addcamp"><p className="mt-3 underline">Or add your own campground</p></Link>
            </div>

            <div className="grid grid-cols-1 ml-5 mr-5 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 ml-10 mr-10 gap-5">
                <CampCard camp={camps}/>


            </div>

            <img className="m-10" src={Logo} alt="YelpCamp Logo"></img>




        </>
    )

}

export default SearchPage;