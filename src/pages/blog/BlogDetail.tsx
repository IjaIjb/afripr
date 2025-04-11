import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminApis } from '../../apis/adminApi/adminApi';
import Navbar from '../../component/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import './blog-content-styles.css'; // Import the blog content styles

const BlogDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state?.id;
  
    const [isLoading, setIsLoading] = useState(false);
    const [blog, setBlog] = useState<any>(null);
    
    useEffect(() => {
      const fetchBlogData = async () => {
        try {
          setIsLoading(true);
          const response = await AdminApis.getBlogById(id);
          if (response?.data) {
            setBlog(response.data);
          }
        } catch (error) {
          console.error('Error fetching blog:', error);
          toast.error("Failed to load blog data");
        } finally {
          setIsLoading(false);
        }
      };
      
      if (id) {
        fetchBlogData();
      }
    }, [id]);
  
    const handleBackClick = () => {
      navigate(-1); // Go back to the previous page
    };
  
    // Format date to readable format
    const formatDate = (dateString: string) => {
      if (!dateString) return "No date available";
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };
  
  return (
    <div className='bg-gray-100'>
      <div className="flex justify-center">
        <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
          <Navbar />

          <div className="mt-[140px] mb-8">
            <div className="flex justify-between mb-4">
              <button
                type="button"
                onClick={handleBackClick}
                className="flex items-center gap-1 text-gray-600 mb-4"
              >
                <FaArrowLeft className="" />
                <h4>Back</h4>
              </button>
              
              {/* Blog Header */}
              <div className="text-center">
                <h1 className="text-primary text-[40px] font-bold">Blog</h1>
                <div className='flex justify-center'>
                  <p className="text-primary text-[16px] max-w-[791px] pb-3 px-4">
                    AfriproEdu has been on the forefront of helping African students access world class education and here are some of our students testimonies
                  </p>
                </div>
              </div>
              <div></div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
              </div>
            ) : blog ? (
              <div className="max-w-4xl mx-auto">
                {/* Featured Image */}
                <div className="mb-8 rounded-xl bg-white overflow-hidden">
                  <img
                    src={blog.blog_image || "/default-blog-image.png"}
                    alt={blog.title}
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                  <div className='p-5'>
                    {/* Blog Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
                    
                    {/* Blog Meta Info */}
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <span>{formatDate(blog.created_at || new Date().toString())}</span>
                      <span className="mx-2">•</span>
                      <span>By AfriproEdu Team</span>
                    </div>
                  </div>
                </div>
                
                {/* Blog Content - Apply the correct CSS classes */}
                <div className="bg-white p-6 rounded-xl">
                  <div 
                    className="blog-content-wrapper" 
                    dangerouslySetInnerHTML={{ __html: blog.blog_content }}
                  />
                </div>
                
                {/* Share and Social Links */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Share this article</h4>
                      <div className="flex space-x-3">
                        {/* Social sharing icons */}
                        <button aria-label="Share on Twitter" className="text-gray-500 hover:text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </button>
                        <button aria-label="Share on Facebook" className="text-gray-500 hover:text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </button>
                        <button aria-label="Share on LinkedIn" className="text-gray-500 hover:text-blue-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={handleBackClick}
                      className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
                    >
                      Back to Blogs
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <p>Blog post not found. Please try again later.</p>
                <button 
                  onClick={handleBackClick}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  Back to Blogs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default BlogDetail