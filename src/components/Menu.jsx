import React from 'react'
import { menu } from "../Data"

const Menu = () => {
  return (
    <>
    <section className='menu' id='menu'>
        <h1 className='heading'>
            our <span>menu</span>

        </h1>
        <div className='box-container'>
            {menu.map((item,index)=>(
                <div className='box'>
                    <img src={item.img} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className='price'>
                        $15.99 <span>20.99</span>
                    </div>
                    <button className='btn'>add to cart</button>

                </div>

            ))}




        </div>
    </section>
      
    </>
  )
}

export default Menu
