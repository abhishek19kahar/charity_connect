// "use client";
// import React, { useState } from "react";
// import { Button } from "./ui/button.tsx";
// import { Input } from "./ui/input.tsx";
// import { Label } from "./ui/label.tsx";
// import { Checkbox } from "./ui/checkbox.tsx";
// import { useNavigate } from "react-router-dom";
// import ngoLogo from "./ngoLogo.png";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardFooter,
// } from "./ui/card.tsx";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select.tsx";
// import { Upload } from "lucide-react";
// import { handleError, handleSuccess } from "./utils.js";
// import { DynamicFavicon } from "./DynamicFavicon.tsx";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";

// export default function VolunteerApply() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const handleSuccess = () => {
//     setSuccess(true);
//   };
//   const handleError = () => {
//     setError(true);
//   };
//   const [formData, setFormData] = useState({
//     name: localStorage.getItem("loggedInUser"),
//     email: localStorage.getItem("loggedEmail"),
//     phone: "",
//     address: "",
//     collegename: "",
//     collegeidphoto: "",
//     abcid: "",
//     description: "",
//     workinghour: "",
//   });
//   const [file, setFile] = useState<File | null>(null);
//   const navigate = useNavigate();

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!file) {
//       handleError();
//       return;
//     }

//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key as keyof typeof formData]);
//     }
//     data.append("collegeidphoto", file);

//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/volunteering/add",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to submit the form");
//       }

//       handleSuccess();
//       setFormData({
//         name: "",
//         phone: "",
//         address: "",
//         email: "",
//         collegename: "",
//         abcid: "",
//         collegeidphoto: "",
//         description: "",
//         workinghour: "",
//       });
//       setFile(null);

//       setTimeout(() => {
//         navigate("/home");
//       }, 3000);
//     } catch (error: any) {
//       handleError();
//     }    
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <>
//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone</Label>
//               <Input
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 placeholder="Enter your phone"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="address">Address</Label>
//               <Input
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 placeholder="Enter your Address"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="collegename">College Name</Label>
//               <Input
//                 name="collegename"
//                 value={formData.collegename}
//                 onChange={handleInputChange}
//                 placeholder="Enter your College"
//                 required
//               />
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <div className="space-y-2">
//               <Label htmlFor="idPhoto">College ID Photo</Label>
//               <div className="flex flex-col items-center gap-4">
//                 {formData.collegeidphoto && (
//                   <img
//                     src={formData.collegeidphoto}
//                     alt="ID preview"
//                     className="w-32 h-32 rounded-lg object-cover"
//                   />
//                 )}
//                 <div className="flex items-center justify-center w-full">
//                   <label
//                     htmlFor="collegeidphoto"
//                     className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted"
//                   >
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                       <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
//                       <p className="text-sm text-muted-foreground">
//                         Click to upload image
//                       </p>
//                     </div>
//                     <Input
//                       id="collegeidphoto"
//                       name="collegeidphoto"
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <div className="space-y-2">
//               <Label htmlFor="abcid">ABC ID</Label>
//               <Input
//                 name="abcid"
//                 value={formData.abcid}
//                 onChange={handleInputChange}
//                 placeholder="Enter ABC ID"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="volunteerReason">Reason for Volunteering</Label>
//               <Select
//                 name="volunteerReason"
//                 value={formData.description} // Binding value here
//                 onValueChange={(value) =>
//                   setFormData({ ...formData, description: value })
//                 }
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select your reason" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="college">College requirement</SelectItem>
//                   <SelectItem value="personal">Own free will</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="workinghour">Preferred Volunteering Time</Label>
//               <Input
//                 name="workinghour"
//                 type="text"
//                 className="w-full"
//                 value={formData.workinghour}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox id="terms" />
//               <label
//                 htmlFor="terms"
//                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 I agree to the terms and conditions
//               </label>
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-light">
//       <DynamicFavicon />
//       <Card className="w-full max-w-md bg-white">
//         <CardHeader className="space-y-1">
//           <div className="flex justify-center mb-4">
//             <img src={ngoLogo} alt="NGO Logo" width={100} height={100} className="rounded-full"/>
//           </div>
//           <CardTitle className="text-2xl font-bold text-center">
//             Join Our Cause
//           </CardTitle>
//           <CardDescription className="text-center">
//             Sign up as a Volunteer make a difference in the world 🌍
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             {renderStep()}
//             <div className="flex justify-between">
//               {currentStep > 1 && (
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => setCurrentStep(currentStep - 1)}
//                 >
//                   Previous
//                 </Button>
//               )}
//               {currentStep < 3 ? (
//                 <Button
//                   type="button"
//                   onClick={() => setCurrentStep(currentStep + 1)}
//                 >
//                   Next
//                 </Button>
//               ) : (
//                 <Button type="submit">Submit</Button>
//               )}
//             </div>
//           </form>
//         </CardContent>
//         {success && (
//           <Alert severity="success" className="mt-5 mb-5 ml-7 mr-7 pt-5 pb-5 pl-7 pr-7">
//             <AlertTitle>Success</AlertTitle>
//             Applied for Volunteering Successfully.
//           </Alert>
//         )}
//         {error && (
//           <Alert severity="error" className="mt-5 mb-5 ml-7 mr-7 pt-5 pb-5 pl-7 pr-7">
//             <AlertTitle>Error</AlertTitle>
//             Error applying for Volunteering.
//           </Alert>
//         )}
//       </Card>
//     </div>
//   );
// }














