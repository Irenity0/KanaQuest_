import { useLoaderData } from 'react-router-dom';
import Lessons from '../components/Lessons';
import Tutorials from '../components/Tutorial';

const LearnPage = () => {
  
    const lessons = useLoaderData();

    return (
        <>
        <Lessons lessons={lessons}></Lessons>
        <Tutorials></Tutorials>
        </>
    );
};

export default LearnPage;
