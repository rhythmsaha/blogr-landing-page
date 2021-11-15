const Header = () => {
    return (
        <header className="absolute top-0 flex justify-between items-center w-full space-x-8 px-[6%] py-10">
            <block className="h-7 xl:h-8">
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    className="object-contain h-full w-full"
                />
            </block>

            <nav className="flex-1 hidden xl:flex space-x-8 text-white items-center font-ubuntu font-semibold pl-16">
                <span className="flex items-center space-x-3 cursor-pointer">
                    <span>Products</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                    >
                        <path
                            fill="none"
                            stroke="#FFF"
                            stroke-width="2"
                            opacity=".75"
                            d="M1 1l4 4 4-4"
                        />
                    </svg>
                </span>
                <span className="flex items-center space-x-3 cursor-pointer">
                    <span>Company</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                    >
                        <path
                            fill="none"
                            stroke="#FFF"
                            stroke-width="2"
                            opacity=".75"
                            d="M1 1l4 4 4-4"
                        />
                    </svg>
                </span>
                <span className="flex items-center space-x-3 cursor-pointer">
                    <span>Connect</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                    >
                        <path
                            fill="none"
                            stroke="#FFF"
                            stroke-width="2"
                            opacity=".75"
                            d="M1 1l4 4 4-4"
                        />
                    </svg>
                </span>
            </nav>

            <div className="hidden xl:flex space-x-8 font-ubuntu ">
                <button className="text-white cursor-pointer font-semibold">
                    Login
                </button>
                <button className="bg-white text-lightred-600 px-8 py-3 cursor-pointer rounded-full hover:bg-opacity-25 hover:text-white transition duration-200 font-semibold">
                    Sign Up
                </button>
            </div>

            <span className="block xl:hidden">
                <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#FFF" fill-rule="evenodd">
                        <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
                    </g>
                </svg>
            </span>
        </header>
    );
};

export default Header;