// yey code shobit wala hai

// "use client";
// import React, { useState } from "react";
// import { Button } from "./ui/button.tsx";
// import { Input } from "./ui/input.tsx";
// import { Label } from "./ui/label.tsx";
// import { Checkbox } from "./ui/checkbox.tsx";
// import { useNavigate } from "react-router-dom";
// import ngoLogo from "./ngoLogo.png";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardFooter,
// } from "./ui/card.tsx";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select.tsx";
// import { Upload, ChevronLeft, ChevronRight } from 'lucide-react';
// import { handleError, handleSuccess } from "./utils";
// import { DynamicFavicon } from "./DynamicFavicon.tsx";
// import { Progress } from "./ui/progress.tsx";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";

// export default function VolunteerApply() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const handleSuccess = () => {
//     setSuccess(true);
//   };
//   const handleError = () => {
//     setError(true);
//   };
//   const [formData, setFormData] = useState({
//     name: localStorage.getItem("loggedInUser") || "",
//     email: localStorage.getItem("loggedEmail") || "",
//     phone: "",
//     address: "",
//     collegename: "",
//     collegeidphoto: "",
//     abcid: "",
//     description: "",
//     workinghour: "",
//     volunteer_status:"y",
//   });
//   const [file, setFile] = useState<File | null>(null);
//   const navigate = useNavigate();

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!file) {
//       handleError();
//       return;
//     }

//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key as keyof typeof formData]);
//     }
//     data.append("collegeidphoto", file);

//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(
//         "http://localhost:8080/api/volunteering/add",
//         {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,

//           },
//           body:(data),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to submit the form");
//       }

//       handleSuccess();
//       setFormData({
//         name: "",
//         phone: "",
//         address: "",
//         email: "",
//         collegename: "",
//         abcid: "",
//         collegeidphoto: "",
//         description: "",
//         workinghour: "",
//         volunteer_status:"y",
//       });
//       setFile(null);

//       setTimeout(() => {
//         navigate("/home");
//       }, 3000);
//     } catch (error: any) {
//       handleError();
//     }    
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="Enter your phone"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="address">Address</Label>
//                 <Input
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   placeholder="Enter your Address"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="collegename">College Name</Label>
//                 <Input
//                   name="collegename"
//                   value={formData.collegename}
//                   onChange={handleInputChange}
//                   placeholder="Enter your College"
//                   required
//                 />
//               </div>
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <div className="space-y-4">
//               <Label htmlFor="idPhoto">College ID Photo</Label>
//               <div className="flex flex-col items-center gap-4">
//                 {formData.collegeidphoto && (
//                   <img
//                     src={formData.collegeidphoto}
//                     alt="ID preview"
//                     className="w-32 h-32 rounded-lg object-cover"
//                   />
//                 )}
//                 <div className="flex items-center justify-center w-full">
//                   <label
//                     htmlFor="collegeidphoto"
//                     className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted transition-colors duration-300"
//                   >
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                       <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
//                       <p className="text-sm text-muted-foreground">
//                         Click to upload image
//                       </p>
//                     </div>
//                     <Input
//                       id="collegeidphoto"
//                       name="collegeidphoto"
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <div className="space-y-4">
//               <div className="space-y-2 relative z-[100]">
//                 <Label htmlFor="abcid">ABC ID</Label>
//                 <Input
//                   name="abcid"
//                   value={formData.abcid}
//                   onChange={handleInputChange}
//                   placeholder="Enter ABC ID"
//                   required
//                 />
//               </div>
//               <div className="space-y-2 relative z-[100]">
//                 <Label htmlFor="volunteerReason">Reason for Volunteering</Label>
//                 <Select
//                   name="volunteerReason"
//                   value={formData.description}
//                   onValueChange={(value) =>
//                     setFormData({ ...formData, description: value })
//                   }
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select your reason" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-gray-100">
//                     <SelectItem value="college">College requirement</SelectItem>
//                     <SelectItem value="personal">Own free will</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="workinghour">Preferred Volunteering Time</Label>
//                 <Input
//                   name="workinghour"
//                   type="text"
//                   className="w-full"
//                   value={formData.workinghour}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="terms" />
//                 <label
//                   htmlFor="terms"
//                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 >
//                   I agree to the terms and conditions
//                 </label>
//               </div>
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
//       <DynamicFavicon />
//       <Card className="w-full max-w-md bg-white shadow-xl">
//         <CardHeader className="space-y-1">
//           <div className="flex justify-center mb-4">
//             <img src={ngoLogo} alt="NGO Logo" width={100} height={100} className="rounded-full shadow-md"/>
//           </div>
//           <CardTitle className="text-2xl font-bold text-center text-primary">
//             Join Our Cause
//           </CardTitle>
//           <CardDescription className="text-center text-muted-foreground">
//             Sign up as a Volunteer and make a difference in the world 🌍
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Progress value={(currentStep / 3) * 100} className="mb-4" />
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             {renderStep()}
//             <div className="flex justify-between mt-6">
//               {currentStep > 1 && (
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => setCurrentStep(currentStep - 1)}
//                   className="flex items-center bg-gray-100 hover:bg-200"
//                 >
//                   <ChevronLeft className="w-4 h-4 mr-2" />
//                   Back
//                 </Button>
//               )}
//               {currentStep < 3 ? (
//                 <Button
//                   type="button"
//                   onClick={() => setCurrentStep(currentStep + 1)}
//                   className="flex items-center ml-auto bg-gray-100 hover:bg-gray-200"
//                 >
//                   Next
//                   <ChevronRight className="w-4 h-4 ml-2" />
//                 </Button>
//               ) : (
//                 <Button type="submit" className="ml-auto bg-gradient-to-r from-blue-100 to-purple-100 hover:from-purple-100 hover:to-blue-100">Submit</Button>
//               )}
//             </div>
//           </form>
//         </CardContent>
//           {success && (
//           <Alert severity="success" className="mt-5 mb-5 ml-7 mr-7 pt-5 pb-5 pl-7 pr-7">
//             <AlertTitle>Success</AlertTitle>
//             Applied for Volunteering Successfully.
//           </Alert>
//         )}
//         {error && (
//           <Alert severity="error" className="mt-5 mb-5 ml-7 mr-7 pt-5 pb-5 pl-7 pr-7">
//             <AlertTitle>Error</AlertTitle>
//             Error applying for Volunteering.
//           </Alert>
//         )}
//       </Card>
//     </div>
//   );
// }




