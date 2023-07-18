import Blogs from "./Blogs/Blogs";
import Header from "./Header/Header";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import Questions from "./Questions/Questions";
import SendNote from "./SendNote/SendNote";
import Support from "./Support/Support";
import InstructorReviews from "./instructorReviews/InstructorReviews";
import StudentReviews from "./studentReviews/StudentReviews";

const Home = () => {
    return (
        <div>
            <Header></Header>  
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>  
            <Questions></Questions>  
            <Blogs></Blogs>
            <Support></Support>
            <SendNote></SendNote>
            <StudentReviews></StudentReviews>
            <InstructorReviews></InstructorReviews>
        </div>
    );
};

export default Home;