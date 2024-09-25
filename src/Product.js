import { useState } from "react";

const Product = ({Cart,SetCart}) => {
    
    const [summPrice, SetSummPrice] = useState(0);
    
    const [ShowCart, SetShowCart] = useState("false");

    class Products {
        constructor(id,name,color,price) {
            this.id = id;
            this.name = name;
            this.color = color;
            this.price = price; 
        }
    }

    const Product1 = new Products(1, "atlet", "siyah", 250);
    const Product2 = new Products(2, "atlet", "beyaz", 200);
    const Product3 = new Products(3, "tshirt", "mavi", 550);
    const Product4 = new Products(4, "tshirt", "kırmızı", 450);
    
    const ProductArray = [Product1,Product2,Product3,Product4];

    function AddToCart(Product){
        let temp = Product;
        SetCart(prevCart => [...prevCart, temp]);
        SetSummPrice(summPrice + Product.price);
        console.log(Cart); 
    }
    
    function DisplayCart(){
       SetShowCart(!ShowCart)
    }

    return ( 
        <div className="Products">
            <div className="container">
                {ProductArray.map(product => (
                    <div key={product.id} className="product">
                        <h2>{product.name}</h2>
                        <p>Color: {product.color}</p>
                        <p>Price: {product.price} TL</p>
                        <button className="AddToCartBtn" onClick={() => AddToCart(product)}>Sepete Ekle</button>                
                    </div>
                ))}
            </div>
            
            <button className="DisplayCartBtn" onClick={DisplayCart}>Sepeti {ShowCart ? 'Gizle' : 'Göster'}</button>
            {ShowCart && (
                <div>
                    <p>Sepettekiler:</p>
                    {Cart.map(inCart => (
                        <div key={inCart.id}>
                            <p>{inCart.color} {inCart.name} - {inCart.price} TL</p>
                        </div>
                    ))}
                    <p style={{color: "red"}}>Toplam Fiyat: {summPrice} TL</p>
                </div>
            )}
        </div>
     );
}
 
export default Product;