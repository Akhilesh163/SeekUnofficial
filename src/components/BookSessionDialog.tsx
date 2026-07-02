import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildMessageWithPhone, useContactFormSubmit } from "@/hooks/useContactFormSubmit";

type BookSessionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
};

export function BookSessionDialog({
  open,
  onOpenChange,
  title = "Book a session",
  description = "Share your details and what you want to improve. We'll reach out within 24 hours.",
}: BookSessionDialogProps) {
  const initialState = useMemo(
    () => ({ name: "", email: "", phone: "", details: "" }),
    [],
  );
  const [formData, setFormData] = useState(initialState);

  const { isSubmitting, submit } = useContactFormSubmit({
    formSource: "Book a session",
    successMessage: "Thanks! Your session request is submitted. We'll contact you soon.",
  });

  const canSubmit =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.phone.trim().length > 0 &&
    !isSubmitting;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const ok = await submit(
      {
        name: formData.name,
        email: formData.email,
        message: buildMessageWithPhone(formData.details, formData.phone) || "Book a session request",
      },
      () => {
        setFormData(initialState);
        onOpenChange(false);
      },
    );

    if (!ok) return;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle className="font-bold">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="book-session-name">Name</Label>
              <Input
                id="book-session-name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="book-session-phone">Phone</Label>
              <Input
                id="book-session-phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                required
                className="mt-1.5"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="book-session-email">Email</Label>
            <Input
              id="book-session-email"
              name="email"
              type="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              required
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="book-session-details">What do you want to work on?</Label>
            <Textarea
              id="book-session-details"
              name="message"
              placeholder="Exam (GMAT/GRE), your current level/score, target score, and what feels difficult..."
              value={formData.details}
              onChange={(e) => setFormData((p) => ({ ...p, details: e.target.value }))}
              className="mt-1.5 min-h-[120px]"
            />
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" className="rounded-full px-6 font-medium" disabled={!canSubmit}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
