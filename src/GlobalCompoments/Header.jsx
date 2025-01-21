import React from 'react';

export default function Header() {
    return (
        <div className="flex h-20 bg-black items-center">
            <img />
            <h1 className="text-3xl w-1/3 text-white"> Stock Exachange</h1>
            < ol className=" flex w-2/3 text-white justify-evenly ">

                <li>Crypto</li>
                <li>Stocks</li>
                <li>Forex</li>
                <li>Commodities</li>
            </ol>
        </div>
    );
}