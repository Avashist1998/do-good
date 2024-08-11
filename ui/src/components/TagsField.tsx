import React, { useState } from 'react';

const TagsField = (props: {tags: string[], addTag: (tag: string) => void, removeTag: (tag: string) => void}) => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (userInput.trim()!== '' && props.tags.length < 21) {
        const tagValue = "#" + userInput.replace(/ /g, '-').toUpperCase();
        props.addTag(tagValue);
        setUserInput('');
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      <input
        type="text"
        placeholder={props.tags.length < 20? 'Add a tag' : `You can only enter max. of 20 tags`}
        className="w-full border border-gray-300 rounded-md px-4 py-2"
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        disabled={props.tags.length === 20}
      />
      <div className="flex flex-wrap gap-3 mt-4">
        {props.tags.map((tag: string, index: number) => (
          <span
            key={`${index}-${tag}`}
            className="inline-flex items-start justify-start px-3 py-2 rounded-[32px] text-sm shadow-sm font-medium bg-green-100 text-green-800 mr-2"
          >
            {tag}
            <button
              className="ml-2 hover:text-green-500"
              onClick={() => props.removeTag(tag)}
              title={`Remove ${tag}`}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsField;