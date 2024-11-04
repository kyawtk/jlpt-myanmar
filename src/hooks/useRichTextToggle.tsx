import { useState, useEffect } from 'react';
import truncate from 'truncate-html';

const useRichTextToggle = (
  htmlContent: string,
  truncatedContentLength = 100,
) => {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    const originalContent = htmlContent || '';
    const truncatedContent = truncate(
      originalContent,
      truncatedContentLength,
      {},
    );

    if (originalContent.length > truncatedContentLength) {
      setShowMore(true);
      setContent(truncatedContent);
    } else {
      setContent(originalContent);
    }
  }, [htmlContent, truncatedContentLength]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return {
    content: expanded ? htmlContent : content,
    showMore,
    expanded,
    handleToggle,
  };
};

export default useRichTextToggle;
