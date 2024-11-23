const Hero = () => {
    return (
        <div>
  <div className="hero-content flex-col gap-10 md:flex-row">
    <img
      src="https://i.pinimg.com/474x/41/76/ac/4176acb84ab8de1b6e7f5da994f5c35b.jpg"
      className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="md:text-5xl text-4xl font-bold text-primary">Embark on Your KanaQuest!</h1>
      <p className="py-6 text-accent">
        Unlock the power of the Japanese language with a personalized vocabulary learning experience. 
        Explore, learn, and perfect your skills through interactive lessons and fun challenges.
      </p>
      <button className="btn border-2 border-secondary text-secondary">Start Your Journey</button>
    </div>
  </div>
</div>

    );
};

export default Hero;