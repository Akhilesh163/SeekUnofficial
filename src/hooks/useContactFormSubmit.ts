import { useCallback, useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/submitForm";

const SUBMIT_ERROR =
  "Something went wrong. Please try again or email seekyoury@gmail.com.";

export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

type UseContactFormSubmitOptions = {
  formSource: string;
  successMessage: string;
};

export function buildMessageWithPhone(message: string, phone?: string): string {
  const parts = [message.trim(), phone?.trim() ? `Phone: ${phone.trim()}` : ""].filter(Boolean);
  return parts.join("\n\n");
}

/** Shared submit handler — all site forms should use this hook. */
export function useContactFormSubmit({
  formSource,
  successMessage,
}: UseContactFormSubmitOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = useCallback(
    async (payload: ContactFormPayload, onSuccess?: () => void) => {
      setIsSubmitting(true);
      try {
        await submitContactForm(
          {
            name: payload.name.trim(),
            email: payload.email.trim(),
            message: payload.message.trim() || formSource,
          },
          { formSource },
        );
        toast.success(successMessage);
        onSuccess?.();
        return true;
      } catch {
        toast.error(SUBMIT_ERROR);
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [formSource, successMessage],
  );

  return { isSubmitting, submit };
}
