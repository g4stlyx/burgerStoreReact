import {Data} from "../helpers/Data"
import "../styles/menu.css"
import MenuItem from "./MenuItem"

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Burgers</h1>
        <div className="menuList">
          {
            Data.map((menuItem,key)=>{
                return(
                  <MenuItem
                    key = {key} 
                    image = {menuItem.image}
                    name = {menuItem.name}
                    content = {menuItem.content}
                    price = {menuItem.price}
                  />
                )
            })
          }
        </div>
    </div>
  )
}

export default Menu
