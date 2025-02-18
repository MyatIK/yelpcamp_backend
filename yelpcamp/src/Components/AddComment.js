import Header from './Header';
import Header1 from './Header1';
import {Link} from 'react-router-dom';

function AddComment(){
    return(
        <>
            <Header/>
            <Header1/>
            
                <div className='ml-5 mr-5 md:ml-40 md:mr-40 lg:ml-60 lg:mr-60'>
                    <p className="font-bold text-3xl">Add New Comment</p>
                    <p className='mt-8 mb-4'>Description</p>
                    <textarea className="p-5 rounded bg-stone-100 w-full h-full" type="text" placeholder="This was probably the best camp I've visited this past year, definitely recommend visiting any time soon."></textarea>
                    <Link to="/IndividualCamp"><button className='bg-black text-white w-full p-3 rounded mt-4'>Post Comment</button></Link>
                </div>
                
        </>
    )
}

export default AddComment;