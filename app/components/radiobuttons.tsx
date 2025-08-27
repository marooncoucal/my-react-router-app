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
                            className="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
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