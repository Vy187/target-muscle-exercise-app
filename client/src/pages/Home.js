import CategoryMenu from '../components/CategoryMenu';
import ExerciseList from '../components/ExerciseList';

const Home = () => {
    return (
        <main className="container">
            <CategoryMenu />
            <ExerciseList />
        </main>
    );
};

export default Home;
