import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";

function MostPopular(){
    return(
        <section className="recommended">
            <h1 className="recommended__title">Most Popular</h1>
            <p>Pick the best fit</p>
            <div className="recommended__container">
                <div className="recommended__course_card">
                    <img src={c1} alt="Recommended one" />
                    <h3>The Complete 2020 Fullstack Web Developer Course</h3>
                    <p>Kalob Taulien</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>₹499 <del>₹3199 </del></p>
                </div>
                <div className="recommended__course_card">
                    <img src={c2} alt="Recommended two" />
                    <h3>The Complete 2023 PHP Fullstack Web Developer</h3>
                    <p>Srini Vanamala</p>
                    <p>4.3 ⭐⭐⭐⭐</p>
                    <p>₹799 <del>₹5200 </del></p>
                </div>
                <div className="recommended__course_card">
                    <img src={c3} alt="Recommended three" />
                    <h3>The Full Stack Web Development Bootcamp</h3>
                    <p>Darragh O'Neril</p>
                    <p>3.5 ⭐⭐⭐</p>
                    <p>₹499 <del>₹2499 </del></p>
                </div>
                <div className="recommended__course_card">
                    <img src={c4} alt="Recommended four" />
                    <h3>The Complete 2020 Fullstack Web Developer Course</h3>
                    <p>Kalob Taulien</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>₹499 <del>₹3199 </del></p>
                </div>
                <div className="recommended__course_card">
                    <img src={c1} alt="Recommended one" />
                    <h3>The Complete 2020 Fullstack Web Developer Course</h3>
                    <p>Kalob Taulien</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>₹499 <del>₹3199 </del></p>
                </div>
                <div className="recommended__course_card">
                    <img src={c2} alt="Recommended two" />
                    <h3>The Complete 2023 PHP Fullstack Web Developer</h3>
                    <p>Srini Vanamala</p>
                    <p>4.3 ⭐⭐⭐⭐</p>
                    <p>₹799 <del>₹5200 </del></p>
                </div>
                <div className="recommended__course_card">
                    <img src={c3} alt="Recommended three" />
                    <h3>The Full Stack Web Development Bootcamp</h3>
                    <p>Darragh O'Neril</p>
                    <p>3.5 ⭐⭐⭐</p>
                    <p>₹499 <del>₹2499 </del></p>
                </div>
                <div className="recommended__course_card">
                    <img src={c4} alt="Recommended four" />
                    <h3>The Complete 2020 Fullstack Web Developer Course</h3>
                    <p>Kalob Taulien</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>₹499 <del>₹3199 </del></p>
                </div>
            </div>            
        </section>
    );
}

export default MostPopular;