const Hero = ()=>{
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                </p>
            </div>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icons">
                  <img src="/amazon.png" alt="amazon" />  
                  <img src="/flipkart.png" alt="flipkart"/>
                </div>
            </div>
            <div className="hero-image">
                <img src="/shoe_image.png" alt="shoe"/>
            </div>
        </main>
    );
};
export default Hero;