import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { redirect } from "react-router";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit() {
    // e.preventDefault();

    if (!username) return;
    updateName(username);
    redirect("/menu");
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
          <Button action={handleSubmit} type="primary">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
