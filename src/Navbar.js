const Navbar = () => {
    return (
         <nav className="navbar">
            <h1> The Dojo Blog </h1>
            <div calssName = "links">
                <a href="/"> Home </a>
                <a href="/create"> New blog </a>
            </div>
         </nav>
     );
}
 
export default Navbar;