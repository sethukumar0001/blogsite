"use client"
import * as React from "react"
import Image from 'next/image';
import NavItems from "./nav-items";
import { Button } from "@/components/ui/button"

function Header(props) {
    return (
        <header className="bg-white-800 border-b border-gray-200 flex items-center justify-between p-4 h-20">
            <div className="flex items-center space-x-4">
                <Image
                    src="/images/sk.png"
                    alt="Description of your image"
                    width={79}
                    height={79}
                    className=""
                />
            </div>
            <div className="flex items-center">
                <NavItems />
            </div>
            <div className="flex items-center">
                <Button>Subscribe</Button>
            </div>
        </header>
    );
}

export default Header;