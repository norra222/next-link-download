import Link from 'next/link'

/*
The top link with anchor tags downloads the wave.jpg file to local storage as expected with the use of the 'download' attribute.
The second link with Link component only navigates the the image, and does download it, despite also having the 'download' attribute.
*/

export default function Page() {
    return (
        <div className='flex flex-col gap-8 mx-4 mt-10 items-center'>
            <div className='w-full max-w-96 p-5 border-2 flex flex-col gap-4 items-center'>
                <p>Download using <b>&lt;a&gt;</b></p>
                <a href='images/wave.jpg' download className='bg-slate-300 w-full py-4 px-5 flex justify-center rounded-full hover:brightness-90 active:brightness-75'>
                    Download wave.jpg
                </a>
            </div>
            <div className='w-full max-w-96 p-5 border-2 flex flex-col gap-4 items-center'>
                <p>Download using <b>&lt;Link&gt;</b></p>
                <Link href='images/wave.jpg' download className='bg-slate-300 w-full py-4 px-5 flex justify-center rounded-full hover:brightness-90 active:brightness-75'>
                    Download wave.jpg
                </Link>
            </div>
            <p>TODO: link to GitHub</p>
        </div>
    )
}