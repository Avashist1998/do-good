import { useState } from 'react';

interface UseTagsOptions {
  maxTags?: number;
}

const useTags = ({ maxTags = 20 }: UseTagsOptions = {}) => {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (tag: string) => {
    if (!tags.includes(tag) && tags.length < maxTags) {
      setTags([...tags, tag]);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return { tags, addTag: handleAddTag, removeTag: handleRemoveTag };
};

export default useTags;