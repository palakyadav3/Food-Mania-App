const Shimmer=()=>{
    return (
        <div className="restaurant-List">
            {Array(10)
            .fill("")
            .map((e, index)=>
            <div key={index} className="shimmer-card">
                <div className="card-img">
                
                </div>
                <div className="card-details">
                <h3 className="card-name"></h3>
                <h4 className="card-cuisines"> </h4>
                <h4></h4>
                </div>
            </div>)}
        </div>
    
)


};

export default Shimmer;