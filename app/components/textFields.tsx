type Props = {
    value: string;
    onChange: (val: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export function SimpleTextInput({ value, onChange, onKeyDown }: Props) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (val) {
            onChange(e.target.value)
        }
    };

    return (
        <div className="w-full">
            <label htmlFor="name" className="block text-[16px] font-medium text-black">
                Имя
            </label>
            <div className="mt-[2px]">
                <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    value={value}
                    onChange={handleInputChange}
                    onKeyDown={onKeyDown}
                    className="block w-full px-3 py-1.5 
                    text-base text-black text-[16px]
                    bg-white outline-1 -outline-offset-1 outline-black
                    placeholder:text-gray-500 
                    focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-black"
                />
            </div>
        </div>
    )
}

export function BigTextInput() {
    return (
        <div className="w-full">
            <label htmlFor="about" className="block text-[16px] font-medium text-black">
                О себе
            </label>
            <div className="mt-[2px]">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full bg-white px-3 py-1.5 
                    text-base text-black text-[16px] placeholder:text-gray-500
                    outline-1 -outline-offset-1 outline-black 
                    focus:outline-[3px] focus:-outline-offset-[3px] focus:outline-black"
                    defaultValue={''}
                />
            </div>
            <p className="mt-[8px] text-[14px] font-medium text-gray-500">Напишите несколько предложений о себе.</p>
        </div>
    )
}

export function TextExamples() {
    return (
        <div>
            {/* example */}
            <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                </div>
            </div>

            {/* example */}
            <div className="col-span-full">
                <label htmlFor="about" className="block text-sm/6 font-medium text-white">
                    About
                </label>
                <div className="mt-2">
                    <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        defaultValue={''}
                    />
                </div>
                <p className="mt-3 text-sm/6 text-gray-400">Write a few sentences about yourself.</p>
            </div>
        </div>
    )
}