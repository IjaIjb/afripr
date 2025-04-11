
// BlogManagement.tsx
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { AdminApis } from '../../../apis/adminApi/adminApi';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout';
import LoadingSpinner from '../../../component/UI/LoadingSpinner';
// Import the CKEditor component
import BlogEditor from './BlogEditor';
// Types
interface Blog {
  id: string;
  title: string;
  blog_content: string;
  blog_image: string;
  createdAt: string;
}

interface BlogFormData {
  title: string;
  blog_content: string;
  blog_image: string | null;
}

const BlogManagement: React.FC = () => {
  // State
  const [blogs, setBlogs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [blogImage, setBlogImage] = useState<any>(null);
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    blog_content: '',
    blog_image: blogImage,
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Fetch all blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await AdminApis.getAllBlogs();
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to fetch blogs');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle rich text editor changes
  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({
      ...prev,
      blog_content: content,
    }));
  };

  // Handle image upload
  // const [overviewImage, setOverviewImage] = useState<any>(null);
  // const [loader, setLoader] = useState<any>(false);

  const BlogImageUpload: any = ({ image, setImage }:any) => {
    const [loading, setLoading] = useState(false);

    const handleImageChange = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = e.target.files?.[0];
      if (file) {
        setLoading(true); // Show loading spinner or indicator

        try {
          // Create a FormData object
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "urban_image"); // Replace with your Cloudinary preset

          // Upload to Cloudinary
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dngyazspl/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const result = await response.json();
          if (result.secure_url) {
            // Set the image URL in the state
            setImage(result.secure_url);
            setFormData(prev => ({
              ...prev,
              blog_image: result.secure_url
            }));
          }

          setLoading(false); // Stop loading
        } catch (error) {
          console.error("Error uploading image", error);
          toast.error("Error uploading image. Please try again.");
          setLoading(false);
        }
      }
    };

    return (
      <div className="flex justify-center text-center">
        <label className="flex w-full bg-white border-dashed border border-[#D8D8E2] flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
          <div className="flex flex-col items-center justify-center h-[120px]">
            {image ? (
              <img
                className=""
                src={image} // This should now be the Cloudinary URL
                alt="Uploaded logo"
                width={100}
                height={100}
              />
            ) : (
              <div>
              <div className="flex justify-center">
                <img src="/images/loan/upload.svg" className="text-center" alt="Upload Icon" />
              </div>
              <div className="text-green-600 text-sm">
                <p>Click to upload</p>
                <p className="text-gray-500">PNG, JPG (max. 10MB)</p>
              </div>
            </div>
            )}
          </div>
          <input
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            className="hidden mb-2 text-sm text-[#6C757D] font-medium"
            onChange={handleImageChange}
          />
        </label>
        {loading && <p><LoadingSpinner /></p>}
      </div>
    );
  };

  // Open add blog modal
  const openAddModal = () => {
    setIsEditing(false);
    setFormData({
      title: '',
      blog_content: '',
      blog_image: null,
    });
    setBlogImage(null);
    setIsAddModalOpen(true);
  };

  // Open edit blog modal
  const openEditModal = (blog: Blog) => {
    setIsEditing(true);
    setSelectedBlog(blog);
    setBlogImage(blog.blog_image);
    setFormData({
      title: blog.title,
      blog_content: blog.blog_content,
      blog_image: blog.blog_image,
    });
    setIsAddModalOpen(true);
  };

  // Open delete confirmation modal
  const openDeleteModal = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsDeleteModalOpen(true);
  };

  // Close modals
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedBlog(null);
  };

  // Handle blog submission (create or update)
  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.blog_content.trim()) {
      toast.error('Title and content are required');
      return;
    }
    
    try {
      if (isEditing && selectedBlog) {
        // Update existing blog
        await AdminApis.updateBlog(selectedBlog.id, formData);
        toast.success('Blog updated successfully');
      } else {
        // Create new blog
        await AdminApis.createBlog(formData);
        toast.success('Blog created successfully');
      }
      
      // Refresh blogs list and close modal
      fetchBlogs();
      closeAddModal();
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error(isEditing ? 'Failed to update blog' : 'Failed to create blog');
    }
  };

  // Handle blog deletion
  const handleDeleteBlog = async () => {
    if (!selectedBlog) return;
    
    try {
      await AdminApis.deleteBlog(selectedBlog.id);
      toast.success('Blog deleted successfully');
      
      // Refresh blogs list and close modal
      fetchBlogs();
      closeDeleteModal();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete blog');
    }
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  // Strip HTML tags for preview display
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <AdminDashboardLayout>
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-green-600">Blog Management</h1>
        <button
          onClick={openAddModal}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-200"
        >
          Add Banner
        </button>
      </div>

      {/* Blog Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs?.records?.map((blog:any) => (
            <div key={blog.id} className="bg-green-50 rounded-lg p-4 flex">
              <div className="w-16 h-full mr-4">
                <img
                  src={blog.blog_image || '/default-blog-image.png'}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <div className='flex items-center justify-between'>
                <h3 className="font-medium text-gray-800 mb-1">{blog.title}</h3>
                <p className="text-xs text-gray-400">{formatDate(blog.created_at)}</p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-2">{stripHtml(blog.blog_content)}</p>
                <div className="flex justify-end items-center space-x-2 mt-2">
                <button
                  onClick={() => openEditModal(blog)}
                  className="text-gray-500 hover:text-blue-500 transition"
                  aria-label="Edit"
                >
                  <img src='/images/adminDashboard/edit.svg' className='w-4 h-4' alt='Edit'/>
                </button>
                <button
                  onClick={() => openDeleteModal(blog)}
                  className="text-gray-500 hover:text-red-500 transition"
                  aria-label="Delete"
                >
                  <img src='/images/adminDashboard/delete.svg' className='w-4 h-4' alt='Delete'/>
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Featured Video Section */}
      <div className="mt-8">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Featured Video</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                {/* Placeholder for video thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-2 flex justify-between items-center">
                <span className="text-xs text-gray-500">{formatDate(new Date().toISOString())}</span>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-blue-500 transition" aria-label="Edit">
                    <FaEdit size={14} />
                  </button>
                  <button className="text-gray-500 hover:text-red-500 transition" aria-label="Delete">
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Blog Modal */}
      <Modal 
        open={isAddModalOpen} 
        onClose={closeAddModal} 
        center
        classNames={{
          modal: 'rounded-lg max-w-2xl w-full p-0 overflow-hidden'
        }}
      >
        <div className="p-4 border-b">
          <h2 className="text-lg font-medium">{isEditing ? "Edit Blog" : "Add Blog"}</h2>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmitBlog} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Topic
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Title"
              />
            </div>
            
            <div>
              <label htmlFor="blog_content" className="block text-sm font-medium text-gray-700 mb-1">
                Blog Write-up
              </label>
              <div className="">
           
              <BlogEditor
  value={formData.blog_content}
  onChange={handleEditorChange}
  placeholder="Write your blog content here..."
/>
                  
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Picture
              </label>
              <BlogImageUpload image={blogImage} setImage={setBlogImage} />
            </div>
            
            <div className="mt-8 pt-6">
              <button
                type="submit"
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal 
        open={isDeleteModalOpen} 
        onClose={closeDeleteModal} 
        center
        classNames={{
          modal: 'rounded-lg max-w-md w-full p-5 overflow-hidden'
        }}
      >
        <div className="text-center mb-6">
          <h3 className="text-lg font-medium mb-2">Delete Blog</h3>
          <p className="text-gray-600">
            Are you sure you want to delete "{selectedBlog?.title}"?
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Note: Deleting this Blog will also remove the blog from this platform.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleDeleteBlog}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
          >
            Confirm
          </button>
          <button
            onClick={closeDeleteModal}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md transition"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
    </AdminDashboardLayout>
  );
};

export default BlogManagement;

// Add this to your global CSS file or create a new CSS file
// global.css or ckeditor-styles.css
/*
.ck-editor__editable {
  min-height: 200px;
  max-height: 400px;
}

.ck.ck-editor {
  width: 100%;
}

.ck-editor-container {
  margin-bottom: 20px;
}
*/