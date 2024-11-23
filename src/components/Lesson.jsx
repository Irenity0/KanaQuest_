import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Lesson = () => {
  const { id } = useParams(); // Current lesson ID from URL
  const navigate = useNavigate(); // To redirect the user
  const [lessonVocab, setLessonVocab] = useState([]);
  const [isValidLesson, setIsValidLesson] = useState(true); // Tracks if the lesson exists
  const [modalData, setModalData] = useState(null); // Data for the modal
  const lessonId = parseInt(id);
  const prevLessonId = lessonId - 1;
  const nextLessonId = lessonId + 1;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/vocab.json");
      const data = await response.json();
      const vocabForLesson = data.filter((item) => item.lesson_no === lessonId);
      setLessonVocab(vocabForLesson);
      setIsValidLesson(vocabForLesson.length > 0); // Check if the lesson has vocab
    };

    fetchData();
  }, [lessonId]);

  if (!isValidLesson) {
    return (
      <div className="container mx-auto px-4 text-center py-8">
        <h1 className="text-4xl font-bold text-red-600 mb-8">No Lessons Available</h1>
        <p className="text-lg mb-4">The lesson you are trying to access does not exist.</p>
        <button
          onClick={() => navigate(`/lessons/${Math.max(1, lessonId - 1)}`)}
          className="btn border-2 border-primary text-primary rounded-lg"
        >
          Go Back to Lesson {Math.max(1, lessonId - 1)}
        </button>
      </div>
    );
  }

  const difficultyColors = {
    easy: "bg-green-100 border-green-500",
    medium: "bg-yellow-100 border-yellow-500",
    hard: "bg-red-100 border-red-500",
  };

  return (
    <div className="container mx-auto px-4 text-center py-8">
      <div className="flex justify-between mb-4">
        <Link to="/lessons" className="btn border-2 border-primary text-primary rounded-lg">
          Back to Lessons
        </Link>
        <div className="flex gap-4">
          {prevLessonId >= 1 && (
            <Link
              to={`/lessons/${prevLessonId}`}
              className="btn border-2 border-primary text-primary rounded-lg"
            >
              Prev Lesson
            </Link>
          )}
          {nextLessonId <= 35 && (
            <Link
              to={`/lessons/${nextLessonId}`}
              className="btn border-2 border-primary text-primary rounded-lg"
            >
              Next Lesson
            </Link>
          )}
        </div>
      </div>
      <h1 className="text-4xl font-bold text-primary mb-8">Lesson {id} Vocabulary</h1>

      {/* Vocabulary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lessonVocab.map((vocab) => (
          <div
            key={vocab.id}
            className={`shadow-xl border rounded-lg p-4 ${
              difficultyColors[vocab.difficulty.toLowerCase()] || "bg-gray-100 border-gray-500"
            }`}
          >
            <h2 className="text-xl font-semibold text-primary">{vocab.word}</h2>
            <p className="text-sm italic">{vocab.pronunciation}</p>
            <p className="mt-2">{vocab.meaning}</p>
            <p className="text-sm mt-2 text-gray-600">{vocab.part_of_speech}</p>
            <button
              onClick={() => setModalData(vocab)}
              className="mt-4 btn border-2 border-accent text-accent"
            >
              When to Say
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-2/3 md:w-2/3 lg:w-auto p-6 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-bold text-primary mb-4">{modalData.word}</h2>
            <p className="text-lg mb-2">
              <strong>Meaning:</strong> {modalData.meaning}
            </p>
            <p className="text-lg mb-2">
              <strong>When to Say:</strong> {modalData.when_to_say}
            </p>
            <p className="text-lg">
              <strong>Example:</strong> <i>{modalData.example}</i>
            </p>
            <div className="flex justify-end">
            <button
              onClick={() => setModalData(null)}
              className="mt-4 btn border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
