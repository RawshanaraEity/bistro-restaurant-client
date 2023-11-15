import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from  '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle heading="Featured item" subHeading="Check it out"></SectionTitle>
            <div className="md:flex justify-center items-center bg-black bg-opacity-50 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov 11, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit a tempore assumenda exercitationem omnis quam esse vitae, provident aliquid quod perferendis laboriosam deserunt eum voluptate ea expedita error porro saepe illo libero nesciunt quisquam quas alias. Ipsa modi error sed quos officia, optio tempora voluptates? Fuga itaque eius ipsa culpa.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;