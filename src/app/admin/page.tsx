import { redirect } from "next/navigation";
import AdminPanel from "@/components/admin/AdminPanel";
import { adminConfigured, isAuthed } from "@/lib/auth";
import { getContentFresh } from "@/lib/content";
import { storageMode } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!adminConfigured() || !(await isAuthed())) redirect("/admin/login");
  const content = await getContentFresh();
  return <AdminPanel initial={content} storage={storageMode()} />;
}
