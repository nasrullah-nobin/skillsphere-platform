"use client";
import Image from "next/image";
import {
  Button,
  Card,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { format } from "date-fns";
import { BiEdit} from "react-icons/bi";

const ProfileCard = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const date = user?.createdAt ? new Date(user.createdAt) : null;
  
  const updateUser = async (e) => {
    const formData = new FormData(e.currentTarget);
     const name = formData.get("name");
        const image = formData.get("url");
    await authClient.updateUser({
      image,
      name,
    });
  };
  return (
    <div className="flex justify-center items-center min-h-[70vh] my-10 px-4">
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-white">
        <div className="flex flex-col items-center text-center">
          <Image
            src={user?.image}
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-blue-100"
          />

          <h2 className="text-2xl font-bold mt-4">{user?.name}</h2>

          <p className="text-gray-500 text-sm">{user?.email}</p>
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Role</span>
            <span className="font-medium">{user?.role}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Status</span>
            <span className="text-green-600 font-medium">Active</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Member Since</span>
            <span className="font-medium">
              {date && !isNaN(date)
                ? format(date, "EEEE, MMM dd, yyyy")
                : "N/A"}
            </span>
          </div>
        </div>

        <Modal>
          <Button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-md">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    <BiEdit className="size-5" />
                  </Modal.Icon>
                  <Modal.Heading>Update Your Profile</Modal.Heading>
                </Modal.Header>
                <Modal.Body className="p-6">
                  <Surface variant="default">
                    <form onSubmit={updateUser} className="flex flex-col gap-4">
                      <TextField className="w-full" name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                      </TextField>
                      <TextField className="w-full" name="url" type="url">
                        <Label>Image Url</Label>
                        <Input placeholder="Paste Your image url" />
                      </TextField>
                      <Modal.Footer>
                        <Button slot="close" variant="secondary">
                          Cancel
                        </Button>
                        <Button type="submit" slot="close">Update</Button>
                      </Modal.Footer>
                    </form>
                  </Surface>
                </Modal.Body>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </Card>
    </div>
  );
};

export default ProfileCard;
