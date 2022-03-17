import CardItem from '../cardItem/cardItem';
import './listProducts.css';


function ListProducts(){
    return(
        <div className='container'>
            
                <CardItem className="product" tittle='Vela slim una zona' price={700} />
                <CardItem className="product" tittle='Vela slim una zona' price={700} />
                <CardItem className="product" tittle='Vela slim una zona' price={700} />
                <CardItem className="product" tittle='Vela slim una zona' price={700} />
                <CardItem className="product" tittle='Vela slim una zona' price={700} />
                <CardItem className="product" tittle='Vela slim una zona' price={700} />

        </div>
    )
}

export default ListProducts;