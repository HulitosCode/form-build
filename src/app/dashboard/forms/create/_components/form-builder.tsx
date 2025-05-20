"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const FormBuilder = () => {
const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    questions: [
      {
        id: "1",
        text: "",
      },
    ],
  });

  const addQuestion = () => {
    setForm((prev) => ({
      ...prev,
      questions: [...prev.questions, { id: uuidv4(), text: "" }],
    }));
  };

  const removeQuestion = (index: number) => {
    if (form.questions.length > 1) {
      setForm((prev) => ({
        ...prev,
        questions: prev.questions.filter((_, i) => i !== index),
      }));
    } else {
      toast.error("Form must have at least one question");
    }
  };

  const handleQuestionChange = (index: number, value: string) => {
    const updateQuestions = [...form.questions];
    updateQuestions[index].text = value;
    setForm({ ...form, questions: updateQuestions });
  };

  const handleSubmit = async (e: FormEvent) => {
    //Evita que o navegador recarregue sempre que submeter os dados
    e.preventDefault();

    // Validate form
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }

    const emptyQuestions = form.questions.some((q) => !q.text.trim());
    if (emptyQuestions) {
      toast.error("All questions must have text");
      return;
    }

    try {
      setIsSubmitting(true);
      // Simulate the delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-8">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter form title"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="title">Description (Optional)</Label>
          <Textarea
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Enter form description"
            className="mt-1"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Questions</h3>
          <Button variant="outline" type="button" onClick={addQuestion}>
            Add Question
          </Button>
        </div>

        {form.questions.map((question, index) => (
          <div key={question.id} className="space-y-2 p-4 border rounded-md">
            <div className="flex items-center justify-between">
              <Label htmlFor={`Question-${index}`}>Question {index + 1}</Label>
              <Button
                variant="ghost"
                className="text-red-500 hover:text-red-700"
                type="button"
                size="sm"
                onClick={() => removeQuestion(index)}
              >
                remove
              </Button>
            </div>
            <Textarea
              id={`Question-${index}`}
              value={question.text}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              placeholder="Enter your question"
              className="mt-1"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Create form"}
        </Button>
      </div>
    </form>
  );
};

export default FormBuilder;
