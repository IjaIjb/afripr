import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar'
import { AdminApis } from '../../apis/adminApi/adminApi';
import { toast } from 'react-toastify';
import "react-responsive-modal/styles.css";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [visibleBlogs, setVisibleBlogs] = useState<number>(12);
  const BLOGS_PER_LOAD = 6; // Number of blogs to load each time the "Load More" button is clicked
  const navigate = useNavigate();
  
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

  const handleViewBlog = (id: string, blogTitle: string) => {
    // Format the course name for URL (replace spaces with hyphens, make lowercase)
    const formattedBlogTitle = blogTitle.replace(/\s+/g, '-').toLowerCase();
    // Navigate to the edit page with course name in URL and id in state
    navigate(`/blog-detail/${formattedBlogTitle}`, { state: { id } });
  };
  
  console.log(blogs)
  return (
    <div className="flex justify-center">
      <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
        <Navbar />
        
        {/* Blog Header */}
        <div className="text-center mt-[120px] mb-6">
          <h1 className="text-primary text-[40px] font-bold">Blog</h1>
          <div className='flex justify-center'>
            <p className="text-primary text-[16px] max-w-[791px] pb-3 px-4">
              AfriproEdu has been on the forefront of helping African students access world class education and here are some of our students testimonies
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <>
            {/* First Row - Two Featured Blogs */}
            {blogs?.records && blogs.records.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* First featured blog */}
                <div 
                  onClick={() => handleViewBlog(blogs.records[0]?.id, blogs.records[0]?.title)}
                  className="bg-green-50 rounded-lg overflow-hidden cursor-pointer">
                  <div className="aspect-w-16 aspect-h-9 h-40">
                    <img
                      src={blogs.records[0]?.blog_image || '/default-blog-image.png'}
                      alt={blogs.records[0]?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-medium text-gray-800 text-sm">
                      {blogs.records[0]?.title || "Emerging Career Fields & The Best Courses to Study in 2025"}
                    </h2>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-3">
                      {stripHtml(blogs.records[0]?.blog_content) || "Study for free in Finland and access world-class education by choosing AfyaSeeds. We will walk with you through every step..."}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-xs text-gray-500">{formatDate(blogs.records[0]?.created_at || new Date().toString())}</p>
                      <div className="flex space-x-1">
                        <button aria-label="View">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                        <button aria-label="Share">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second featured blog */}
                {blogs.records.length > 1 && (
                  <div 
                    onClick={() => handleViewBlog(blogs.records[1]?.id, blogs.records[1]?.title)}
                    className="bg-green-50 rounded-lg overflow-hidden cursor-pointer">
                    <div className="aspect-w-16 aspect-h-9 h-40">
                      <img
                        src={blogs.records[1]?.blog_image || '/default-blog-image.png'}
                        alt={blogs.records[1]?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="font-medium text-gray-800 text-sm">
                        {blogs.records[1]?.title || "Emerging Career Fields & The Best Courses to Study in 2025"}
                      </h2>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-3">
                        {stripHtml(blogs.records[1]?.blog_content) || "Study for free in Finland and access world-class education by choosing AfyaSeeds. We will walk with you through every step..."}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <p className="text-xs text-gray-500">{formatDate(blogs.records[1]?.created_at || new Date().toString())}</p>
                        <div className="flex space-x-1">
                          <button aria-label="View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </button>
                          <button aria-label="Share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Second Row - Two Medium Blogs */}
            {blogs?.records && blogs.records.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {blogs.records.slice(2, 4).map((blog: any, index: number) => (
                  <div 
                    key={blog.id || `row2-${index}`} 
                    onClick={() => handleViewBlog(blog.id, blog.title)}
                    className="bg-green-50 rounded-lg overflow-hidden cursor-pointer">
                    <div className="aspect-w-16 aspect-h-9 h-32">
                      <img
                        src={blog.blog_image || '/default-blog-image.png'}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="font-medium text-gray-800 text-sm">{blog.title || "Emerging Career Fields & The Best Courses to Study in 2025"}</h2>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{stripHtml(blog.blog_content) || "Study for free in Finland and access world-class education by choosing AfyaSeeds."}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-xs text-gray-500">{formatDate(blog.created_at || new Date().toString())}</p>
                        <div className="flex space-x-1">
                          <button aria-label="View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </button>
                          <button aria-label="Share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Third Row - Small Blogs (3x2 grid) */}
            {blogs?.records && blogs.records.length > 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {blogs.records.slice(4, Math.min(10, visibleBlogs)).map((blog: any, index: number) => (
                  <div 
                    key={blog.id || `row3-${index}`} 
                    onClick={() => handleViewBlog(blog.id, blog.title)}
                    className="bg-green-50 rounded-lg overflow-hidden cursor-pointer">
                    <div className="aspect-w-16 aspect-h-9 h-24">
                      <img
                        src={blog.blog_image || '/default-blog-image.png'}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="font-medium text-gray-800 text-xs">{blog.title || "Emerging Career Fields & The Best Courses to Study in 2025"}</h2>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-1">{stripHtml(blog.blog_content)}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-xs text-gray-500">{formatDate(blog.created_at || new Date().toString())}</p>
                        <div className="flex space-x-1">
                          <button aria-label="View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </button>
                          <button aria-label="Share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Fourth Row and Beyond - Alternating Layout for Remaining Blogs */}
            {blogs?.records && blogs.records.length > 10 && (
              <>
                {/* Display remaining blogs in alternating layouts */}
                {Array.from({ length: Math.ceil((Math.min(visibleBlogs, blogs.records.length) - 10) / 6) }).map((_, groupIndex) => (
                  <React.Fragment key={`group-${groupIndex}`}>
                    {/* Two Large Blogs */}
                    {blogs.records.length > 10 + (groupIndex * 6) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {blogs.records.slice(10 + (groupIndex * 6), 12 + (groupIndex * 6)).map((blog: any, index: number) => (
                          <div 
                            key={blog.id || `row4-${index}-${groupIndex}`} 
                            onClick={() => handleViewBlog(blog.id, blog.title)}
                            className="bg-green-50 rounded-lg overflow-hidden cursor-pointer">
                            <div className="aspect-w-16 aspect-h-9 h-40">
                              <img
                                src={blog.blog_image || '/default-blog-image.png'}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h2 className="font-medium text-gray-800 text-sm">{blog.title || "Emerging Career Fields & The Best Courses to Study in 2025"}</h2>
                              <p className="text-xs text-gray-600 mt-1 line-clamp-3">{stripHtml(blog.blog_content)}</p>
                              <div className="flex justify-between items-center mt-3">
                                <p className="text-xs text-gray-500">{formatDate(blog.created_at || new Date().toString())}</p>
                                <div className="flex space-x-1">
                                  <button aria-label="View">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </button>
                                  <button aria-label="Share">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                      <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Four Small Blogs in Grid */}
                    {blogs.records.length > 12 + (groupIndex * 6) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        {blogs.records.slice(12 + (groupIndex * 6), 16 + (groupIndex * 6)).map((blog: any, index: number) => (
                          <div 
                            key={blog.id || `row5-${index}-${groupIndex}`} 
                            onClick={() => handleViewBlog(blog.id, blog.title)}
                            className="bg-green-50 rounded-lg overflow-hidden cursor-pointer">
                            <div className="aspect-w-16 aspect-h-9 h-28">
                              <img
                                src={blog.blog_image || '/default-blog-image.png'}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3">
                              <h2 className="font-medium text-gray-800 text-xs">{blog.title || "Emerging Career Fields & The Best Courses to Study in 2025"}</h2>
                              <p className="text-xs text-gray-600 mt-1 line-clamp-1">{stripHtml(blog.blog_content)}</p>
                              <div className="flex justify-between items-center mt-2">
                                <p className="text-xs text-gray-500">{formatDate(blog.created_at || new Date().toString())}</p>
                                <div className="flex space-x-1">
                                  <button aria-label="View">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </button>
                                  <button aria-label="Share">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                      <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </>
            )}

            {/* Load More Button */}
            {blogs?.records && visibleBlogs < blogs.records.length && (
              <div className="flex justify-center my-8">
                <button 
                  onClick={() => setVisibleBlogs(prev => prev + BLOGS_PER_LOAD)}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Load More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M19 14l-7 7-7-7"></path>
                    <path d="M19 10l-7-7-7 7"></path>
                  </svg>
                </button>
              </div>
            )}

            {/* No blogs message */}
            {(!blogs?.records || blogs.records.length === 0) && (
              <div className="text-center py-10">
                <p>No blog posts found.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Blog