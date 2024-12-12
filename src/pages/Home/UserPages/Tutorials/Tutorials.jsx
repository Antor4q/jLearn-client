import ReactPlayer from "react-player";
import tutorial from "../../../../../public/tut1.jpg"

const Tutorials = () => {

    const videoURLS = [
        "https://youtu.be/2SH_wQbKIBg?si=b7xrWGJch7EUHlEx",
        "https://youtu.be/RYhPa_y4xS4?si=w1bff6_qVnwtIWXh",
        "https://youtu.be/ZFOD3dQZ60o?si=fwPo5Yyt9Ek8QlLi",
        "https://youtu.be/7HJYP4oB_BY?si=Dg1i7RSgkWO--_Au",
        "https://youtu.be/AfkgVPo2OSI?si=APrDfjA7NM7exUcd",
        "https://youtu.be/1JephUxTHxg?si=TKaXAf96Dcx0nYa7",
        "https://youtu.be/6p9Il_j0zjc?si=BASZ6l4Wqnme23Sw",
        "https://youtu.be/sISIVKJh_EA?si=56CLJNgWmg8EU1Yy",
        "https://youtu.be/gi2AeYO-g8E?si=nDPBPnBfI_ZPazrc"
    ]

    return (
       <section >
         <div
                className="w-full relative h-[400px] lg:h-[600px] bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${tutorial})`,
                }}
                >
         {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 grid justify-center items-center h-full text-white p-8">
            <div>
            <h1 className="lg:text-4xl text-2xl font-bold mb-3">Home/Tutorials</h1>
            <p>Learn Japanese with these curated videos!</p>
            </div>
        </div>
        </div>

         <div className="lg:max-w-[1240px] lg:my-20 my-10 mx-auto px-4 lg:px-0">
            <h3 className="lg:text-4xl text-2xl font-semibold text-center">Japanese Language Learning Tutorials</h3>
            <p className="mt-3 text-center">Access engaging YouTube tutorials to boost your Japanese vocabulary and communication skills.<br/> Watch helpful video lessons designed to support your language learning progress.</p>
            <div className="grid lg:grid-cols-3 lg:my-10 my-6 grid-cols-1 gap-6">
      {videoURLS?.map((url, index) => (
        <div key={index} className="video-embed">
          <ReactPlayer
            url={url}
            controls
            width="100%" 
            height="360px"
            className="w-full h-auto" 
          />
        </div>
      ))}
    </div>
        </div>
       </section>
    );
};

export default Tutorials;