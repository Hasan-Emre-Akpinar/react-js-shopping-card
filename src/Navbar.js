const Navbar = ({count}) => {
    return ( 
        <nav className="Navbar">
            <h1>Shop</h1>
            <div>
                <a href="/">HomePage</a>
                <a href="/asd">Products</a>
                <a href="/create" style={{                          //HTML gibi, içeriklere style verilebilir. fark olarak "{{}}" bunun içine yazılır.
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }} >ShoppingCart({count})</a>

            </div>
        </nav>
     );
}
 
export default Navbar;