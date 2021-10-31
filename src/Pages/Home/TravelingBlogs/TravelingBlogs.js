import React from 'react';

const TravelingBlogs = () => {
    return (
        <div id="blog" className="py-5 container">

            <h1 className="py-3"> Check our Traveling Blogs:</h1>
            <a style={{ textDecoration: "none", fontSize: "30px" }} href=" https://www.youtube.com/c/RKEvan14"> Subscribe To get our latest videos <span style={{ textDecoration: "none", color: "red", fontSize: "35px" }}>(click here)</span> </a>
            <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1 g-5 services ">
                <div>
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/thNuVnht1S4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </div>
                <div>
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/tAFO53OMvm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/KER6tWj9uFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/dqXYNQGoKB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/2HdpX43bm2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/6nQNNT6QB9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>


            </div>
        </div>
    );
};

export default TravelingBlogs;