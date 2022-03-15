import ControlPs5 from '../../assets/images/controle-ps5.jpg'
import './ListProducts.css'

const ListProduct = () => {
  return (
    <div className="listProduct">
      <div className="Product">
        <h3>Controle PS5</h3>
        <p className="descriptionProduct">
          Controle oficial do Play Station 5
          <img alt="controle ps5" src={ControlPs5}></img>
        </p>

        <div className="price">R$ 399,90</div>
      </div>
    </div>
  )
}

export default ListProduct
