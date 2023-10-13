function Loader(params) {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-row justify-center items-center">
                <div className="bg-primary-1 rounded-full h-10 w-10 m-2 animate-bounce [animation-delay:-0.40s]"></div>
                <div className="bg-primary-1 rounded-full h-10 w-10 m-2 animate-bounce [animation-delay:-0.30s]"></div>
                <div className="bg-primary-1 rounded-full h-10 w-10 m-2 animate-bounce [animation-delay:-0.20s]"></div>
                <div className="bg-primary-1 rounded-full h-10 w-10 m-2 animate-bounce [animation-delay:-0.10s]"></div>
                <div className="bg-primary-1 rounded-full h-10 w-10 m-2 animate-bounce [animation-delay:-0.9s]"></div>
                <div className="bg-primary-1 rounded-full h-10 w-10 m-2 animate-bounce [animation-delay:-0.8s]"></div>
            </div>
        </div>
    );
}

export default Loader;
