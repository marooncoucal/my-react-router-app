// https://svg-art.ru/?page_id=1047#img-p
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result
import React from "react";
import FileArrowDown from "../../public/img/FileArrowDown.svg"

type MyButtonProps = {
    onImageChange?: (src: string) => void;
    // `=> void` means function returns nothing
};

export function MyButton({ onImageChange }: MyButtonProps) {
    const handleFileChange =
        // `React.ChangeEvent` type for change events in React
        // `HTMLInputElement` type for <input> element
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            const file = e.target.files?.[0];
            // `target` - prop in DOM events that always points to element that started event
            if (
                file
                // if file was selected
                && file.type.startsWith('image/')
                // MIME type `'image/'` - only image files are processed
                // Multipurpose Internet Mail Extensions
            ) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // reads file contents
                reader.onload = (event) => {
                    if (onImageChange)
                    // if func onImageChange is undefined - runtime error
                    {
                        onImageChange(event.target?.result as string);
                        // `event.targer` is reader = FileReader()
                        // `result` is FileReader prop, returns the file's contents
                    }
                }; // assigns file cotents to onImageChange
            }
        };

    return (
        <div className="flex gap-2 h-[36px] min-w-[200px]">
            <label
                htmlFor="file-upload"
                // seems to work w/ it, maybe for keeping it organized?
                className="ButtonIconContainer
            text-white bg-black hover:bg-gray-700
            justify-between items-center flex gap-[8px] px-[12px] py-[8px] 
            select-none cursor-pointer
            border-solid border-black border-[1px]
            ">
                <span className="ButtonText text-[16px] leading-none whitespace-nowrap">Подгрузить файл</span>
                <div className="IconContainer mt-[2px]">
                    <img src={FileArrowDown} width="24" height="24" alt="FileArrowDown_icon" />
                    {/* how to svg color? */}
                </div>
                <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    className="sr-only"
                    onChange={handleFileChange}
                />
                {/* id - unique, name - may be reused (in form submission several uploads or buttons)*/}
                {/* sr-only - screen reader only, visually-hidden but retains info for devices withaccessibility */}
            </label>
        </div>
    )
}

{/* example */ }
{/* <div className="flex text-sm/6 text-gray-400">
    <label
        // htmlFor="file-upload"
        className="relative cursor-pointer rounded-md bg-transparent font-semibold bg-white/10 text-indigo-400 focus-within:outline-[20px] focus:outline-offset-2 focus:outline-red-500 hover:text-indigo-300"
    >
        <span>Upload a file</span>
        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
    </label>
</div> */}