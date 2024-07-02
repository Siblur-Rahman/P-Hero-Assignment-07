
import './Banner.css'
const Banner = () => {
    return (
        <div className='rounded-2xl bg-img flex items-center h-[600px] mt-5'>
            <div className="text-center w-4/6 m-auto">
                <h1 className="lg:text-5xl text-2xl font-bold text-slate-50 leading-relaxed">Discover an exceptional cooking <br/> class tailored for you!</h1>
                <p className='text-slate-50 leading-8'>Hey, thanks for being here, I'm Heidi, the culinary storyteller behind FoodieCrush. Here, you’ll find my collection of recipes that are fresh, seasonal, mostly simple, often healthy, comfort food.</p>
                <div className="flex justify-center">
                    <div className='flex gap-5 mt-5'>
                    <button className="text-slate-50 p-3 bg-[#58BE7E] rounded-3xl">Explore New</button>
                    <button className="text-slate-50 p-3 border-2 rounded-3xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;