import { useState } from "react";

interface IForm {
  email: string;
  password: string;
}

function Signup() {
  const [type, setType] = useState<boolean>(false);

  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.email.includes("@") &&
      form.email.includes(".com") &&
      form.email.length > 7 &&
      form.password.length > 7
    ) {
    } else if (!form.email.includes("@") || !form.email.includes(".com")) {
      alert("Email must contain @ and .com");
    } else if (form.email.length <= 7) {
      alert("Email must contain minimum 8 characters");
    } else if (form.password.length <= 7) {
      alert("Password must contain minimum 8 characters");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const changeType = () => {
    setType(!type);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="text-center  w-full">
        <p className="text-center  text-3xl mb-10 leading-8 tracking-wider text-white">
          Xoş gəlmisən!
        </p>
        <div className="w-full flex justify-center">
          <form
            onSubmit={(e) => handleSubmit(e)}
            action="post"
            autoComplete="off"
            className="w-2/5 grid"
          >
            <input
              required={true}
              type="email"
              value={form.email}
              className=" block bg-[#1f2025] text-[#C3C3C3]
              outline-none px-6 py-5 rounded w-full mb-4 "
              onChange={(e) => handleChange(e)}
              placeholder="example@gmail.com"
              id="email"
            />
            <input
              required={true}
              type={`${type ? "text" : "password"}`}
              value={form.password}
              className=" block bg-[#1f2025] text-[#C3C3C3]
              outline-none px-6 py-5 rounded w-full mb-4 "
              onChange={(e) => handleChange(e)}
              id="password"
              placeholder="..........."
            />
            <p className="text-[#fff]  flex items-center text-center mt-2">
              <input
                required={true}
                type="checkbox"
                className="mr-2 outline-none text-3xl w-5 h-5 cursor-pointer "
                onClick={changeType}
              />{" "}
              <span>Şifrəni göstər</span>
            </p>

            <div className="w-full flex justify-center items-center">
              <button className="text-[#c3c3c3] w-2/5 text px-3 py-4 bg-[#1f2025] rounded  mt-8">
                Qeydiyyatdan keç
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
