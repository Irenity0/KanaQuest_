import { Link } from "react-router-dom";

const Tutorials = () => {

    const userLoggedIn = true; // Simulate if the user is logged in
    
    return (
        <>
        {/* Tutorial Section */}
        <div className="mb-12 text-center flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Learn the Alphabet</h2>

          <iframe 
          className="w-1/2 mx-auto h-auto md:h-80 rounded-lg"
          src="https://www.youtube.com/embed/6p9Il_j0zjc?si=8_gEt0g_bf3JeFXb" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>
        </div>

        {/* View More Button */}
        {userLoggedIn && (
          <div className="mt-6 flex justify-center">
            <Link
              to="/tutorial"
              className="btn btn-outline text-secondary border-2 border-secondary hover:bg-secondary hover:text-[#FFDEB6]"
            >
              View More Tutorials
            </Link>
          </div>
        )}
        </>
    );
};

export default Tutorials;