"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Card, CardContent } from "../ui/card";
import { Plus } from "lucide-react";

const CardInputCommon = ({ inputImage, setInputImage }) => {
  const { register, setValue } = useFormContext(); 


  const openFilePicker = () => {
    document.getElementById("fileInput").click();
  };

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setInputImage(imageUrl); // Update state for preview
      setValue("image", file); // Register file in React Hook Form
    }
  };

  return (
    <div className="image-input flex items-center justify-center">
      {/* Hidden File Input */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        {...register("image")} // Register in React Hook Form
        onChange={handleImageChange}
      />

      {/* Clickable Card for Image Selection */}
      <div>
        <Card
          className="cursor-pointer w-72 flex items-center justify-center hover:bg-gray-200 transition-all ease-in-out shadow-lg !p-0"
          onClick={openFilePicker}
        >
          <CardContent className="h-40 flex items-center justify-center !p-0">
            {inputImage ? (
              <img
                src={inputImage}
                alt="Selected"
                className="h-full w-full object-cover rounded-md"
              />
            ) : (
              <Plus className="text-gray-500" />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardInputCommon;
