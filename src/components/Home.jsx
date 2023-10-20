import data from "../constants/data.js"

export default function Home(){
    return (
        <div className="w-full min-h-screen bg-midnight">
            <div className=" max-w-960 mx-auto">
                <div className="w-full flex justify-center pt-20">
                    <img 
                        src={data.profileUrl}
                        alt="Profile"
                        className="w-48 rounded-circle" 
                    />
                </div>
                <p className="font-extrabold text-4xl text-center mx-auto pt-10 max-w-3xl text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-gradientBlue">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore
                </p>
                <div className="pt-40">
                    <h1 className="text-4xl text-white font-bold">Recent <br />Projects </h1>
                    <div>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <span>Project Title</span>
                                <div>
                                    <span>Link</span>
                                </div>
                                <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <div>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>   
                        </div>
                        <div>
                            <img src="" alt="" />   
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
        
    )
}
 