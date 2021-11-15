import Head from "next/head";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                <Hero />

                <section className="overflow-hidden my-16">
                    <h1 className="text-center font-Overpass text-2xl xl:text-4xl my-20 font-semibold tracking-wider text-gray-700">
                        Designed for the future
                    </h1>
                    <section className="flex flex-col xl:flex-row-reverse space-y-8 xl:space-y-0 xl:space-x-8 items-center justify-center xl:items-start ">
                        <img
                            src="/images/illustration-editor-desktop.svg"
                            alt="illustration-editor-desktop"
                            className="hidden xl:block translate-x-[40%]"
                        />
                        <img
                            src="/images/illustration-editor-mobile.svg"
                            alt="illustration-editor-mobile.svg"
                            className="xl:hidden"
                        />
                        <div className="px-8 xl:pt-52 max-w-2xl space-y-20">
                            <Card
                                heading="Introducing an extensible editor"
                                paragraph="Blogr features an exceedingly intuitive interface which lets you
                                          focus on one thing: creating content. The editor supports
                                          management of multiple blogs and allows easy manipulation of
                                          embeds such as images, videos, and Markdown. Extensibility with
                                          plugins and themes provide easy ways to add functionality or
                                          change the looks of a blog"
                            />
                            <Card
                                heading="Robust content management "
                                paragraph="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
                            />
                        </div>
                    </section>
                </section>

                <section
                    id="phone"
                    className="mt-52 mb-16 xl:my-16 bg-gradient-to-t xl:bg-gradient-to-l from-darkblue-700 to-darkblue-500  rounded-tr-[5rem] rounded-bl-[5rem] relative grid xl:grid-cols-2"
                >
                    <div />
                    <div className="absolute top-[-100px] left-8 xl:left-20">
                        <img
                            src="/images/illustration-phones.svg"
                            alt="phones"
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-40 xl:mt-0 xl:my-16 text-center xl:text-left z-10 inline-flex flex-col justify-center mx-auto p-16 max-w-2xl min-h-[300px] ">
                        <h2 className="text-white font-Overpass font-semibold text-3xl my-8">
                            State of the Art Infrastructure
                        </h2>
                        <p className="text-white font-Overpass">
                            With reliability and speed in mind, worldwide data
                            centers provide the backbone for ultra-fast
                            connectivity. This ensures your site will load
                            instantly, no matter where your readers are, keeping
                            your site competitive.
                        </p>
                    </div>
                </section>

                <section className="flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8 items-center justify-center xl:items-start xl:my-64 mb-32">
                    <img
                        src="/images/illustration-laptop-desktop.svg"
                        alt="illustration-editor-desktop"
                        className="hidden xl:block translate-x-[-30%]"
                    />
                    <img
                        src="/images/illustration-laptop-mobile.svg"
                        alt="illustration-editor-mobile.svg"
                        className="xl:hidden"
                    />
                    <div className="px-8 xl:pt-52 max-w-2xl space-y-20">
                        <Card
                            heading="Free, open, simple"
                            paragraph="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
                        />
                        <Card
                            heading="Powerful tooling "
                            paragraph="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
                        />
                    </div>
                </section>
            </main>

            <footer className="bg-darkblue-900 text-white px-8 py-16 grid  xl:grid-cols-4 justify-items-center font-Overpass space-y-8 text-center xl:text-left rounded-tr-[5rem]">
                <div>
                    <img src="/images/logo.svg" alt="logo" className="mt-8" />
                </div>

                <div>
                    <h2 className="font-bold mb-2 text-xl">Product</h2>
                    <div className="space-y-1 font-light text-gray-200">
                        <div>Overview</div>
                        <div>Pricing</div>
                        <div>Marketplace</div>
                        <div>Features</div>
                        <div>Integrations</div>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold mb-2 text-xl">Company</h2>
                    <div className="space-y-1 font-light text-gray-200">
                        <div>About</div>
                        <div>Team</div>
                        <div>Blog</div>
                        <div>Careers</div>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold mb-2 text-xl">Connect</h2>
                    <div className="space-y-1 font-light text-gray-200">
                        <div>Contact</div>
                        <div>Newsletter</div>
                        <div>Linkedin</div>
                    </div>
                </div>
            </footer>
        </>
    );
}
