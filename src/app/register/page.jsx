"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const RegisterPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  };
  return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-100 px-4">

  <div className="w-full max-w-md my-10 bg-white p-8 rounded-2xl shadow-lg">

    <h2 className="text-2xl font-bold text-center">
      Create Your Account 🚀
    </h2>
    <p className="text-sm text-gray-500 text-center mt-1">
      Join and start learning today
    </p>

    <Form
      className="mt-6 flex flex-col gap-4"
      onSubmit={onSubmit}
    >

    
      <TextField isRequired>
        <Label>Name</Label>
        <Input placeholder="Write your name" name="name" />
        <FieldError />
      </TextField>

   
      <TextField isRequired type="url">
        <Label>Image URL</Label>
        <Input placeholder="Paste your image link" name="url" />
        <FieldError />
      </TextField>

   
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" name="email" />
        <FieldError />
      </TextField>


      <TextField
        isRequired
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) return "Minimum 8 characters";
          if (!/[A-Z]/.test(value)) return "Add one uppercase letter";
          if (!/[0-9]/.test(value)) return "Add one number";
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" name="password" />
        <Description>
          At least 8 characters, 1 uppercase & 1 number
        </Description>
        <FieldError />
      </TextField>

   
      <div className="flex gap-3 mt-2">
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Submit
        </Button>

        <Button
          type="reset"
          variant="secondary"
          className="w-full"
        >
          Reset
        </Button>
      </div>

    </Form>
  </div>
</div>
  );
};

export default RegisterPage;
