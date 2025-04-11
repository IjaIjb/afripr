
// PaymentManagement.tsx
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { AdminApis } from '../../../apis/adminApi/adminApi';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout';
import LoadingSpinner from '../../../component/UI/LoadingSpinner';
// Import the CKEditor component
// Types
// interface Payment {
//   id: string;
//   title: string;
//   amount: string;
//   payment_image: string;
//   createdAt: string;
// }

// interface PaymentFormData {
//   title: string;
//   amount: string;
//   slu: string | null;
// }

const Payment: React.FC = () => {
  // State
  const [payments, setPayments] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
//   const [paymentImage, setPaymentImage] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    title: '',
    amount: 0,
    slug: ""
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Fetch all Payments on component mount
  useEffect(() => {
    fetchPayments();
  }, []);

  // Fetch Payments from API
  const fetchPayments = async () => {
    setIsLoading(true);
    try {
      const response = await AdminApis.getAllPayments();
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
      toast.error('Failed to fetch payments');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev:any) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
// Handle form input changes
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData((prev: any) => {
      const updatedFormData = {
        ...prev,
        [name]: value,
      };
  
      if (name === "title") {
        updatedFormData.slug = value
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with dashes
          .replace(/[^a-z0-9-]/g, ""); // Remove special characters
      }
  
      return updatedFormData;
    });
  };
  

  // Open add payment modal
  const openAddModal = () => {
    setIsEditing(false);
    setFormData({
      title: '',
      amount: 0,
      slug: null,
    });
    // setPaymentImage(null);
    setIsAddModalOpen(true);
  };

  // Open edit payment modal
  const openEditModal = (payment: any) => {
    setIsEditing(true);
    setSelectedPayment(payment);
    // setPaymentImage(payment.payment_image);
    setFormData({
      title: payment.title,
      amount: payment.amount,
      slug: payment.slug,
    });
    setIsAddModalOpen(true);
  };

  // Open delete confirmation modal
  const openDeleteModal = (payment: any) => {
    setSelectedPayment(payment);
    setIsDeleteModalOpen(true);
  };

  // Close modals
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedPayment(null);
  };

  // Handle payment submission (create or update)
  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!formData.title.trim() || !formData.amount.trim()) {
      toast.error('Title and content are required');
      return;
    }
    console.log(formData)
    try {
      if (isEditing && selectedPayment) {
        // Update existing Payment
        await AdminApis.updatePayment(selectedPayment.id, formData);
    setIsLoading(false);
       
        toast.success('Payment updated successfully');
      } else {
        // Create new Payment
        await AdminApis.createPayment(formData);
    setIsLoading(false);
    toast.success('Payment created successfully');
      }
      
      // Refresh payments list and close modal
      fetchPayments();
      closeAddModal();
    } catch (error) {
      console.error('Error saving payment:', error);
      toast.error(isEditing ? 'Failed to update payment' : 'Failed to create payment');
    }
  };

  // Handle payment deletion
  const handleDeletePayment = async () => {
    if (!selectedPayment) return;
    setIsLoading(true)
    try {
      await AdminApis.deletePayment(selectedPayment.id);
      toast.success('Payment deleted successfully');
    setIsLoading(false)
      // Refresh payments list and close modal
      fetchPayments();
      closeDeleteModal();
    } catch (error) {
    setIsLoading(false)

      console.error('Error deleting Payment:', error);
      toast.error('Failed to delete Payment');
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
        <h1 className="text-2xl font-medium text-green-600">Payment Management</h1>
        <button
          onClick={openAddModal}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-200"
        >
          Add Payment
        </button>
      </div>

      {/* Payment Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {payments?.records?.map((payment:any) => (
            <div key={payment.id} className="bg-green-50 rounded-lg p-4 flex">
             
              <div className="flex-1">
                <div className='flex items-center justify-between'>
                <h3 className="font-medium text-gray-800 mb-1">{payment.title}</h3>
                <p className="text-xs text-gray-400">{formatDate(payment.created_at)}</p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-2">{stripHtml(payment.amount)}</p>
                <div className="flex justify-end items-center space-x-2 mt-2">
                <button
                  onClick={() => openEditModal(payment)}
                  className="text-gray-500 hover:text-blue-500 transition"
                  aria-label="Edit"
                >
                  <img src='/images/adminDashboard/edit.svg' className='w-4 h-4' alt='Edit'/>
                </button>
                <button
                  onClick={() => openDeleteModal(payment)}
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

    
      {/* Add/Edit Payment Modal */}
      <Modal 
        open={isAddModalOpen} 
        onClose={closeAddModal} 
        center
        classNames={{
          modal: 'rounded-lg max-w-2xl w-full p-0 overflow-hidden'
        }}
      >
        <div className="p-4 border-b">
          <h2 className="text-lg font-medium">{isEditing ? "Edit Payment" : "Add Payment"}</h2>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmitPayment} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
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
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
               Amount
              </label>
              <div className="">
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Title"
              />
              
                  
              </div>
            </div>
            
       
            
            <div className="mt-8 pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 disabled:bg-gray-400 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
              >
               {isLoading ? <LoadingSpinner /> : "Done"} 
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
          <h3 className="text-lg font-medium mb-2">Delete Payment</h3>
          <p className="text-gray-600">
            Are you sure you want to delete "{selectedPayment?.title}"?
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Note: Deleting this Payment will also remove the payment from this platform.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleDeletePayment}
            disabled={isLoading}
            className="flex-1 disabled:bg-gray-400 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
          >
          
            {isLoading ? <LoadingSpinner /> : "Confirm"} 

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

export default Payment;
