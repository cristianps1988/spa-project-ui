import { testimonials } from '../assets/testimonials';
import { getImageUrl } from '../helpers/getImageUrl';


export default function Testimonials() {
    return (
        <div className="relative flex h-full w-screen items-center flex-col my-14">
            <div className="relative flex max-w-[100vw] overflow-hidden py-5">
                <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div key={index} className="h-full px-2.5">
                            <div className="relative h-full w-[28rem] rounded-2xl border border-slate-900/10 bg-white px-8 py-6 flex flex-col justify-between">
                                <div className="pb-4 font-light text-slate-900">{item.body}</div>

                                <div className="mt-auto flex items-center gap-4">
                                    <img src={getImageUrl(item.img, "testimonials")} className="h-9 w-9 rounded-full object-cover" alt={item.img} loading='lazy' />

                                    <div className="flex flex-col text-sm">
                                        <div className="text-slate-700">{item.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex max-w-[100vw] overflow-hidden py-5">
                <div className="flex w-max animate-marquee [--duration:35s] hover:[animation-play-state:paused]">
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div key={index} className="h-full px-2.5">
                            <div className="relative h-full w-[28rem] rounded-2xl border border-slate-900/10 bg-white px-8 py-6 flex flex-col justify-between">
                                <div className="pb-4 font-light text-slate-900">{item.body}</div>

                                <div className="mt-auto flex items-center gap-4">
                                    <img src={getImageUrl(item.img, "testimonials")} className="h-9 w-9 rounded-full object-cover" alt={item.img} loading='lazy' />

                                    <div className="flex flex-col text-sm">
                                        <div className="text-slate-700">{item.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
