import { redirect } from "next/navigation";

export default function RootPage() {
  // This should never really render because middleware runs first,
  // but it keeps Next's validator happy.
  redirect("/en");
}
