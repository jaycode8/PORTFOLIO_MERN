
const Landing = () => {
    return (
        <div className="w-full h-screen bg-landing2 sm:bg-landing bg-darken bg-cover bg-no-repeat bg-blend-darken" id="home">
            <div className="w-full h-full grid place-items-center justify-start pl-1 phones:pl-4 md:pl-20">
                <div className="grid text-white sm:gap-2 pl-1 phones:pl-4 lg:pl-0">
                    <p className="text-3xl phones:text-2xl pb-3 phones:pb-2">Hello.</p>
                    <h1 className="text-4xl sm:text-3.5 whitespace-nowrap text-primary font-borsok">I am James Mumo</h1>
                    <h4 className="text-3xl phones:text-2xl">
                        Freelance Full Stack <span className="font-light text-primary font-borsok">DEV.</span>
                    </h4>
                    <a href="#contacts" className="mt-8 w-40 text-center p-1 phones:p-2 text-white rounded-3xl border-1 border-primary transition ease-out duration-1000 hover:text-dark hover:bg-primary">HIRE</a>
                </div>
            </div>
        </div>
    );
};

export default Landing;
