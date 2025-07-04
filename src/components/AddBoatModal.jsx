import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal.jsx';

const AddBoatModal = ({ isOpen, onClose, onAddBoat }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Yacht',
    length: '',
    year: new Date().getFullYear(),
    location: '',
    status: 'Active',
    lastInspection: '',
    nextMaintenance: ''
  });

  const [errors, setErrors] = useState({});

  const boatTypes = ['Yacht', 'Sailboat', 'Motorboat', 'Catamaran', 'Fishing Boat', 'Speedboat'];
  const statuses = ['Active', 'Maintenance', 'Inactive'];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Boat name is required';
    if (!formData.length.trim()) newErrors.length = 'Length is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (formData.year < 1900 || formData.year > new Date().getFullYear() + 1) {
      newErrors.year = 'Please enter a valid year';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddBoat({
        ...formData,
        sections: {}
      });
      setFormData({
        name: '',
        type: 'Yacht',
        length: '',
        year: new Date().getFullYear(),
        location: '',
        status: 'Active',
        lastInspection: '',
        nextMaintenance: ''
      });
      setErrors({});
      onClose();
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Boat" size="lg">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Boat Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base ${
                errors.name ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="Enter boat name"
            />
            {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Boat Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            >
              {boatTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Length *
            </label>
            <input
              type="text"
              value={formData.length}
              onChange={(e) => handleChange('length', e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base ${
                errors.length ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="e.g., 45 ft"
            />
            {errors.length && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.length}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <input
              type="number"
              value={formData.year}
              onChange={(e) => handleChange('year', parseInt(e.target.value))}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base ${
                errors.year ? 'border-red-300' : 'border-gray-200'
              }`}
              min="1900"
              max={new Date().getFullYear() + 1}
            />
            {errors.year && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.year}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base ${
                errors.location ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="Marina or harbor name"
            />
            {errors.location && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.location}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Inspection
            </label>
            <input
              type="date"
              value={formData.lastInspection}
              onChange={(e) => handleChange('lastInspection', e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Next Maintenance
            </label>
            <input
              type="date"
              value={formData.nextMaintenance}
              onChange={(e) => handleChange('nextMaintenance', e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors text-sm sm:text-base"
          >
            Cancel
          </button>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base"
          >
            Add Boat
          </motion.button>
        </div>
      </form>
    </Modal>
  );
};

export default AddBoatModal;
