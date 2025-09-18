import { MyButton } from '~/components/button';
import chevronDown from '../../public/img/arrow_down.svg';
import ExampleFormsTailwind from '~/components/exampleFormsTailwind';

// https://doka.guide/recipes/checkbox-radio-style/
// https://svg-art.ru/?page_id=1047#img-p
// https://tailwindcss.com/plus/ui-blocks/application-ui/forms/form-layouts

// npm i @heroicons/react
// https://www.npmjs.com/package/@heroicons/react
// https://heroicons.com/solid

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { DropDownCustom, DropDownHTML } from '~/components/dropdown';
import { SelectBoxes } from '~/components/checkboxes';
import { BigTextInput, SimpleTextInput, TextExamples } from '~/components/textFields';
import { CheckBoxesExample, RadioButtonsExamples } from '~/components/radiobuttons';
import React, { useState } from 'react';
import Book from '~/components/book';

export function Welcome() {
  const [inputValueTF1, setInputValueTF1] = useState(' ');
  const [submittedValueTF1, setSubmittedValueTF1] = useState<string | null>(null);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSubmittedValueTF1(inputValueTF1);
    }
  };
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  // string for img, null when nithing was set


  return (
    <main className="flex flex-col items-center justify-center py-5 bg-gray-300">

      <div className='flex flex-col items-center justify-center gap-[16px] w-full max-w-[500px]'>


        <div className='flex gap-[8px] items-end w-full'>
          <SimpleTextInput value={inputValueTF1} onChange={setInputValueTF1} onKeyDown={handleKeyDown} />
          <MyButton onImageChange={setImageSrc} />
        </div>
        <BigTextInput />
        <div className='DROPS flex flex-row gap-[12px] w-full'>
          <DropDownHTML />
          <DropDownCustom
            label={'Направления'}
            defaultItem='все сферы'
            items={['все сферы', 'графический дизайн', 'цифровой дизайн', 'моушен дизайн', 'гейм-дизайн', 'реклама', 'менеджемент', 'медиа комммуникации', 'дизайн среды', 'дизайн интерьера', 'дизайн костюма']}
          />
        </div>

        <SelectBoxes />

        {/* <div className='h-1 w-full bg-black' />

        <div className='flex gap-[32px]'>
          <CheckBoxesExample />
          <RadioButtonsExamples />
        </div> */}
        {/* <ExampleFormsTailwind /> */}

        <div className='h-1 w-full bg-black' />

        <div>
          <label htmlFor="form1">Form result 1</label>
          <div id="form1">
            {submittedValueTF1 !== null && (
              <div>{submittedValueTF1}</div>
            )}
            <div style={{ marginTop: '16px' }}>
              {imageSrc && <img src={imageSrc} alt="img-uploaded" style={{ maxWidth: '300px', height: '200px' }} />}
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

{/* 
<ul>
  {resources.map(({ href, text, icon }) => (
    <li key={href}>
      <a
        className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
        {text}
      </a>
    </li>
  ))}
</ul> 
*/}