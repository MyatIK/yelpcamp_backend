import Header from './Header';
import Header1 from './Header1';

function AddCamp(){
    return(
        <>
        <Header/>
        <Header1/>
        <div>
            <form className='ml-5 mr-5 md:ml-40 md:mr-40 lg:ml-60 lg:mr-60' method="POST" action="/campground">
                <fieldset>
                    <legend className="font-bold text-3xl mb-5">Add New Campground</legend>
                    <label for="name">Campground Name</label>
                    <input type="text" id="name" placeholder='Seven Sisters Waterfall' className='rounded bg-stone-100 p-2 w-full mt-3'/>
                    <label for="price" className='mt-3'>Price</label>
                    <input type="number" placeholder='$149' id="price" className='bg-stone-100 w-full p-2 mt-3 rounded'/>
                    <label for="image" className='mt-3'>Image</label>
                    <input type="url" id="image" placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy/dayhike.html" className='bg-stone-100 p-2 mt-3 w-full'/>
                    <label className='mt-3' for="Description">Description</label>
                    <textarea className='bg-stone-100 rounded mt-3 w-full h-3/5 p-5' id="Description" type="text" placeholder='The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 meters. The water is located along the Geirangerfjoden in Stranda Municipality in More og Romsdal county, Norway.'></textarea>

                </fieldset>

            </form>

        </div>

        </>
    )
}

export default AddCamp;