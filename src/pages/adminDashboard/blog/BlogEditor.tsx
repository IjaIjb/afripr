// BlogEditor.tsx
import React from 'react';
import './improved-editor-styles.css';
import ImprovedRichTextEditor from './ImprovedRichTextEditor';

interface BlogEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const BlogEditor: React.FC<BlogEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write your blog content here...'
}) => {
  return (
    <ImprovedRichTextEditor 
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default BlogEditor;