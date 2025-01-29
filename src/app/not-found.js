
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="text-center space-y-3">
                <Image src={`/404.png`} alt='' height={1080} width={1080} className="w-1/3 mx-auto" />
                <Link href="/">
                    <button className="btn border-secondary hover:bg-white hover:text-black duration-300 border-2 hover:border-black  text-white bg-secondary scale-90 mt-5">Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;