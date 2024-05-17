import asyncHandler from 'express-async-handler'

//@desc  Auth user/set token
//route  POST /api/user/auth
// @access Public 

const authUser = asyncHandler (async (req, res) => {
    res.status(200).json({message:'Auth User'});
});

//@desc  REgister a new user
//route  POST /api/users
// @access Public 

const registerUser = asyncHandler (async (req, res) => {
    res.status(200).json({message:'Register User'});
});

//@desc  logout user
//route  POST /api/users/logout
// @access Public 

const logoutUser = asyncHandler (async (req, res) => {
    res.status(200).json({message:'Logout User'});
});

//@desc  get user profile
//route  GET /api/users/profile
// @access Private 

const getUserProfile = asyncHandler (async (req, res) => {
    res.status(200).json({message:'User Profile'});
});

//@desc  update User Profile
//route  PUT /api/users/profile
// @access Public 

const updateUserProfile = asyncHandler (async (req, res) => {
    res.status(200).json({message:'Update user profile'});
});

export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};