import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
const verifyJWT = asyncHandler(async (req, _, next) => { // res is not used that's why _ used 
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedTokenInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedTokenInfo?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Unauthorized request");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Unauthorized request")
  }
});

export { verifyJWT };
