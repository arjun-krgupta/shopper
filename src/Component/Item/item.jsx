import React from 'react';
import React from 'react';
import './item.css'
import mobile_product from '../All_product';
import { Link } from 'react-router-dom';

import l1 from '../Assets/L1.jpg'
import l2 from '../Assets/L2.jpg'
import l3 from '../Assets/L3.jpg'
import l4 from '../Assets/L4.jpg'
import l5 from '../Assets/L5.jpg'
import l6 from '../Assets/L6.jpg'
import m1 from '../Assets/men/Hoodie.jpeg'
import m2 from '../Assets/men/T-shirt.jpeg'
import m3 from '../Assets/men/jeans.jpeg'
import m4 from '../Assets/men/lower.jpeg'
import m5 from '../Assets/men/pant.jpeg'
import m6 from '../Assets/men/shirt.jpeg'
import w1 from '../Assets/women/lahanga.jpeg'
import w2 from '../Assets/women/suit.jpeg'
import w3 from '../Assets/women/one-piece.jpeg'
import w4 from '../Assets/women/jeans.jpeg'
import w5 from '../Assets/women/shirt.jpeg'
import w6 from '../Assets/women/t-shirt.jpeg'

function item(props) {
    return (
        <>
          <div className="Product">
        <h2>Our Products</h2>
        {/* Mobile */}
        {/* <div className="mobile-area">
          <div className="mobile-upper">
            <h3>Mobiles</h3>
            <a href="">View all</a>
          </div>
          <div className="moblie-item">
            <div className="card1">
              <img src={r1} alt="" />
              <div>Realme C53</div>
              <div>₹18,000 <del>20,000</del></div>
            </div>
            <div className="card1">
              <img src={r2} alt="" />
              <div>Realme 11 5G</div>
              <div>₹16,000</div>
            </div>
            <div className="card1">
              <img src={r3} alt="" />
              <div>Realme narzo N53</div>
              <div>₹21,000</div>
            </div>
            <div className="card1">
              <img src={r4} alt="" />
              <div>Realme C67 5G</div>
              <div>₹22,000</div>
            </div>
            <div className="card1">
              <img src={r5} alt="" />
              <div>Realme C51</div>
              <div>₹16,000</div>
            </div>
            <div className="card1">
              <img src={r6} alt="" />
              <div>Realme C53</div>
              <div>₹14,000</div>
            </div>
          </div>
        </div> */}
            
            <div className="mobile-area">
              <div className="mobile-upper">
                <h3>Moblie Category</h3>
                <Link to='/' >View all</Link>
              </div>
              <div className="mobile-card">
              {
                mobile_product.map((val,ind)=>
                  <div className="mobile-inner" key={ind} >
                <img src={val.image} alt="" />
                <p>{val.name}</p>
                <div className="item-price">
                  <div className="new-price">{val.new_price}</div>
                  <div className='old-price'>{val.old_price}</div>
                </div>
              </div>
                
                )
              }
              </div>
            </div>

            {/* laptop */}
        <div className="laptop-area">
          <div className="laptop-upper">
            <h3>Laptop</h3>
            <a href="">View all</a>
          </div>
          <div className="laptop-item">
            <div className="card1">
              <img src={l1} alt="" />
              <div>Hp laptop i3</div>
              <div>₹30,000 <del>20,000</del></div>
            </div>
            <div className="card1">
              <img src={l2} alt="" />
              <div>Hp laptop i5</div>
              <div>₹45,000</div>
            </div>
            <div className="card1">
              <img src={l3} alt="" />
              <div>Del laptop </div>
              <div>₹51,000</div>
            </div>
            <div className="card1">
              <img src={l4} alt="" />
              <div>Neo laptop series</div>
              <div>₹42,000</div>
            </div>
            <div className="card1">
              <img src={l5} alt="" />
              <div>Lenovo laptop</div>
              <div>₹36,000</div>
            </div>
            <div className="card1">
              <img src={l6} alt="" />
              <div>Lenovo</div>
              <div>₹34,000</div>
            </div>
          </div>
        </div>
        {/* men */}
        <div className="men-area">
          <div className="men-upper">
            <h3>Men Collection</h3>
            <a href="">View all</a>
          </div>
          <div className="men-item">
            <div className="card1">
              <img src={m1} alt="" />
              <div>Hoodie</div>
              <div>₹1400</div>
            </div>
            <div className="card1">
              <img src={m2} alt="" />
              <div>T-Shirt</div>
              <div>₹800</div>
            </div>
            <div className="card1">
              <img src={m3} alt="" />
              <div>Jeans </div>
              <div>₹2000</div>
            </div>
            <div className="card1">
              <img src={m4} alt="" />
              <div>Lower</div>
              <div>₹400</div>
            </div>
            <div className="card1">
              <img src={m5} alt="" />
              <div>Pant</div>
              <div>₹1000</div>
            </div>
            <div className="card1">
              <img src={m6} alt="" />
              <div>Shirt</div>
              <div>₹1500</div>
            </div>
          </div>
        </div>
        {/* Women */}
        <div className="women-area">
          <div className="women-upper">
            <h3>Women Collection</h3>
            <a href="">View all</a>
          </div>
          <div className="women-item">
            <div className="card1">
              <img src={w1} alt="" />
              <div>Lahanga</div>
              <div>₹12,000</div>
            </div>
            <div className="card1">
              <img src={w2} alt="" />
              <div>Suit</div>
              <div>₹1500</div>
            </div>
            <div className="card1">
              <img src={w3} alt="" />
              <div>One-piece </div>
              <div>₹2000</div>
            </div>
            <div className="card1">
              <img src={w4} alt="" />
              <div>Jeans</div>
              <div>₹1300</div>
            </div>
            <div className="card1">
              <img src={w5} alt="" />
              <div>Shirt</div>
              <div>₹800</div>
            </div>
            <div className="card1">
              <img src={w6} alt="" />
              <div>T-Shirt</div>
              <div>₹500</div>
            </div>
          </div>
        </div>
      
      </div>
        
        </>
    );
}

export default item;