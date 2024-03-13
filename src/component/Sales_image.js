import sales_image from "../assets/images/s1.jpg";

function Salesimage(){
    return(
        <section className="sales_image">
            <img src={sales_image} alt="Sales"></img>
            <div className="sales_image__offer">
                <h2>Udemy Flash Sale! 24 hours to save</h2>
                <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
        </section>
    );
}

export default Salesimage;