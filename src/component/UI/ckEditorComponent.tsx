// CKEditorComponent.tsx
import React, { useEffect, useState } from 'react';

interface CKEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const CKEditorComponent: React.FC<CKEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write your content here...'
}) => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [CKEditor, setCKEditor] = useState<any>(null);
  const [ClassicEditor, setClassicEditor] = useState<any>(null);

  useEffect(() => {
    // Dynamically import the CKEditor components
    (async () => {
      try {
        const CKEditorModule = await import('@ckeditor/ckeditor5-react');
        const ClassicEditorModule = await import('@ckeditor/ckeditor5-build-classic');
        
        setCKEditor(() => CKEditorModule.CKEditor);
        setClassicEditor(() => ClassicEditorModule.default);
        setEditorLoaded(true);
      } catch (error) {
        console.error('Failed to load CKEditor modules:', error);
      }
    })();
  }, []);

  // If editor isn't loaded yet or failed to load, show a textarea as fallback
  if (!editorLoaded || !CKEditor || !ClassicEditor) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md p-2 min-h-[200px]"
      />
    );
  }

  // Once editor is loaded, render the CKEditor component
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      config={{
        toolbar: [
          'heading',
          '|',
          'bold', 
          'italic', 
          'underline',
          '|',
          'bulletedList', 
          'numberedList',
          '|',
          'link',
          '|',
          'undo', 
          'redo'
        ],
        placeholder: placeholder,
        // If you have a license key, uncomment and add it here:
        // licenseKey: 'your-license-key-here',
      }}
      onReady={(editor: any) => {
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(_event: any, editor: any) => {
        const data = editor.getData();
        onChange(data);
      }}
      onError={(error: any, { willEditorRestart }: any) => {
        if (!willEditorRestart) {
          console.error('CKEditor error:', error);
        }
      }}
    />
  );
};

export default CKEditorComponent;