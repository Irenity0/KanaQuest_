const ResourcesSection = () => {
  return (
    <div className="py-16 bg-base-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Learning Resources</h2>
        <p className="text-lg text-accent mb-12">
          Enhance your Japanese skills even further with these hand-picked resources:
        </p>
        <div className="space-y-6">
          {/* Resource 1 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-secondary mb-2">Japanese Grammar Guide</h3>
            <p className="text-accent text-center md:text-left">
              A comprehensive guide to mastering Japanese grammar, suitable for all levels.
            </p>
            <a href="#" className="text-primary hover:text-primary-600 mt-2">Read More</a>
          </div>

          {/* Resource 2 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-secondary mb-2">Kana Practice Sheets</h3>
            <p className="text-accent text-center md:text-left">
              Printable sheets to help you practice hiragana, katakana, and kanji.
            </p>
            <a href="#" className="text-primary hover:text-primary-600 mt-2">Download</a>
          </div>

          {/* Resource 3 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-secondary mb-2">YouTube Channel: Learn Japanese</h3>
            <p className="text-accent text-center md:text-left">
              Follow along with video tutorials on everything from basic vocabulary to advanced conversations.
            </p>
            <a href="#" className="text-primary hover:text-primary-600 mt-2">Watch Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ResourcesSection;