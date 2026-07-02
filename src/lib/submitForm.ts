import { FORM_SUBMIT_FRAME_ID } from "@/components/FormSubmitFrame";

export const SUBMIT_FORM_URL = "https://submit-form.com/8yqPhUs5T";

const SUBMIT_TIMEOUT_MS = 12_000;

function getSubmitFrame(): HTMLIFrameElement {
  let frame = document.getElementById(FORM_SUBMIT_FRAME_ID) as HTMLIFrameElement | null;
  if (!frame) {
    frame = document.createElement("iframe");
    frame.id = FORM_SUBMIT_FRAME_ID;
    frame.name = FORM_SUBMIT_FRAME_ID;
    frame.title = "Form submission";
    frame.hidden = true;
    frame.className = "hidden";
    document.body.appendChild(frame);
  }
  return frame;
}

/**
 * Submits via a hidden HTML form into the shared iframe (no fetch → no CORS).
 * Used by every contact form on the site via useContactFormSubmit.
 */
export function submitContactForm(
  fields: Record<string, string>,
  options?: { formSource?: string },
): Promise<void> {
  return new Promise((resolve, reject) => {
    const frame = getSubmitFrame();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = SUBMIT_FORM_URL;
    form.target = FORM_SUBMIT_FRAME_ID;
    form.acceptCharset = "UTF-8";
    form.style.display = "none";

    const addField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    for (const [key, value] of Object.entries(fields)) {
      if (value.trim()) addField(key, value.trim());
    }
    if (options?.formSource) addField("_subject", options.formSource);

    let settled = false;
    let awaitingResponse = false;

    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      frame.onload = null;
      form.remove();
      if (ok) resolve();
      else reject(new Error("Form submission failed"));
    };

    const timeoutId = window.setTimeout(() => {
      if (awaitingResponse) finish(true);
    }, SUBMIT_TIMEOUT_MS);

    frame.onload = () => {
      if (!awaitingResponse) return;
      finish(true);
    };

    document.body.appendChild(form);
    awaitingResponse = true;
    form.submit();
  });
}
