"use client"; // Required for client-side interactions

import React, { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDroneSchema } from "../DroneSchema";
import { Form } from "../../../components/ui/form";
import InputCommon from "../../../components/common/InputCommon";
import CardInputCommon from "../../../components/common/CardInputCommon";
const Page = () => {
  const [inputImage, setInputImage] = useState(null);

  const initialState = {
    name: "",
    speed: "",
    flight_duration: "",
    ceiling: "",
    fps: "",
    station: "",
    image: "",
  };
  const form = useForm({
    resolver: zodResolver(addDroneSchema),
    defaultValues: initialState,
  });

  const handleFormSubmit = () => {};
  return (
    <div className="flex justify-center min-h-screen p-10">
      <div className="flex flex-col w-[70%] gap-4">
        <div className="content-header text-center">
          <h1 className="text-xl font-bold">Add New Drone</h1>
          <p>Configure and Deploy Your Drone for Optimal Mission Performance</p>
        </div>
        <Form {...form} className="w-full">
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-4"
          >
            <CardInputCommon
              inputImage={inputImage}
              setInputImage={setInputImage}
            />
            <InputCommon
              name="name"
              label="Name"
              placeholder="Enter Drone Name"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
