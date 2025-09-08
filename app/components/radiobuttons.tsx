export function RadioButtonsExamples() {
    return (
        <div className="w-full">
            <fieldset>
                <legend className="text-sm/6 font-semibold text-white">Push notifications</legend>
                <p className="mt-1 text-sm/6 text-gray-400">These are delivered via SMS to your mobile phone.</p>
                <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                        <input
                            defaultChecked
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
                        />
                        <label htmlFor="push-everything" className="block text-sm/6 font-medium text-white">
                            Everything
                        </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
                        />
                        <label htmlFor="push-email" className="block text-sm/6 font-medium text-white">
                            Same as email
                        </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 
                            before:absolute before:inset-1 before:rounded-full before:bg-white 
                            not-checked:before:hidden 
                            checked:border-indigo-500 checked:bg-indigo-500
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                            disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 
                            forced-colors:appearance-auto forced-colors:before:hidden"
                        />
                        <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-white">
                            No push notifications
                        </label>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export function CheckBoxesExample() {
    return (
        <div className="w-full">
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
                                    forced-colors:appearance-auto
                                    "/>
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