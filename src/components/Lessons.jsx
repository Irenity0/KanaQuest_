import { Link } from "react-router-dom";

const Lessons = ({lessons}) => {


  // Filter lessons to include only those with lesson_no between 1 and 20
  // Group by lesson_no, and select only the first occurrence of each lesson_no
  const filteredLessons = [
    ...new Set(lessons.filter((lesson) => lesson.lesson_no >= 1 && lesson.lesson_no <= 35).map((lesson) => lesson.lesson_no)),
  ];

  // Sort the filteredLessons array in ascending order
  const sortedLessons = filteredLessons.sort((a, b) => a - b);

    return (
        <div className="bg-base">
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
                className="w-2/3 flex mx-auto bg-base border-2 border-secondary rounded-lg"
              >
                <div className="p-10 flex flex-col">
                  <h2 className="text-2xl font-semibold text-center text-primary underline">Lesson-{lesson.lesson_no}</h2>
                  <div className="card-actions justify-center mt-4">
                    <Link
                      to={`/lessons/${lesson.lesson_no}`}
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
      </div>
    </div>
    );
};

export default Lessons;