//these code is ruuninng

"use client";
import React, { useState } from "react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { Checkbox } from "./ui/checkbox.tsx";
import { useNavigate } from "react-router-dom";
import ngoLogo from "./ngoLogo.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select.tsx";
import { Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import { Progress } from "./ui/progress.tsx";
import { DynamicFavicon } from "./DynamicFavicon.tsx";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function VolunteerApply() {
  const [currentStep, setCurrentStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: localStorage.getItem("loggedInUser") || "",
    email: localStorage.getItem("loggedEmail") || "",
    phone: "",
    address: "",
    collegename: "",
    collegeidphoto: "",
    abcid: "",
    description: "",
    workinghour: "",
    volunteer_status: "y",
  });
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError(true);
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }
    data.append("collegeidphoto", file);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch("http://localhost:8080/api/volunteering/add", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        address: "",
        email: "",
        collegename: "",
        abcid: "",
        collegeidphoto: "",
        description: "",
        workinghour: "",
        volunteer_status: "y",
      });
      setFile(null);

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      setError(true);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your Address"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="collegename">College Name</Label>
                <Input
                  name="collegename"
                  value={formData.collegename}
                  onChange={handleInputChange}
                  placeholder="Enter your College"
                  required
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="space-y-4">
              <Label htmlFor="idPhoto">College ID Photo</Label>
              <div className="flex flex-col items-center gap-4">
                {formData.collegeidphoto && (
                  <img
                    src={formData.collegeidphoto}
                    alt="ID preview"
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                )}
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="collegeidphoto"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted transition-colors duration-300"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload image</p>
                    </div>
                    <Input
                      id="collegeidphoto"
                      name="collegeidphoto"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="abcid">ABC ID</Label>
                <Input
                  name="abcid"
                  value={formData.abcid}
                  onChange={handleInputChange}
                  placeholder="Enter ABC ID"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volunteerReason">Reason for Volunteering</Label>
                <Select
                  name="volunteerReason"
                  value={formData.description}
                  onValueChange={(value) =>
                    setFormData({ ...formData, description: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your reason" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-100">
                    <SelectItem value="college">College requirement</SelectItem>
                    <SelectItem value="personal">Own free will</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workinghour">Preferred Volunteering Time</Label>
                <Input
                  name="workinghour"
                  type="text"
                  className="w-full"
                  value={formData.workinghour}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <DynamicFavicon />
      <Card className="w-full max-w-md bg-white shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <img src={ngoLogo} alt="NGO Logo" width={100} height={100} className="rounded-full shadow-md" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-primary">Join Our Cause</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Sign up as a Volunteer and make a difference in the world 🌍
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={(currentStep / 3) * 100} className="mb-4" />
          <form className="space-y-4" onSubmit={handleSubmit}>
            {renderStep()}
            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center bg-gray-100 hover:bg-200"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex items-center bg-blue-500 hover:bg-blue-600"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" className="bg-green-500 hover:bg-green-600">
                  Submit
                </Button>
              )}
            </div>
          </form>
          {success && (
            <Alert severity="success" className="mt-4">
              <AlertTitle>Success!</AlertTitle>
              Your form was submitted successfully. Redirecting...
            </Alert>
          )}
          {error && (
            <Alert severity="error" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              There was an issue with your submission. Please try again.
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


