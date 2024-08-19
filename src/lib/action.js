"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connection";
import { Post } from "./models";
import { signIn , signOut } from "./auth";

export const addPost = async(formData)=>{
  const {title,desc,userId,slug}=  Object.fromEntries(formData); 
  console.log(title,desc,userId,slug);

  try{
    connectToDb();
    const newPost = await Post.create({title,desc,userId,slug});
    await newPost.save();
    revalidatePath("/blog");
    console.log("post created");
    
  }catch(err){
    console.log(err);
    throw new Error("Failed to create post");
  }
  
}


export const deletePost = async(formData)=>{
  const {id}=  Object.fromEntries(formData);
  try{
    connectToDb();
     await Post.findByIdAndDelete(id);
     console.log("post deleted");
    revalidatePath("/blog");
  } catch(err){
    console.log(err);
    throw new Error("Failed to delete post");
  }
}

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogOut = async () => {
  "use server";
  await signOut();
};

