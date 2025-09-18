"use client"

//https://nodlik.github.io/StPageFlip/
//https://nodlik.github.io/react-pageflip/
//https://nodlik.github.io/StPageFlip/docs/classes/render.html#setpagerect

import { useEffect, useRef } from "react";
// import type { PageFlip, SizeType } from "page-flip";
import * as pkg from "page-flip"
const { PageFlip, SizeType } = pkg;
import 'app/components/pageShadowOverride.css'

export default function Book() {

    const bookRef = useRef<HTMLDivElement>(null)
    const bookObjectRef = useRef<{ book: PageFlip | null }>({ book: null })

    useEffect(() => {
        if (bookRef.current && !bookObjectRef.current.book) {
            bookObjectRef.current.book = new PageFlip(bookRef.current, {
                width: 600,
                height: 800,
                showCover: false,
                size: "stretch" as SizeType.STRETCH,
                minWidth: 600,
                maxWidth: 1000,
                minHeight: 800,
                maxHeight: 1350,
                maxShadowOpacity: 1,
                drawShadow: true
            })
            bookObjectRef.current.book.loadFromImages([
                // '/books/psh-cut/img (60).jpg',
                // '/books/psh-cut/img (1).jpg',
                // '/books/psh-cut/img (2).jpg',
                // '/books/psh-cut/img (3).jpg',
                '/books/psh-cut/img (4).jpg',
                '/books/psh-cut/img (5).jpg',
                '/books/psh-cut/img (6).jpg',
                '/books/psh-cut/img (7).jpg',
                '/books/psh-cut/img (8).jpg',
                '/books/psh-cut/img (9).jpg',
                '/books/psh-cut/img (10).jpg',
                '/books/psh-cut/img (59).jpg',
                '/books/psh-cut/img (60).jpg',
                '/books/psh-cut/white.jpg',
            ])
            bookObjectRef.current.book.on("init", () => {
                if (bookRef.current && bookRef.current.parentElement) {
                    if (bookRef.current.offsetWidth > bookRef.current.parentElement.offsetWidth) {
                        bookRef.current.style.transformOrigin = "left top"
                        bookRef.current.style.transform = `translateZ(0) scale(${bookRef.current.parentElement.offsetWidth / bookRef.current.offsetWidth})`
                        // хотелось бы но чёт нет
                        bookRef.current.style.boxShadow = `inset 200px 0 10px -10px rgba(255, 0, 0, 0.8) !important;`
                        // pageShadowOverride.css
                    }
                }
            })
        }
    }, [])

    return (
        <section>
            <div>
                <div ref={bookRef} className="my-[4rem]"></div>
            </div>
        </section>
    )
}