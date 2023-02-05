import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jazpjbmrnopmulmpbxxv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphenBqYm1ybm9wbXVsbXBieHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDQwOTQsImV4cCI6MTk5MDcyMDA5NH0.eDToPfbTHUaL9pkUeWqOTKuxVbqdh7W2R9UyS4JGNIU",
  {
    auth: {
      autoRefreshToken: true,
    },
  }
);

export default supabase;
