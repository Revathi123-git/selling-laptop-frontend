// frontend/src/utils/validateBrandModel.js
import { brandModels } from "@/data/brandModelData";

export function validateBrandModelFrontend(category, brand, model) {
  // Convert safe values
  const cat = category?.trim();
  const br = brand?.trim();
  const md = model?.trim();

  if (!cat) return { valid: true };

  // --- iPhone special handling ---
  if (cat === "iPhone") {
    if (!md) {
      return { valid: false, message: "iPhone model is required." };
    }
    const list = brandModels["iPhone"].map(x => x.toLowerCase());
    return list.includes(md.toLowerCase())
      ? { valid: true }
      : { valid: false, message: `Model '${md}' is not a valid iPhone model.` };
  }

  const list = brandModels[cat];

  // If category has no brand-model list → skip validation
  if (!list) return { valid: true };

  // --- If brand is empty → skip both fields (optional fields) ---
  if (!br) return { valid: true };

  // Find brand
  const brandEntry = list.find(
    item => item.brand?.toLowerCase() === br.toLowerCase()
  );

  if (!brandEntry) {
    return {
      valid: false,
      message: `Brand '${brand}' is not valid for '${category}' frontend.`
    };
  }

  // Brand exists → model must not be empty
  if (!md) {
    return {
      valid: false,
      message: `Please enter a model for brand '${brand}'.`
    };
  }

  // Validate model
  const validModels = brandEntry.models.map(m => m.toLowerCase());

  if (!validModels.includes(md.toLowerCase())) {
    return {
      valid: false,
      message: `Model '${md}' is not valid for brand '${brand}'.`
    };
  }

  return { valid: true };
}
