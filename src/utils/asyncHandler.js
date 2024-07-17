const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message, success: false });
  }
};

export { asyncHandler };

// This is another way and advanced way (using promises):-

// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }
