
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([])
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)})
    // },[])
    return (
        <section className="mb-12">
            <SectionTitle heading="FROM OUR MENU" 
            subHeading="Popular Menu">
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-center">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;