import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qaewrcsstqcsglmcemek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhZXdyY3NzdHFjc2dsbWNlbWVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDc3MjI3NiwiZXhwIjoyMDYwMzQ4Mjc2fQ.BwpOaCenUF3jwXBseZVfo1NrpWNNJ1G3-mJPnnj85bY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
