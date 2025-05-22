"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type DeleteFormButtonProps = {
  formId: string;
};

const DeleteFormButton = ({ formId }: DeleteFormButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this form?")) return;
    setIsDeleting(true);

    try {
      const response = await fetch(`/api/forms/${formId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      toast.success("Form deleted successfully!");
      router.refresh();
    } catch (error) {
      console.error("Failed to delete form:", error);
      toast.error("Failed to delete the form. Please try again");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <Button
      onClick={handleDelete}
      variant="destructive"
      className="flex-1"
      disabled={isDeleting}
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default DeleteFormButton;
