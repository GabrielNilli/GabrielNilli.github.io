// =================================
//  IMPORTS
// =================================
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import GenericButton from "../../../GenericButton";

// =================================
//  CONFIG
// =================================
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// =================================
//  TYPES
// =================================
type SubmitStatus = "idle" | "sending" | "success" | "error";

// =================================
//  COMPONENT
// =================================
export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          email,
          subject: "New message from portfolio",
          message,
          time: new Date().toLocaleString(),
        },
        { publicKey: PUBLIC_KEY },
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  // =================================
  //  RENDER
  // =================================
  return (
    <section
      className="flex flex-col gap-5 border-2 border-[var(--border-color)]
                 bg-[var(--surface-color)] p-6 shadow-[6px_6px_0_var(--shadow-color)]"
    >
      <h2 className="text-lg font-bold uppercase tracking-wide text-[var(--text-color)]">
        Send a message
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
            Name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={status === "sending"}
            className="border-2 border-[var(--border-color)] bg-[var(--bg-color)]
                       px-3 py-2 text-[var(--text-color)] outline-none
                       focus:shadow-[3px_3px_0_var(--shadow-color)]
                       disabled:opacity-50"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={status === "sending"}
            className="border-2 border-[var(--border-color)] bg-[var(--bg-color)]
                       px-3 py-2 text-[var(--text-color)] outline-none
                       focus:shadow-[3px_3px_0_var(--shadow-color)]
                       disabled:opacity-50"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-color)]/60">
            Message
          </span>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            disabled={status === "sending"}
            className="resize-none border-2 border-[var(--border-color)] bg-[var(--bg-color)]
                       px-3 py-2 text-[var(--text-color)] outline-none
                       focus:shadow-[3px_3px_0_var(--shadow-color)]
                       disabled:opacity-50"
          />
        </label>

        <div className="flex items-center justify-between gap-4">
          {status === "success" && (
            <span className="flex items-center gap-2 text-sm font-bold text-[var(--status-color)]">
              <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
              Message sent — thank you!
            </span>
          )}
          {status === "error" && (
            <span className="flex items-center gap-2 text-sm font-bold text-[var(--accent-color)]">
              <XCircle className="h-4 w-4" strokeWidth={2.5} />
              Something went wrong. Try again.
            </span>
          )}
          {(status === "idle" || status === "sending") && <span />}

          <GenericButton
            type="submit"
            variant="primary"
            disabled={status === "sending"}
            className="ml-auto gap-2"
          >
            {status === "sending" ? (
              <>
                Sending
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
              </>
            ) : (
              <>
                Send
                <Send className="h-4 w-4" strokeWidth={2.5} />
              </>
            )}
          </GenericButton>
        </div>
      </form>
    </section>
  );
}
