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
        </div>
    );
};

export default Home;