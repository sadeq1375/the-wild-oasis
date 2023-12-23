import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hkzrbvnjtpfwlrmscadu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrenJidm5qdHBmd2xybXNjYWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwODQyODEsImV4cCI6MjAxODY2MDI4MX0.ZRvRlzStxLycklr7IFCVdqsjTiHi7vwuRmCEm_jaZB8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
