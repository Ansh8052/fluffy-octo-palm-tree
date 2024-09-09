import Category from '../models/categoryModel.js'; 

const createCategory = async (req, res) => {
  try {
    const {
      categoryIcon,
      categoryName,
      status,
      subcategories
      
    } = req.body;

    // Validate required fields
    if (!categoryIcon || !categoryName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new category instance
    const newCategory = new Category({
      categoryIcon,
      categoryName,
      subcategories: subcategories || [],
      status: status || 'active', 
      doctors:[] , 
      hospitals:[]
    });

    
    const savedCategory = await newCategory.save();

    res.status(201).json({ category: savedCategory });
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default createCategory ;
