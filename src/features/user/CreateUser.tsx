import { FormEvent, useState } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userCreators } from "../../types";

function CreateUser() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const { updateName } = bindActionCreators(userCreators, dispatch);

  const navigate = useNavigate();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!username) return;
    navigate("/menu");
    updateName(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        className="input sm:w-72 mb-8"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
