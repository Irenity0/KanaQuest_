import { Link, useLoaderData } from 'react-router-dom';

const LearnPage = () => {
  const userLoggedIn = true; // Simulate if the user is logged in
  const lessons = useLoaderData();

  // Filter lessons to include only those with lesson_no between 1 and 20
  // Group by lesson_no, and select only the first occurrence of each lesson_no
  const filteredLessons = [
    ...new Set(lessons.filter((lesson) => lesson.lesson_no >= 1 && lesson.lesson_no <= 20).map((lesson) => lesson.lesson_no)),
  ];

  // Sort the filteredLessons array in ascending order
  const sortedLessons = filteredLessons.sort((a, b) => a - b);

  return (
    <div className="py-16 bg-base-200">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-primary mb-8">Let's Learn Japanese!</h1>

        {/* Lesson Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {sortedLessons.map((lessonNo) => {
            const lesson = lessons.find((lesson) => lesson.lesson_no === lessonNo); // Get the first lesson for this lesson_no
            return (
              <div
                key={lesson.id}
                className="w-full bg-base border-2 border-secondary rounded-lg"
              >
                <div className="p-10">
                  <h2 className="text-2xl font-semibold text-center text-primary underline">Lesson-{lesson.lesson_no}</h2>
                  <div className="card-actions justify-center mt-4">
                    <Link
                      to={`/lesson/${lesson.lesson_no}`}
                      className="btn border-2 border-secondary text-secondary hover:bg-secondary hover:text-[#FFDEB6]"
                    >
                      Start Lesson
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tutorial Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Learn the Alphabet</h2>
          <iframe
            className="w-full h-60 md:h-80 rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual YouTube link for Japanese Alphabet tutorial
            title="Learn Japanese Alphabet"
            allowFullScreen
          ></iframe>
        </div>

        {/* View More Button */}
        {userLoggedIn && (
          <div className="mt-6">
            <Link
              to="/tutorials"
              className="btn btn-outline text-secondary border-2 border-secondary"
            >
              View More Tutorials
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnPage;
