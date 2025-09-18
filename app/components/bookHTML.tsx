// https://nodlik.github.io/react-pageflip/

import React, { useRef, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Page = forwardRef<HTMLDivElement, { children?: React.ReactNode; number?: string }>(
    (props, ref) => {
        return (
            <div className="demoPage" ref={ref}>
                {/* ref required */}
                <h1>Page Header</h1>
                <p>{props.children}</p>
                <p>Page number: {props.number}</p>
            </div>
        );
    });

export default function MyBook() {
    return (
        <HTMLFlipBook
            width={400}
            height={600}
            className="my-book"
            style={{ margin: "auto", backgroundColor: '#B38080' }}
            startPage={0}
            size="fixed"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1536}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={false}
            drawShadow={true}
            flippingTime={400}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={20}
            showPageCorners={true}
            disableFlipByClick={false}
        >
            <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
            <Page number="5">Page text</Page>
            <Page number="6">Page text</Page>
            <Page number="7">Page text</Page>
            <Page number="8">Page text</Page>
        </HTMLFlipBook>
    );
}

// const PageCover = forwardRef<HTMLDivElement, { children?: React.ReactNode; number?: string }>(
//     (props, ref) => {
//         return (
//             <div className="page page-cover" ref={ref} data-density="hard">
//                 <div className="page-content">
//                     <h2>{props.children}</h2>
//                 </div>
//             </div>
//         );
//     });

// const Page = forwardRef<HTMLDivElement, { children?: React.ReactNode; number?: BigInteger | 1 }>(
//     (props, ref) => {
//         return (
//             <div className="page" ref={ref}>
//                 <div className="page-content">
//                     <h2 className="page-header">Page header - {props.number}</h2>
//                     <div className="page-image"></div>
//                     <div className="page-text">{props.children}</div>
//                     <div className="page-footer">{props.number + 1}</div>
//                 </div>
//             </div>
//         );
//     });

// class DemoBook extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             page: 0,
//             totalPage: 0,
//         };
//     }

//     nextButtonClick = () => {
//         this.flipBook.getPageFlip().flipNext();
//     };

//     prevButtonClick = () => {
//         this.flipBook.getPageFlip().flipPrev();
//     };

//     onPage = (e) => {
//         this.setState({
//             page: e.data,
//         });
//     };

//     componentDidMount() {
//         this.setState({
//             totalPage: this.flipBook.getPageFlip().getPageCount(),
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <HTMLFlipBook
//                     width={550}
//                     height={733}
//                     size="stretch"
//                     minWidth={315}
//                     maxWidth={1000}
//                     minHeight={400}
//                     maxHeight={1533}
//                     maxShadowOpacity={0.5}
//                     showCover={true}
//                     mobileScrollSupport={true}
//                     onFlip={this.onPage}
//                     onChangeOrientation={this.onChangeOrientation}
//                     onChangeState={this.onChangeState}
//                     className="demo-book"
//                     ref={(el) => (this.flipBook = el)}
//                 >

//                     <PageCover>BOOK TITLE</PageCover>
//                     <Page number={1}>Lorem ipsum...</Page>
//                     <Page number={2}>Lorem ipsum...</Page>
//                     {/*...*/}
//                     <PageCover>THE END</PageCover>

//                 </HTMLFlipBook>

//                 <div className="container">
//                     <div>

//                         <button type="button" onClick={this.prevButtonClick}>
//                             Previous page
//                         </button>

//                         [<span>{this.state.page}</span> of
//                         <span>{this.state.totalPage}</span>]

//                         <button type="button" onClick={this.nextButtonClick}>
//                             Next page
//                         </button>

//                     </div>
//                     <div>

//                         State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>

//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }