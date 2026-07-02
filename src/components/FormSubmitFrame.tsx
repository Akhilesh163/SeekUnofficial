/** Single hidden iframe for all submit-form.com posts (avoids CORS from fetch). */
export const FORM_SUBMIT_FRAME_ID = "seekyoury-form-submit";

export function FormSubmitFrame() {
  return (
    <iframe
      id={FORM_SUBMIT_FRAME_ID}
      name={FORM_SUBMIT_FRAME_ID}
      title="Form submission"
      hidden
      className="hidden"
    />
  );
}
