import mongoose from "mongoose";


interface IUserSchema{
    email:string,
    username:string,
    password:string,
    picture:string,
    saveCode:Array<{_id:string}>

}

const UserSchema = new mongoose.Schema<IUserSchema>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    picture: {
      type: String,
      default:
        "https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-scaled.jpeg",
    },
    saveCode: [{ types: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
