import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { sendMail } from "../utils/functions";

type ContactField = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === "";
    const isEmailEmpty = email.trim() === "";
    const isMessageEmpty = message.trim() === "";

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (isNameEmpty || isEmailEmpty || isMessageEmpty) {
      toast.error("Please fill all fields ⚠️");
      return;
    }

    setLoading(true);

    try {
      const data = await sendMail({
        mail: email,
        name: name,
        message: message,
      });

      toast.success(data.message.content);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      console.error("Erreur :", error);

      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to send message ❌");
      }
    } finally {
      setLoading(false); // ✅ remet le bouton normal
    }
  };

  const contactFields: ContactField[] = [
    {
      id: "name",
      label: "Your Name",
      placeholder: "What's your name?",
      value: name,
      onChange: (e) => setName(e.target.value),
      error: nameError,
      helperText: nameError ? "Please enter your name" : "",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "How can I reach you?",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      error: emailError,
      helperText: emailError ? "Please enter your email" : "",
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Send me any inquiries or questions",
      value: message,
      onChange: (e) => setMessage(e.target.value),
      error: messageError,
      helperText: messageError ? "Please enter the message" : "",
      multiline: true,
      rows: 8,
    },
  ];

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1 id="Contact">Contact Me (En Cours de Developpement)</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              {contactFields
                .filter((f) => !f.multiline)
                .map((field) => (
                  <TextField
                    key={field.id}
                    required
                    id={field.id}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                    error={field.error}
                    helperText={field.helperText}
                    variant="filled"
                    className="input-field bg-white"
                    fullWidth
                  />
                ))}
            </div>

            {contactFields
              .filter((f) => f.multiline)
              .map((field) => (
                <TextField
                  key={field.id}
                  required
                  id={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={field.onChange}
                  error={field.error}
                  helperText={field.helperText}
                  multiline
                  rows={field.rows}
                  className="body-form input-field bg-white"
                  variant="filled"
                  fullWidth
                />
              ))}

            <Button
              type="button"
              variant="contained"
              endIcon={<SendIcon />}
              className="send-button"
              disabled={true}
              sx={{ mt: 2 }}
            >
              Indisponible
            </Button>          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;