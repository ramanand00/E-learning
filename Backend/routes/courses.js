const express = require('express');
const router = express.Router();
const { auth, isAdmin } = require('../middleware/auth');
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  enrollCourse,
  rateCourse
} = require('../controllers/courseController');

// Public routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

// Protected routes
router.post('/', auth, isAdmin, createCourse);
router.put('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);
router.post('/:id/enroll', auth, enrollCourse);
router.post('/:id/rate', auth, rateCourse);

module.exports = router;
