const HeroSection = () => {
    return(
        <>

            <main className="Hero container ">
                <div className="Hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                    <div className="Hero-btn">
                    <button>Shop now</button>
                    <button>Category</button>


                    </div>
                    <div className="shopping">

                        <p>Also aviable on</p>
                        <div className="brand-icons">
                        <img src="/images/amazon.png"></img>
                        <img src="/images/flipkart.png"></img>

                        </div>
                    </div>
                </div>
                <div className="Hero-image">
                  <img src="/images/shoe_image.png"></img>
                </div>

            </main>
        </>
    )
}

export default HeroSection;