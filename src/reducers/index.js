import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import signupReducers from "./signupReducer";
import googleAuthReducer from "./googleAuthReducer";
import facebookAuthReducer from "./facebookAuthReducer";
import profileReducer from "./profileReducer";
import PasswordResetReducer from "./passwordReducers/PasswordResetReducer";
import articleReducer from "./articleReducers/ArticleReducer";
import CommentReducer from './CommentReducer';

const rootReducer = combineReducers({
  user: signupReducers,
  login: LoginReducer,
  articles: articleReducer,
  googleLogin: googleAuthReducer,
  facebookLogin: facebookAuthReducer,
  profile: profileReducer,
  passwordResetConfirm: PasswordResetReducer,
  comment: CommentReducer
});
export default rootReducer;
