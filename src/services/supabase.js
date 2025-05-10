import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qaewrcsstqcsglmcemek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhZXdyY3NzdHFjc2dsbWNlbWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzIyNzYsImV4cCI6MjA2MDM0ODI3Nn0.2QjvQyrAsj4Tmvm7oEegA206t7OQotNEHlQLy8NtAQo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
