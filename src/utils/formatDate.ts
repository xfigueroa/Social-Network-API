import { format } from "date-fns"; // Librería para formatear fechas

/**
 * Formatea una fecha en un formato legible.
 * @param date - Fecha a formatear
 * @returns Fecha en formato "dd/MM/yyyy HH:mm:ss"
 */
export const formatDate = (date: Date | string): string => {
  if (!date) return "Fecha no disponible";
  
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "Fecha inválida";

  return format(parsedDate, "dd/MM/yyyy HH:mm:ss");
};
