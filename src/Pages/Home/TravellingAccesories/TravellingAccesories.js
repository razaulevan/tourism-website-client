import React from 'react';
import './TravellingAccesories.css';

const TravellingAccesories = () => {
    return (
        <div id="accesorie" className="container py-5 ">
            <h1 className="mb-3 py-4"> Traveling Accesories you Need to Carry</h1>

            <div className="row   row-cols-md-3 row-cols-sm-2 row-cols-1 g-5 services mb-3 ">
                <div className="acc ">
                    <div>
                        <h3 className="text-center">1.   Ergonomic Travel Pillow</h3>
                    </div>
                    <div className="img-acc"><img src="https://www.theintrepidguide.com/wp-content/webp-express/webp-images/uploads/2016/02/Travel-Pillow.jpg.webp" alt="" /></div>
                </div>
                <div className="acc">
                    <div>
                        <h3 className="text-center">2.   Space Bags</h3>
                    </div>
                    <div className="img-acc"><img src="https://www.theintrepidguide.com/wp-content/webp-express/webp-images/uploads/2016/02/Best-Travel-Accessories-2017-Space-bags.jpg.webp" alt="" /></div>
                </div>
                <div className="acc">
                    <div>
                        <h3 className="text-center">3.    Multi-Bag Stacker
                        </h3>
                    </div>
                    <div className="img-acc"><img src="https://www.theintrepidguide.com/wp-content/webp-express/webp-images/uploads/2016/02/Multi-Bag-Stacker.jpg.webp" alt="" /></div>
                </div>
                <div className="acc">
                    <div>
                        <h3 className="text-center">4.   Mini Power Bank</h3>
                    </div>
                    <div className="img-acc"><img src="https://www.theintrepidguide.com/wp-content/webp-express/webp-images/uploads/2019/06/Best-Travel-Accessories-2020-Power-Bank.jpg.webp" alt="" /></div>
                </div>
                <div className="acc">
                    <div>
                        <h3 className="text-center">5.   Waterproof Mobile Case
                        </h3>
                    </div>
                    <div className="img-acc"><img src="https://www.theintrepidguide.com/wp-content/webp-express/webp-images/uploads/2016/02/Best-Travel-Accessories-2017-Underwater-Phonecase.jpg.webp" alt="" /></div>
                </div>
                <div className="acc">
                    <div>
                        <h3 className="text-center">6.   Machine Quality Wash Bag
                        </h3>
                    </div>
                    <div className="img-acc"><img src="https://www.theintrepidguide.com/wp-content/webp-express/webp-images/uploads/2016/02/Best-Travel-Accessories-2017-Washing-Bag.jpg.webp" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default TravellingAccesories;