import { useNavigate } from "react-router-dom";

const TutorialPage = () => {
  const navigate = useNavigate();

  // List of YouTube video embed URLs
  const videoLinks = [
    "https://www.youtube.com/embed/6p9Il_j0zjc",
    "https://www.youtube.com/embed/T09w34WME5Q",
    "https://www.youtube.com/embed/66P5_R37vek",
    "https://www.youtube.com/embed/i1ORF_lp1oU",
    "https://www.youtube.com/embed/fxx96tVlKqA",
    "https://www.youtube.com/embed/sbw5IDYyoF0",
    "https://www.youtube.com/embed/hmHctm8vkMk",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Language Tutorials</h1>

      {/* YouTube Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {videoLinks.map((link, index) => (
          <div key={index} className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={link}
              title={`Tutorial Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Learn Vocabularies Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/lessons")}
          className="btn bg-primary text-white rounded-lg px-6 py-3 hover:bg-primary-dark"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default TutorialPage;
