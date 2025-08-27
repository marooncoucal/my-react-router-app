export function CheckBoxes() {
    return (
        <div className="flex flex-col gap-[16px]">

            <div className="CheckBox
            px-[16px] pb-[2px] h-[30px] w-[100px]
            justify-between items-center flex gap-[8px]
            select-none">
                <input type="checkbox" className='cursor-pointer accent-color' />
                <div className="Text text-[16px] font-custom leading-none text-black whitespace-nowrap">Checkbox</div>
            </div>

            {/* example */}
            <fieldset>
                <legend className="text-sm/6 font-semibold text-white">By email</legend>
                <div className="mt-1 space-y-4">
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    defaultChecked
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    aria-describedby="comments-description"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm aspect-1
                  border border-white/10 bg-white/5 
                  checked:border-indigo-500 checked:bg-indigo-500 
                  indeterminate:border-indigo-500 indeterminate:bg-indigo-500 
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 
                  disabled:border-white/5 disabled:bg-white/10 disabled:checked:bg-white/10 
                  forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 aspect-1 self-center justify-self-center stroke-white group-has-disabled:stroke-white/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label htmlFor="comments" className="font-medium text-white">
                                Comments
                            </label>
                            <p id="comments-description" className="text-gray-400">
                                Get notified when someones posts a comment on a posting.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    aria-describedby="candidates-description"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-white/10 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500 indeterminate:border-indigo-500 indeterminate:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:checked:bg-white/10 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-white/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label htmlFor="candidates" className="font-medium text-white">
                                Candidates
                            </label>
                            <p id="candidates-description" className="text-gray-400">
                                Get notified when a candidate applies for a job.
                            </p>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}