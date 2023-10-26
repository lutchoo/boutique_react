export function Product({product}){
    return ( 
    <div className="card mt-5 m-5 " style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{product.nom}</h5> 
            <img className="card-img-top pb-5" src={product.image} alt="" />
            <h6 className="card-subtitle mb-2 text-body-secondary">{product.prix} eur</h6>
            <h6>{product.categorie.nom}</h6>
            
        </div>
    </div>
    )
}