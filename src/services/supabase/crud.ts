import { supabase } from "./init";

export async function getDataFromTable(table: string) {
  try {
    const { data, error } = await supabase.from(table).select();

    if (error) throw error;

    return {
      ok: true,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
}
