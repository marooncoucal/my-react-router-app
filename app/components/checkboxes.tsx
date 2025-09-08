export function MyCheckBox({ children }: { children: string }) {
    return (
        <div className="CheckBox
            px-[16px] pb-[2px] items-center flex gap-[8px]
            select-none">
            <input
                type="checkbox"
                className='cursor-pointer accent-rose-500 w-[20px] h-[20px] relative not-checked:bg-white/10
                '
            />
            <label className="Text text-[16px] leading-none text-black whitespace-nowrap cursor-pointer">
                {children}
            </label>
        </div>
    )
}

export function MyRadioButton({ children, id, name }: { children: string, id: string, name: string }) {
    return (
        <div className="Radio
            px-[16px] pb-[2px] items-center flex gap-[8px]
            select-none">
            <input
                type="radio" id={id} name={name}
                className='
                appearance-none cursor-pointer relative
                w-[20px] h-[20px] rounded-full 
                border-solid border-black/20 border-[1px]
                checked:border-indigo-500 checked:bg-rose-500 
                before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden
                transition duration-300
                '
            />
            <label htmlFor={id} className="Text text-[16px] leading-none text-black whitespace-nowrap cursor-pointer">
                {children}
            </label>
        </div>
    )
}

// after:content-["\2714"]
// checked:content-["\2714"]

export function SelectBoxes() {
    return (
        <div className="flex flex-col gap-[16px] w-full py-[20px]">

            <div className="flex gap-[32px]">
                <fieldset className="CheckBoxes flex flex-col gap-[8px] w-full">
                    <legend className="Text text-[16px] font-medium text-black mb-1 whitespace-nowrap">Checkboxes</legend>
                    <MyCheckBox>прога</MyCheckBox>
                    <MyCheckBox>моделинг</MyCheckBox>
                    <MyCheckBox>академ чтение</MyCheckBox>
                </fieldset>
                <fieldset className="RadioField flex flex-col gap-[8px] w-full">
                    <legend className="Text text-[16px] font-medium text-black mb-1 whitespace-nowrap">Radio</legend>
                    <MyRadioButton id={'r1'} name={'radio'}>прога</MyRadioButton>
                    <MyRadioButton id={'r2'} name={'radio'}>моделинг</MyRadioButton>
                    <MyRadioButton id={'r3'} name={'radio'}>академ чтение</MyRadioButton>
                </fieldset>
            </div>

        </div>
    )
}

