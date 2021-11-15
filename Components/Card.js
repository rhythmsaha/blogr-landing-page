const Card = ({ heading, paragraph }) => {
    return (
        <div className="text-center xl:text-left">
            <h1 className="text-2xl font-semibold font-ubuntu my-4 px-8 xl:px-0 text-gray-700 xl:text-3xl">
                {heading}
            </h1>
            <p className="font-ubuntu text-gray-700 xl:text-lg">{paragraph}</p>
        </div>
    );
};

export default Card;
