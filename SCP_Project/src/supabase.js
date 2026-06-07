import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iiuwqkzvxlfpopaciymd.supabase.co";
const supabaseKey = "sb_publishable_pj0_7N9ucvv_kmNwGO2Uag_8g0hLUAi";

export const supabase = createClient(supabaseUrl, supabaseKey);