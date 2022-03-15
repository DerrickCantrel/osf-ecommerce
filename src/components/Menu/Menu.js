import './Menu.css'

const Menu = () => {
  return (
    <>
      <nav>
        <strong>categorias</strong>
        <ul className="Menu">
          <li>
            <a href="#">Eletrônicos</a>
          </li>
          <li>
            <a href="#">Eletrodomésticos</a>
          </li>
          <li>
            <a href="#">Roupas</a>
          </li>
          <li>
            <a href="#">Livros</a>
          </li>
          <li>
            <a href="#">Casa</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
