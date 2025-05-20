"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FormBuilder = () => {
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
        questions: [...prev.questions, { id: uuidv4(), text: ''}]
    }))
}

const handleSubmit = (e: FormEvent) => {
    //Evita que o navegador recarregue sempre que submeter os dados
    e.preventDefault()
}

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
              >
                remove
              </Button>
            </div>
            <Textarea id={`Question-${index}`} value={question.text} 
            onChange={(e) => {}}
            placeholder="Enter your question"
            className="mt-1"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant='outline' onClick={() => {}}>Cancel</Button>
        <Button type='submit'>Save</Button>
      </div>
    </form>
  );
};

export default FormBuilder;
