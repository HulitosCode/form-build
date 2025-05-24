import FormBuilder from "./_components/form-builder";

const CreateForms = () => {
  return (
    <div className="max-w-3xl max-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create New Form</h1>
        <p className="text-gray-500 mt-1">Design your custom form</p>
      </div>

      <FormBuilder initialData={{
        id: "",
        title: "",
        description: "",
        questions: []
      }} />
    </div>
  );
};

export default CreateForms;
