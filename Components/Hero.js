const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-lightred-300 to-lightred-600 rounded-bl-[5rem] overflow-hidden">
            <div className="py-28 bg-pattern-intro bg-no-repeat bg-auto bg-center">
                <div className="p-8 flex flex-col items-center">
                    <h1 className="xl:mt-20  text-white font-ubuntu font-normal xl:font-bold text-3xl xl:text-6xl text-center tracking-wide">
                        A modern publishing platform
                    </h1>
                    <p className="text-center mt-4 text-white font-Overpass font-light p-4 xl:text-2xl opacity-75">
                        Grow your audience and build your online brand
                    </p>
                    <div className="space-x-4 mt-10 flex">
                        <button className="text-lightred-600 bg-white p-3 rounded-full font-semibold font-ubuntu border-transparent border-2 w-32 text-sm">
                            Start for Free
                        </button>
                        <button className="text-white bg-transparent p-3 rounded-full font-semibold font-ubuntu border-2 border-white w-32 text-sm">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
