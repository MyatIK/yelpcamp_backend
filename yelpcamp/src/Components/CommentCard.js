
function CommentCard(props){
    return(
        <>
            {props.comment.map((data)=>(
                <div>
                    <div className='flex mb-3'>
                        <p className='font-bold'>{data.name}</p>
                        <p>{data.time}</p>
                    </div>

                    <p className="mb-3">{data.comment}</p>

                </div>
            
                ))
            }
                        
        </>
    )
}

export default CommentCard;