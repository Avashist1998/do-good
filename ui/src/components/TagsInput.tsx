import React, { useState } from 'react';
import useTags from './useTags';

const TagField = () => {
  const { tags, addTag, removeTag } = useTags();
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (userInput.trim()!== '' && tags.length < 21) {
        addTag(userInput);
        setUserInput('');
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      <input
        type="text"
        placeholder={tags.length < 20? 'Add a tag' : `You can only enter max. of 20 tags`}
        className="w-full border border-gray-300 rounded-md px-4 py-2"
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        disabled={tags.length === 20}
      />
      <div className="flex flex-wrap gap-3 mt-4">
        {tags.map((tag: string, index: number) => (
          <span
            key={`${index}-${tag}`}
            className="inline-flex items-start justify-start px-3 py-2 rounded-[32px] text-sm shadow-sm font-medium bg-green-100 text-green-800 mr-2"
          >
            {tag}
            <button
              className="ml-2 hover:text-green-500"
              onClick={() => removeTag(tag)}
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

export default TagField;