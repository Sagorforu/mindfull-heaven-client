import Blogs from "./Blogs/Blogs";
import Header from "./Header/Header";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import Questions from "./Questions/Questions";

const Home = () => {
    return (
        <div>
            <Header></Header>  
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>  
            <Questions></Questions>  
            <Blogs></Blogs>
        </div>
    );
};

export default Home;