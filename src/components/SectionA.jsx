import { Link } from 'react-router-dom';
import video from '../assets/video.mp4';
import { datos } from "../assets/data"
import { Slide } from 'react-awesome-reveal';


export default function SectionA() {
    const { reservas, phone } = datos;
    return (
        <div className="w-full bg-gray-100 min-h-[92dvh] flex">
            <div className="container grid items-center gap-6 px-4 py-12 md:py-16 lg:py-20 lg:grid-cols-2 xl:gap-12 xl:py-24">
                <Slide className='flex'>
                    <div className="overflow-hidden rounded-lg mx-auto drop-shadow-md">
                        <video className='h-[600px] rounded-lg shadow-md' src={video} autoPlay loop muted controls></video>
                    </div>
                </Slide>
                <div className="flex flex-col justify-center space-y-4">
                    <Slide direction='right'>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl/none">Mr. Harry Spay</h2>
                            <p className="max-w-prose text-gray-700 md:text-xl">
                                Descubre el oasis de tranquilidad que tu cuerpo y mente anhelan. Somos un Spa y Centro de Belleza ubicado en la ciudad de Valledupar. Nuestras instalaciones están acondicionadas para la relajación, el descanso y el bienestar.
                            </p>
                        </div>
                        <Link
                            className="btn btn-primary w-32 mx-auto md:mx-0" to={`https://api.whatsapp.com/send?phone=+57${phone}&text=${reservas}`} target='_blank' rel="noopener noreferrer"
                        >
                            Reservas
                        </Link>
                    </Slide>
                </div>
            </div>
        </div>
    )
}
